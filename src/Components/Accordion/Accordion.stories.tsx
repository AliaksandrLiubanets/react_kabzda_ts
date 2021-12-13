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
    setCollapsed: () => console.log('hello')
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
    title: 'Menu',
    setCollapsed: () => console.log('hello')
};

export const ChangeMode: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollads] = useState<boolean>(false)
    return <Accordion collapsed={collapsed} setCollapsed={setCollads} title={'Menu'}/>
}
