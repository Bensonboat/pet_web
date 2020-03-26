import React from 'react'
// import '../main.sass'
import { HomeOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useParams, useLocation } from "react-router";


function BottomMenuRow(){
    let location = useLocation();
    let pathname = location.pathname.split('/')[1];

    return (
        <div className='BottomMenuRow-bottom-menu-row'>
            <div className='BottomMenuRow-item'>
                <div className={`BottomMenuRow-icon-block ${pathname === 'Home' ? 'BottomMenuRow-current-page': ''}`}>
                    <Link to={`/Home`}>
                        <HomeOutlined className='BottomMenuRow-icon-style'/>
                        首頁
                    </Link>
                </div>
            </div>
            <div className='BottomMenuRow-item'>
                <div className={`BottomMenuRow-icon-block ${pathname === 'CategorySelect' ? 'BottomMenuRow-current-page': ''}`}>
                    <Link to='/CategorySelect'>
                        <ShoppingOutlined className='BottomMenuRow-icon-style'/>
                        分類
                    </Link>
                </div>
            </div>
            <div className='BottomMenuRow-item'>
                <div className='BottomMenuRow-icon-block'>
                    <UserOutlined className='BottomMenuRow-icon-style'/>
                    我的
                </div>
            </div>
        </div>
    )
}

export default BottomMenuRow