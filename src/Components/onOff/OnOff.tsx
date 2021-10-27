import React from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    isToggle: boolean
}

export function Toggle(props: OnOffPropsType) {
    if(props.isToggle) {
        return <div className={s.onOff}>
            <div className={s.on}>on</div>
            <div className={s.empty}>off</div>
            <div className={s.green_circle}></div>
        </div>
    } else {
        return <div className={s.onOff}>
            <div className={s.empty}>on</div>
            <div className={s.off}>off</div>
            <div className={s.red_circle}></div>
        </div>
    }
}

export function OnOff(props: OnOffPropsType) {
    return <div>
        <span className={{props.isToggle && s.on}}>on</span>
        <span className={!props.isToggle && s.off}>off</span>
    </div>
}

