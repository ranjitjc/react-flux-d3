"use strict";
import React from 'react';
import AppStore from '../../stores/app-store';
import Links from './navigation'


export default class Header extends React.Component {
    render() {
        const { Title } = this.props;
        const style = {
        display:'flex',
        borderbottom: '1px solid #323232',
    };
    return <div><div style={style}><h1>{Title}</h1><Links /></div><hr/></div>;
    }
}