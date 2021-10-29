import React from 'react'
import s from '../UncontrolledAccordion/UncontrolledAccordion.module.css'

type AccordionTitleType = {
    title: string
    collapsed: boolean
    showAccordionBody: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle is rendering')
    return <h1 className={s.h1_title} onClick={props.showAccordionBody}>{props.title}</h1>
}