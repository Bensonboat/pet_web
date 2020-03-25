import React from 'react'
import '../main.sass'
import { SearchOutlined } from '@ant-design/icons'

class SearchBlock extends React.Component{
    render(){
        return (
            <div className='search-block'>
                <div className='input-row'>
                    <form action='true' className='input-block'>
                        <input type="search" className='item-search-input' placeholder='請輸入商品關鍵字'/>
                        <SearchOutlined style={{position: 'absolute', right: '10px',color: 'rgba(0,0,0,.2)', top: '50%', transform: 'translateY(-50%)'}}/>
                    </form>
                </div>
                <div className='log-in-tip'>Not Log in ?</div>
            </div>
        )
    }
}

export default SearchBlock