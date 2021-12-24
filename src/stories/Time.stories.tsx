import React, {useEffect, useState} from 'react'

export default {
    title: 'Time'
}

export const Time = () => {
    console.log('Time')

    const [time, setTime] = useState(0)

    let todayZeroHMS

    useEffect(() => {
        const date = new Date()
        todayZeroHMS = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
        const timeNow = Date.now()
        const timeHMS = (timeNow - todayZeroHMS.getTime()) / 1000
        console.log('useEffect')
            // console.log('tick ' + time)
            setTime(timeHMS)
    })

    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time - hours * 3600) / 60)
    let seconds = Math.round(time - hours * 3600 - minutes * 60)

    return <>
        <div>
            {/*<div><span>yearNow {date}</span><span>year {year}</span></div>*/}
            <span>Actual time: {}</span><span>hours - {hours}; </span><span>minutes - {minutes}; </span><span>seconds - {seconds}</span>
        </div>
    </>
}

