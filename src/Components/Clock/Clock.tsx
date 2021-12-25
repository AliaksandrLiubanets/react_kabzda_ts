import React, {FC, useEffect, useState} from 'react'
import {ClockAnalog} from './AnalogClock'
import {ClockDigital} from './ClockDigital'

type ClockProps = {
    isAnalogClock: boolean
}

export const Clock: FC<ClockProps> = (props) => {

    return <>
        {
            props.isAnalogClock
                ? <ClockAnalog/>
                : <ClockDigital/>
        }
    </>
}

