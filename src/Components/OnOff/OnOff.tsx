import React from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    /**
     * Controlled property from state App
     */
    isToggle: boolean
    setIsToggle: (isToggle: boolean) => void
}

export function OnOff({isToggle, setIsToggle}: OnOffPropsType) {

        const onClicked = () => setIsToggle(true)
        const offClicked = () => setIsToggle(false)

        return <div className={s.onOff}>
            <div className={isToggle ? s.on : s.empty} onClick={onClicked}>on</div>
            <div className={isToggle ? s.empty : s.off} onClick={offClicked}>off</div>
            <div className={isToggle ? s.green_circle : s.red_circle}></div>
        </div>
}

