import React from 'react'

import SearchBlock from '../SearchBlock'
import ItemCategory from '../ItemCategory'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useParams, useLocation } from "react-router";

import LogoRow from "../LogoRow";

function CategorySelect(){

    let location = useLocation();
    console.log(location, 'xx');

    let data = [
        {
            name: '玩具',
            route: 'Toy',
            url: '../img/puppy.jpg'
        },
        {
            name: '汪汪飼料',
            route: 'DryFeed',
            url: '../img/logo192.png'
        },
        {
            name: '喵喵飼料',
            route: 'Toy',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: '汪汪零食',
            route: 'Toy',
            url: '../img/demo-img.png'
        },
        {
            name: '喵喵零食',
            route: 'Toy',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: '用品',
            route: 'Toy',
            url: '../img/puppy.jpg'
        },
        {
            name: '其他',
            route: 'Toy',
            url: '../img/puppy.jpg'
        }
    ]

    let arr = data.map((item, index) => {
        let data = <Link to={`/CategorySelect/${item.route}`} key={index} className='item'>
                        <ItemCategory name={item.name} url={item.url}/>
                    </Link>
        return data
    })

    return(
        <div className='all-category'>
            <LogoRow style={{position: 'fixed'}}/>
            <div className='container'>
                {/* <div className='search-block' style={{width: '100%'}}> */}
                    <SearchBlock/>
                {/* </div> */}
                <div className='category-block'>
                    {arr}
                </div>
            </div>
        </div>
    )
}

export default CategorySelect