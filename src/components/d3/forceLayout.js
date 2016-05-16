"use strict";
import React from 'react';
import AppStore from '../../stores/app-store';
import d3 from 'd3';

export default class ForceLayout extends React.Component {
  componentDidMount() {
    const { width, height } = this.props;
    var data = AppStore.getData();
    //console.log(data);
    const force = d3.layout.force()
      .charge(-120)
      .linkDistance(50)
      .size([width, height])
      .nodes(data.nodes)
      .links(data.links);
    
    const svg = d3.select(this.refs.mountPoint)
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    
    const link = svg.selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .style('stroke', '#999999')
      .style('stroke-opacity', 0.6)
      .style('stroke-width', (d) => Math.sqrt(d.value));
    
    const color = d3.scale.category20();
    const node = svg.selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .style('stroke', '#FFFFFF')
      .style('stroke-width', 1.5)
      .style('fill', (d) => color(d.group))
      .call(force.drag);
    
    force.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
      
      node
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
    });
    
     force.start();
  }
  
  render() {
    const { width, height } = this.props;
    const style = {
      width,
      height,
      border: '1px solid #323232',
    };
    
    return <div style={style} ref="mountPoint" />
  }
}

