import React from 'react'
import '../main.sass'
import DailyTip from './DailyTip'

function DailyGreeting(){
    return (
        <div className='daily-greeting'>
            <span className='name-call'>Hi, Stranger!</span>
            <br/>
            <span className='general-greeting'>Ready to grab something ?</span>
        </div>
    )
}

export default DailyGreeting