import React from 'react'
import s from '../UncontrolledAccordion/UncontrolledAccordion.module.css'
import {UsersType} from '../../App'

type AcccordionBodyPropsType = {
    items: Array<UsersType>
    onClick: (id: number) => void
}

function AccordionBody({items, onClick}: AcccordionBodyPropsType) {
    const itemElements = items.map(item => <li onClick={() => onClick(item.id)} key={item.id}>{item.title}</li>)
    return <div className={s.accodrion_body}>
        <ul>
            {itemElements}
        </ul>
    </div>
}

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
    color?: string
}

function AccordionTitle({title, color, setCollapsed}: AccordionTitleType) {
    return <div className={s.h1_title}>
        <h1 style={{color: color ? color : 'black'}} onClick={() => setCollapsed()}>
            {title}
        </h1>
    </div>
}

export type StarsNumber = 0 | 1 | 2 | 3 | 4 | 5

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    /**
     * Items should be rendered if thay are in props
     */
    color?: string
    /**
     * Array of users
     */
    items: Array<UsersType>
    onClick: (id: number) => void
}

function Accordion({title, collapsed, onChange, items, onClick, color}: AccordionPropsType) {

    const changeCollapsed = () => onChange(!collapsed)

    return <div>
        <AccordionTitle setCollapsed={changeCollapsed} title={title} color={color}/>
        {!collapsed && <AccordionBody onClick={onClick} items={items}/>}
    </div>
}

export default Accordion