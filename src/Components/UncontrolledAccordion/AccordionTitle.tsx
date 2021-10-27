import React from 'react'

type AccordionTitleType = {
    title: string
    collapsed: boolean
    showAccordionBody: (collapsed: boolean) => void
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle is rendering')
    return <h1 onClick={() => props.showAccordionBody(!props.collapsed)}>{props.title}</h1>
}