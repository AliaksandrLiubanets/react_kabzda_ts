import React, {useState} from 'react'

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

type AccordionTitleType = {
    title: string
    setCollapsed: () =>  void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h1 onClick={() => props.setCollapsed()}>{props.title}</h1>
}

export type StarsNumber = 0 | 1 | 2 | 3 | 4 | 5

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(props.collapsed)
        return <div>
            <AccordionTitle setCollapsed={ () => setCollapsed(!collapsed)} title={props.title}/>
            { !collapsed &&  <AccordionBody />}
        </div>
}

export default Accordion;