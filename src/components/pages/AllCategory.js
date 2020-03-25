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
            name: '1',
            route: 'DryFeed'
        },
        {
            name: '2',
            route: 'Toy'
        },
        {
            name: '3',
            route: 'Toy'
        },
        {
            name: '4',
            route: 'Toy'
        },
        {
            name: '5',
            route: 'Toy'
        },
        {
            name: '6',
            route: 'Toy'
        },
        {
            name: '7',
            route: 'Toy'
        }
    ]

    let arr = data.map((item, index) => {
        let data = <Link to={`/CategorySelect/${item.route}`} key={index} className='item'>
                        <div>
                            <ItemCategory name={item.name}/>
                        </div>
                    </Link>
        return data
    })

    return(
        <div className='category'>
            <LogoRow style={{position: 'fixed'}}/>
            <div className='container'>
                <div className='search-block' style={{width: '100%'}}>
                    <SearchBlock/>
                </div>
                <div className='category-block'>
                    {arr}
                </div>
            </div>
        </div>
    )
}

export default CategorySelect