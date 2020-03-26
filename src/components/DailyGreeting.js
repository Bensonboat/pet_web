import React from 'react'
// import '../main.sass'
import DailyTip from './DailyTip'

function DailyGreeting(){
    return (
        <div className='DailyGreeting-daily-greeting'>
            <span className='DailyGreeting-name-call'>Hi, Stranger!</span>
            <br/>
            <span className='DailyGreeting-general-greeting'>Ready to grab something ?</span>
        </div>
    )
}

export default DailyGreeting