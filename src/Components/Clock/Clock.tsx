import React, {FC, useEffect, useState} from 'react'

type ClockProps = {

}

const Clock:FC<ClockProps> = (props) => {

    const [time, setTime] = useState(new Date())

    return <>
        <div>
            {/*<div><span>yearNow {date}</span><span>year {year}</span></div>*/}
            <span>Actual time: {}</span><span>{addZero(hour)} : </span><span>{addZero(minutes)} : </span><span> {addZero(seconds)}</span>
        </div>
    </>
}

const addZero = (num: number) => num < 10 ? '0' + num : num

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

    return <>
        <div>
            {/*<div><span>yearNow {date}</span><span>year {year}</span></div>*/}
            <span>Actual time - </span>
            <span>{addZero(time.getHours())}
                : </span><span>{addZero(time.getMinutes())}
            : </span><span> {addZero(time.getSeconds())}</span>
        </div>
    </>
}

