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
    title: 'Menu',
    onChange: () => callback
};

export const Collapsed = Template.bind({});
Collapsed.args = {
    collapsed: true,
    title: 'Menu',
    onChange: () => callback
};

export const ChangeMode: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollads] = useState<boolean>(false)
    return <Accordion collapsed={collapsed} onChange={setCollads} title={'Menu'}/>
}
