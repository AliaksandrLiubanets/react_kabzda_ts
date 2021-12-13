import React, {useState} from 'react'
import s from '../OnOff/OnOff.module.css'

export  type UncontrolledOnOffType = {
    // onChange?: (isToggle: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff({defaultOn}: UncontrolledOnOffType) {

    let [isToggle, setToggle] = useState(defaultOn ? defaultOn : false)
    const setOn = () => {
        setToggle(true)
        // onChange && onChange(true)
    }
    const setOff = () => {
        setToggle(false)
        // onChange && onChange(false)
    }


        return <div className={s.onOff}>
            <div className={isToggle ? s.on : s.empty} onClick={setOn}>on</div>
            <div className={isToggle ? s.empty : s.off} onClick={setOff}>off</div>
            <div className={isToggle ? s.green_circle : s.red_circle}></div>
        </div>
}

