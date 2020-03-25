import React, { useState }  from 'react'

function HomeHotItem(){
    let [hotItemData, setData] = useState('')
    console.log(hotItemData, 'xxx')

    return (
        <div className='home-hot-item fx'>
            <div className='item-block'>
                <img src='../logo192.png' alt=''/>
                <div className='item-name'>test1</div>
            </div>
            <div className='item-block'>
                <img src='../RHUA-side-smile-xss.png' alt=''/>
                <div className='item-name'>test2</div>
            </div>
            <div className='item-block'>
                <img src='../logo192.png' alt=''/>
                <div className='item-name'>test3</div>
            </div>
            <div className='item-block'>
                <img src='../logo192.png' alt=''/>
                <div className='item-name'>test4</div>
            </div>
        </div>
    )
}

export default HomeHotItem