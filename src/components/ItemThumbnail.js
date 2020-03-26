import React, { useState } from 'react'

function ItemThumbnail(){
    const [item, setItem] = useState('1');
    
    let all_data = [
        {
            name: 'a',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: 'b',
            url: '../img/logo512.png'
        },
        {
            name: 'c',
            url: '../img/logo192.png'
        },
        {
            name: 'd',
            url: '../img/demo-img.png'
        },
        {
            name: 'e',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: 'f',
            url: '../img/IMG_0734 2.JPG'
        },
        {
            name: 'g',
            url: '../img/logo192.png'
        },
        {
            name: 'h',
            url: '../img/demo-img.png'
        },
        {
            name: 'i',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: 'j',
            url: '../img/logo512.png'
        },
        {
            name: 'k',
            url: '../img/logo192.png'
        },
        {
            name: 'l',
            url: '../img/demo-img.png'
        },
        {
            name: 'm',
            url: '../img/RHUA-side-smile-xss.png'
        },
        {
            name: 'n',
            url: '../img/IMG_0734 2.JPG'
        },
        {
            name: 'o',
            url: '../img/logo192.png'
        },
        {
            name: 'p',
            url: '../img/demo-img.png'
        }
    ]

    let data = all_data.map((item, index) => {
        return (
            <div key={index} className='ItemThumbnail-item-block'>
                <div className='ItemThumbnail-img-block'>
                    <img src={item.url} alt="商品圖片" className='ItemThumbnail-img'/>
                </div>
                <div className='ItemThumbnail-item-name'>{item.name}</div>
            </div>

        )
    })
    
    console.log(item, 'this is item')

    return (
        <div className='ItemThumbnail-item-thumbnail-block'>
            {data}
        </div>
    )
}

export default ItemThumbnail