import React, {useState} from 'react'
import {AccordionBody} from './AccordionBody'
import {AccordionTitle} from './AccordionTitle'

type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    const showAccordionBody = () => {setCollapsed(!collapsed)}
        return <div>
            <AccordionTitle showAccordionBody={showAccordionBody} collapsed={collapsed} title={props.title}/>
            { !collapsed &&  <AccordionBody />}
        </div>
}

export default UncontrolledAccordion;