import React from 'react';
import '../main.sass'

import { LeftOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function LogoRow(props){
    let preIcon;
    if(props.showPrePage === true){
        preIcon = (
            <Link to='/CategorySelect' className='back-all-category'>
                <div><LeftOutlined /></div>
            </Link>
        )            
    } 
     
    return (
        <div className='LogoRow-logo-row'>
            { preIcon }
            <div className='LogoRow-logo'>RHUA</div>
        </div>
    )
}

export default LogoRow