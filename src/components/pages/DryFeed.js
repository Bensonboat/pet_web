import React from 'react'
import CategoryHeader from '../CategoryHeader'
import LogoRow from "../LogoRow"
import ItemFilter from '../ItemFilter'
import ItemThumbnail from '../ItemThumbnail'

function DryFeed(){
    return (
        <div className='DryFeed-dry-food-page'>
            <LogoRow showPrePage={true}/>
            <div className='DryFeed-container'>
                <CategoryHeader img='../img/demo-img.png' helpTxt='品牌'/>
                <div>
                    <ItemFilter/>
                    <ItemThumbnail/>
                </div>
            </div>
        </div>
    )
}

export default DryFeed