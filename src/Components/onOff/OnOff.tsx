import React, {useState} from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    // isToggle: boolean
}

// export function Toggle(props: OnOffPropsType) {
//     if(props.isToggle) {
//         return <div className={s.onOff}>
//             <div className={s.on}>on</div>
//             <div className={`${s.empty}`}>off</div>
//             <div className={s.green_circle}></div>
//         </div>
//     } else {
//         return <div className={s.onOff}>
//             <div className={s.empty}>on</div>
//             <div className={s.off}>off</div>
//             <div className={s.red_circle}></div>
//         </div>
//     }
// }

export function OnOff() {

    let [isToggle, setToggle] = useState(false)

        return <div className={s.onOff}>
            <div className={isToggle ? s.on : s.empty} onClick={() => setToggle(true)}>on</div>
            <div className={isToggle ? s.empty : s.off} onClick={() => setToggle(false)}>off</div>
            <div className={isToggle ? s.green_circle : s.red_circle}></div>
        </div>
}

