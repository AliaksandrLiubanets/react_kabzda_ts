import React, {useState} from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    isToggle: boolean
}

export function OnOff(props: OnOffPropsType) {

    let [isToggle, setToggle] = useState(props.isToggle)
    const onClicked = () => setToggle(true)
    const offClicked = () => setToggle(false)

        return <div className={s.onOff}>
            <div className={isToggle ? s.on : s.empty} onClick={onClicked}>on</div>
            <div className={isToggle ? s.empty : s.off} onClick={offClicked}>off</div>
            <div className={isToggle ? s.green_circle : s.red_circle}></div>
        </div>
}

