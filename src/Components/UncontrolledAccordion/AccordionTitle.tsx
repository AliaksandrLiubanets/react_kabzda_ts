import React from 'react'

type AccordionTitleType = {
    title: string
    collapsed: boolean
    showAccordionBody: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle is rendering')
    return <h1 onClick={props.showAccordionBody}>{props.title}</h1>
}