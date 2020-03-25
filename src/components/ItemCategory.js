import React from 'react'

function ItemCategory(props){
    return (
        <div className='item-category'>
            <div className='item-block'>
                <div className='img-block'>
                    <img src='./logo192.png' alt=''/>
                </div>
                <div className='item-name'>{props.name}</div>
            </div>
        </div>
    )
}

export default ItemCategory