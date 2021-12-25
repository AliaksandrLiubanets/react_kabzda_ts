import React, {FC, useState} from 'react'
import {ClockAnalog} from './ClockAnalog'
import {ClockDigital} from './ClockDigital'
import s from '../Clock/AnalogClock.module.css'

type ClockProps = {
}

export const Clock: FC<ClockProps> = () => {

    const [isAnalogClock, setIsAnalogClock] = useState(false)
    const toggleClock = () => setIsAnalogClock(!isAnalogClock)

    return <div className={s.clock}>
        {
            isAnalogClock
                ? <ClockAnalog/>
                : <ClockDigital/>
        }
        <div className={s.button}>
            <button onClick={toggleClock}>{isAnalogClock ? 'Chose digital clock' : 'Chose analog clock'}</button>
        </div>
    </div>
}

