import React, {useState} from 'react'
import {AccordionBody} from './AccordionBody'
import {AccordionTitle} from './AccordionTitle'

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(true)
        return <div>
            <AccordionTitle showAccordionBody={setCollapsed} collapsed={collapsed} title={props.title}/><button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
            { !collapsed &&  <AccordionBody />}
        </div>
}

export default UncontrolledAccordion;