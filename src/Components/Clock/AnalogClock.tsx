import React, {FC, useEffect, useState} from 'react'
import s from '../Clock/AnalogClock.module.css'
import sec from '../../assets/sec_700х100.png'
import min from '../../assets/min_700х100.png'
import hour from '../../assets/hour_700х100.png'

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

    const styleSec = {height: '700px',  transform: `rotate(${time.getSeconds() * 6}deg)`}
    const styleMin = {height: '700px',  transform: `rotate(${time.getMinutes() * 6}deg)`}
    const styleHour = {height: '700px', transform: `rotate(${time.getHours() * 30}deg)`}

    return <div className={s.analog}>
        <img style={styleHour} src={hour} alt={'hour'}/>
        <img style={styleMin} src={min} alt={'min'}/>
        <img style={styleSec} src={sec} alt={'sec'}/>
    </div>
}

