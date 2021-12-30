import React, {FC, useEffect, useState} from 'react'
import s from './Clock.module.css'

type ClockProps = {
}

const addZero = (num: number) => num < 10 ? '0' + num : num

export const ClockDigital:FC<ClockProps> = (props) => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    return <div className={s.digital__block}>
        <div className={s.digital}>
            <span className={s.digital_hour}>{addZero(time.getHours())} : </span>
            <span className={s.digital_min}>{addZero(time.getMinutes())} : </span>
            <span className={s.digital_sec}>{addZero(time.getSeconds())}</span>
        </div>
    </div>
}

