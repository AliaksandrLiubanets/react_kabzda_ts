import React from 'react'
import {AccordionBody} from './AccordionBody'
import {AccordionTitle} from './AccordionTitle'

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')
        return <div>
            <AccordionTitle title={props.title}/>
            { !props.collapsed &&  <AccordionBody />}
        </div>
}

export default UncontrolledAccordion;