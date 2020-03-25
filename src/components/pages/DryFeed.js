import React from 'react'


import CategoryHeader from '../CategoryHeader'
import LogoRow from "../LogoRow"
import ItemFilter from '../ItemFilter'
import ItemThumbnail from '../ItemThumbnail'

function DryFeed(){
    return (
        <div className='dry-food-page'>
            <LogoRow showPrePage={true}/>
            <div style={{marginTop: '50px', position: 'relative', zIndex: 1}}>
                <CategoryHeader img='../demo-img.png' helpTxt='品牌'/>
                <div>
                    <ItemFilter/>
                    <ItemThumbnail/>
                </div>
            </div>
        </div>
    )
}

export default DryFeed