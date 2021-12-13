import React from 'react'
import s from '../UncontrolledAccordion/UncontrolledAccordion.module.css'

function AccordionBody() {
    return <div className={s.accodrion_body}>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

type AccordionTitleType = {
    title: string
    setCollapsed: () =>  void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h1 className={s.h1_title} onClick={() => props.setCollapsed()}>{props.title}</h1>
}

export type StarsNumber = 0 | 1 | 2 | 3 | 4 | 5

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}

function Accordion({title, collapsed, onChange}: AccordionPropsType) {

    const changeCollapsed =  () => onChange(!collapsed)

        return <div>
            <AccordionTitle setCollapsed={changeCollapsed} title={title}/>
            { !collapsed &&  <AccordionBody />}
        </div>
}

export default Accordion;