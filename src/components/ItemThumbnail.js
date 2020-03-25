import React, { useState } from 'react'

function ItemThumbnail(){
    const [item, setItem] = useState('1');
    
    let all_data = [
        {
            name: 'a',
            url: '../RHUA-side-smile-xss.png'
        },
        {
            name: 'b',
            url: '../logo512.png'
        },
        {
            name: 'c',
            url: '../logo192.png'
        },
        {
            name: 'd',
            url: '../demo-img.png'
        },
        {
            name: 'e',
            url: '../RHUA-side-smile-xss.png'
        },
        {
            name: 'f',
            url: '../IMG_0734 2.JPG'
        },
        {
            name: 'g',
            url: '../logo192.png'
        },
        {
            name: 'h',
            url: '../demo-img.png'
        },
        {
            name: 'i',
            url: '../RHUA-side-smile-xss.png'
        },
        {
            name: 'j',
            url: '../logo512.png'
        },
        {
            name: 'k',
            url: '../logo192.png'
        },
        {
            name: 'l',
            url: '../demo-img.png'
        },
        {
            name: 'm',
            url: '../RHUA-side-smile-xss.png'
        },
        {
            name: 'n',
            url: '../IMG_0734 2.JPG'
        },
        {
            name: 'o',
            url: '../logo192.png'
        },
        {
            name: 'p',
            url: '../demo-img.png'
        }
    ]

    let data = all_data.map((item, index) => {
        return (
            <div key={index} className='item-block'>
                <div className='img-block'>
                    <img src={item.url} alt="商品圖片" className='img'/>
                </div>
                <div className='item-name'>{item.name}</div>
            </div>

        )
    })
    
    console.log(item, 'this is item')

    return (
        <div className='item-thumbnail-block'>
            {data}
        </div>
    )
}

export default ItemThumbnail