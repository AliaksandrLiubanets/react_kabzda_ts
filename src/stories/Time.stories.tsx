import React, {useEffect, useState} from 'react'

export default {
    title: 'Time'
}

const addZero = (time: string) => {
    if (time.length === 1) {
       return time = '0' + time
    } else {
        return time
    }
}

export const Time = () => {
    console.log('Time')

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    let hour = time.getHours().toString()
    let minutes = time.getMinutes().toString()
    let seconds = time.getSeconds().toString()

    return <>
        <div>
            {/*<div><span>yearNow {date}</span><span>year {year}</span></div>*/}
            <span>Actual time: {}</span><span>{addZero(hour)} : </span><span>{addZero(minutes)} : </span><span> {addZero(seconds)}</span>
        </div>
    </>
}

