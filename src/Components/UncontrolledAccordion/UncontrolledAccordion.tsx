import React, {useReducer} from 'react'
import {AccordionBody} from './AccordionBody'
import {AccordionTitle} from './AccordionTitle'
import {reducerUncontrolledAccordion, TOGGLE_COLLAPSED} from './reducerUncontrolledAccordion'

type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, dispatchToState] = useReducer(reducerUncontrolledAccordion, {isCollapsed: false})

    const showAccordionBody = () => {dispatchToState({type: TOGGLE_COLLAPSED})}

        return <div>
            <AccordionTitle showAccordionBody={showAccordionBody}
                            collapsed={collapsed.isCollapsed}
                            title={props.title}/>
            { !collapsed.isCollapsed &&  <AccordionBody />}
        </div>
}

export default UncontrolledAccordion;