import React, {FC, useEffect, useState} from 'react'
import s from '../Clock/Clock.module.css'
import sec from '../../assets/sec_700х100.png'
import min from '../../assets/min_700х100.png'
import hour from '../../assets/hour_700х100.png'
import w_dail from '../../assets/watch_dail.png'

type AnalogClockProps = {}

export const ClockAnalog: FC<AnalogClockProps> = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    const styleSec = {height: '600px',  transform: `rotate(${time.getSeconds() * 6}deg)`}
    const styleMin = {height: '600px',  transform: `rotate(${time.getMinutes() * 6}deg)`}
    const styleHour = {height: '600px', transform: `rotate(${time.getHours() * 30}deg)`}
    const styleAnalog = {backgroundImage: `url(${w_dail})`}

    return <div className={s.analog} style={styleAnalog}>
        <img style={styleHour} src={hour} alt={'hour'}/>
        <img style={styleMin} src={min} alt={'min'}/>
        <img style={styleSec} src={sec} alt={'sec'}/>
    </div>
}

