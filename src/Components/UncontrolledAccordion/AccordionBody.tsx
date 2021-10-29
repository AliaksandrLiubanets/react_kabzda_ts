import React from 'react'
import s from '../UncontrolledAccordion/UncontrolledAccordion.module.css'


export function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <div className={s.accodrion_body}>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}