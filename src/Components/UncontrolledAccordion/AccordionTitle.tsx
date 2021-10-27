import React from 'react'

type AccordionTitleType = {
    title: string
}

export function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle is rendering')
    return <h1>{props.title}</h1>
}