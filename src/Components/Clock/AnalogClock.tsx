import React, {FC, useEffect, useState} from 'react'
import s from '../Clock/AnalogClock.module.css'
import sec from '../../assets/sec_700х100.png'

type AnalogClockProps = {
}

const addZero = (num: number) => num < 10 ? '0' + num : num

export const ClockAnalog:FC<AnalogClockProps> = (props) => {

    const [time, setTime] = useState(new Date())

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date())
    //     }, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // })

    return <>
        <div className={s.analog}>
            <img className={s.sec} src={sec} alt={'sec'}/>
        </div>
    </>
}

