import React, {useState} from 'react'
import {AccordionBody} from './AccordionBody'
import {AccordionTitle} from './AccordionTitle'

type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)
    console.log('Accordion is rendering')
        return <div>
            <AccordionTitle title={props.title}/><button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
            { !collapsed &&  <AccordionBody />}
        </div>
}

export default UncontrolledAccordion;