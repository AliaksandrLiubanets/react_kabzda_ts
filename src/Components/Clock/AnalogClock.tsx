import React, {FC, useEffect, useState} from 'react'
import s from '../Clock/AnalogClock.module.css'
import sec from '../../assets/sec_700х100.png'

type AnalogClockProps = {}

const addZero = (num: number) => num < 10 ? '0' + num : num

export const ClockAnalog: FC<AnalogClockProps> = (props) => {

    const [time, setTime] = useState(new Date())
    const seconds = time.getSeconds()
    const k = seconds * 6

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    const style = {height: '700px', backgroundColor: '#d5e8ec', transform: `rotate(${k}deg)`}

    return <div className={s.analog}>
        <img style={style} src={sec} alt={'sec'}/>
    </div>
}

