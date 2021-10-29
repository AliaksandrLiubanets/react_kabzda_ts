import React, {useState} from 'react'
import s from '../OnOff/OnOff.module.css'

export function UncontrolledOnOff() {

    let [isToggle, setToggle] = useState(false)

        return <div className={s.onOff}>
            <div className={isToggle ? s.on : s.empty} onClick={() => setToggle(true)}>on</div>
            <div className={isToggle ? s.empty : s.off} onClick={() => setToggle(false)}>off</div>
            <div className={isToggle ? s.green_circle : s.red_circle}></div>
        </div>
}

