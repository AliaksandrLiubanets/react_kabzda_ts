import React, {useEffect, useState} from 'react'

export default {
    title: 'Time'
}

export const Time = () => {
    console.log('Time')

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    })

    let hour = time.getHours().toString()
    let minutes = time.getMinutes().toString()
    let seconds = time.getSeconds().toString()
    if (hour.length === 1) {
        hour = '0'+ hour
    }
    if (minutes.length === 1) {
        minutes = '0' + minutes
    }
    if (seconds.length === 1) {
        seconds = '0' + seconds
    }

    return <>
        <div>
            {/*<div><span>yearNow {date}</span><span>year {year}</span></div>*/}
            <span>Actual time: {}</span><span>{hour} : </span><span>{minutes} : </span><span> {seconds}</span>
        </div>
    </>
}

