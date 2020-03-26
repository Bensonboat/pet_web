import React, { useState }  from 'react'

function HomeHotItem(){
    return (
        <div className='HomeHotItem-home-hot-item fx'>
            <div className='HomeHotItem-item-block'>
                <img src='../img/logo192.png' alt='' className='HomeHotItem-img'/>
                <div className='HomeHotItem-item-name'>test1</div>
            </div>
            <div className='HomeHotItem-item-block'>
                <img src='../img/RHUA-side-smile-xss.png' alt='' className='HomeHotItem-img'/>
                <div className='HomeHotItem-item-name'>test2</div>
            </div>
            <div className='HomeHotItem-item-block'>
                <img src='../img/logo192.png' alt='' className='HomeHotItem-img'/>
                <div className='HomeHotItem-item-name'>test3</div>
            </div>
            <div className='HomeHotItem-item-block'>
                <img src='../img/logo192.png' alt='' className='HomeHotItem-img'/>
                <div className='HomeHotItem-item-name'>test4</div>
            </div>
        </div>
    )
}

export default HomeHotItem