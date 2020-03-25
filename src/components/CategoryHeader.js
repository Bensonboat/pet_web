import React from 'react'

// import { LeftOutlined } from '@ant-design/icons'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CategoryHeader(props){
    return (
        <div className='category-header-component'>
            <div className='img-block'>
                {/* <Link to='/CategorySelect' className='back-all-category'>
                    <div><LeftOutlined /></div>
                </Link>             */}
                <img src={props.img} alt="" className='img'/>
            </div>
            <div className='help-txt'>找{props.helpTxt}?</div>
        </div>
    )
}

export default CategoryHeader