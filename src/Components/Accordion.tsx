import React from "react";

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
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle is rendering')
    return <h1>{props.title}</h1>
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')
    if(!props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    }

}

export default Accordion;