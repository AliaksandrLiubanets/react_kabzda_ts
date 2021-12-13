import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Accordion from './Accordion'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const callback = action('Accordion is changing')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Uncollapsed = Template.bind({});
Uncollapsed.args = {
    collapsed: false,
    items: [
        {id: 1, title: 'Dimych', value: 1},
        {id: 2, title: 'Lenin', value: 2},
        {id: 3, title: 'Gagarin', value: 3},
        {id: 4, title: 'Pushkin', value: 4},
    ],
    title: 'Menu',
    onChange: callback,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
    items: [],
    title: 'Menu',
    onChange: callback
};

export const ChangeMode: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollads] = useState<boolean>(false)
    return <Accordion collapsed={collapsed} onChange={setCollads} title={'Menu'}/>
}
