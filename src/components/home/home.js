"use strict";
import React from 'react';
import Header from '../header/header'
import AppStore from '../../stores/app-store';
import ForceLayout from '../d3/forceLayout';


export default class Home extends React.Component {
    render() {
    return ( <div><Header Title="Home!" /><ForceLayout width={400} height={330} /></div>);
  }
}


