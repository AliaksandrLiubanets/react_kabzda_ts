import React from 'react'
import s from '../UncontrolledAccordion/UncontrolledAccordion.module.css'
import {UsersType} from '../../App'

type AcccordionPropsType = {
    items: Array<UsersType> | null
}

function AccordionBody({items}: AcccordionPropsType) {
    const itemElements = items?.map(item => <li key={item.id}>{item.title}: {item.value}</li>)
    return <div className={s.accodrion_body}>

        <ul>
            {
                items
                    ? itemElements
                    : <>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </>
            }
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
    /**
     * Items should be rendered if thay are in props
     */
    items?: Array<UsersType>
}

function Accordion({title, collapsed, onChange, items}: AccordionPropsType) {

    const changeCollapsed =  () => onChange(!collapsed)

        return <div>
            <AccordionTitle setCollapsed={changeCollapsed} title={title}/>
            { !collapsed &&  <AccordionBody items={items ? items : null}/>}
        </div>
}

export default Accordion;