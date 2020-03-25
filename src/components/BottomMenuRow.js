import React from 'react'
import '../main.sass'
import { HomeOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useParams, useLocation } from "react-router";


function BottomMenuRow(){
    let location = useLocation();
    let pathname = location.pathname.split('/')[1];
    console.log(pathname, 'pp')
    console.log(location, 'xx');

    return (
        <div className='bottom-menu-row fx'>
            <div className='item'>
                <div className={`icon-block ${pathname === 'Home' ? 'color-red': ''}`}>
                    <Link to={`/Home`}>
                        <HomeOutlined style={{fontSize: '25px', width: '100%', paddingBottom: '5px'}}/>
                        首頁
                    </Link>
                </div>
            </div>
            <div className='item'>
                <div className={`icon-block ${pathname === 'CategorySelect' ? 'color-red': ''}`}>
                    <ShoppingOutlined style={{fontSize: '25px', width: '100%', paddingBottom: '5px'}}/>
                    <Link to='/CategorySelect'>分類</Link>
                </div>
            </div>
            <div className='item'>
                <div className='icon-block'>
                    <UserOutlined style={{fontSize: '25px', width: '100%', paddingBottom: '5px'}}/>
                    <div className='item-txt'>我的</div>
                </div>
            </div>
        </div>
    )
}

export default BottomMenuRow