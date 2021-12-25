import React, {FC, useEffect, useState} from 'react'
import {ClockAnalog} from './AnalogClock'
import {ClockDigital} from './ClockDigital'
import s from '../Clock/AnalogClock.module.css'

type ClockProps = {
}

export const Clock: FC<ClockProps> = (props) => {

    const [isAnalogClock, setIsAnalogClock] = useState(true)
    const toggleClock = () => setIsAnalogClock(!isAnalogClock)

    return <div className={s.clock}>
        {
            isAnalogClock
                ? <ClockAnalog/>
                : <ClockDigital/>
        }
        <div className={s.button}>
            <button onClick={toggleClock}>Change clock</button>
        </div>
    </div>
}

