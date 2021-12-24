import React, {FC, useEffect, useState} from 'react'

type ClockProps = {
}

const addZero = (num: number) => num < 10 ? '0' + num : num

export const Clock:FC<ClockProps> = (props) => {

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
            <span>Actual time - </span>
            <span>{addZero(time.getHours())}
                : </span><span>{addZero(time.getMinutes())}
            : </span><span> {addZero(time.getSeconds())}</span>
        </div>
    </>
}

