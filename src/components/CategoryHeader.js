 import React from 'react'

function CategoryHeader(props){
    return (
        <div className='CategoryHeader-category-header-component'>
            <div className='CategoryHeader-img-block'>
                <img src={props.img} alt="" className='CategoryHeader-img'/>
            </div>
            <div className='CategoryHeader-help-txt'>找{props.helpTxt}?</div>
        </div>
    )
}

export default CategoryHeader