import React from 'react'
import '../main.sass'
import { SearchOutlined } from '@ant-design/icons'

class SearchBlock extends React.Component{
    render(){
        return (
            <div className='SearchBlock-search-block'>
                <div className='SearchBlock-input-row'>
                    <form action='true' className='SearchBlock-input-block'>
                        <input type="search" className='SearchBlock-item-search-input' placeholder='請輸入商品關鍵字'/>
                        <SearchOutlined className='SearchBlock-search-icon'/>
                    </form>
                </div>
                <div className='SearchBlock-log-in-tip'>Not Log in ?</div>
            </div>
        )
    }
}

export default SearchBlock