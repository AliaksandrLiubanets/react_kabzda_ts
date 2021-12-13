import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Accordion from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Uncollapsed = Template.bind({});
Uncollapsed.args = {
    collapsed: false,
    title: 'Menu',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
    title: 'Menu',
};

// export const ChangeMode: ComponentStory<typeof OnOff> = (args) => {
//     const [isToggle, setIsToggle] = useState<boolean>(false)
//     return <OnOff isToggle={isToggle} setIsToggle={setIsToggle}/>
// }

// export const ChangingOnOff = ChangeMode.bind({})
// ChangingOnOff.args = {
//     // isToggle: false,
//     // setIsToggle: () => { setIsToggle()}
//
// }