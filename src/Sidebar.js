import React from 'react';
import SidebarOptions from './SidebarOptions';
import './App.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1> Zendenta </h1>
            {/* <hr /> */}
            <SidebarOptions />
        </div>
    )
}
