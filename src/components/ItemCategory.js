import React from 'react'
import { RightOutlined } from '@ant-design/icons'

function ItemCategory(props){
    return (
        <div className='ItemCategory-item-category'>
            <div className='ItemCategory-item-block'>
                <div className='ItemCategory-img-block'>
                    <img className='ItemCategory-img ' src={props.url} alt=''/>
                </div>
                <div className='ItemCategory-item-name-row'>
                    <span>{props.name}</span>
                    <span className='ItemCategory-item-name-icon'><RightOutlined /></span>
                </div>
            </div>
        </div>
    )
}

export default ItemCategory