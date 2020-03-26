import React from 'react'
import '../../main.sass'

import DailyTip from '../../components/DailyTip'
import DailyGreeting from '../../components/DailyGreeting'
import SearchBlock from '../../components/SearchBlock'
import HomeHotItem from '../../components/HomeHotItem'

//引入新的hook 功能
import { useParams, useLocation } from "react-router";

import LogoRow from "../LogoRow";

let Home = () => {
    return (
        <div>
            <LogoRow />
            <div className='inside-container'>
                <DailyTip/>
                <div className='greeting-search-block'>
                    <DailyGreeting/>
                    <SearchBlock/>
                </div>
                <div className='home-hot-item-row'>
                    <HomeHotItem/>
                </div>
            </div>
        </div>
    )
}

export default Home