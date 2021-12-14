import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Accordion from './Accordion'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Accordion/Controlled',
    component: Accordion,
    argTypes: {
        color: {control: 'color'}
    }
} as ComponentMeta<typeof Accordion>

const callback = action('Accordion is changing')
const callbackClick = action('Click on item')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

const callbackProps = {
    title: 'Menu',
    onChange: callback,
    onClick: callbackClick,
}

export const Uncollapsed = Template.bind({})
Uncollapsed.args = {
    ...callbackProps,
    collapsed: false,
    items: [
        {id: 1, title: 'Dimych', value: 1},
        {id: 2, title: 'Lenin', value: 2},
        {id: 3, title: 'Gagarin', value: 3},
        {id: 4, title: 'Pushkin', value: 4},
    ],
}

export const Collapsed = Template.bind({})
Collapsed.args = {
    ...callbackProps,
    collapsed: true,
    items: [],
}

export const ChangingMode: ComponentStory<typeof Accordion> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion collapsed={collapsed}
                      onChange={setCollapsed}
                      title={'Menu'}
                      onClick={callbackClick}
                      items={[
                          {id: 1, title: 'Dimych', value: 1},
                          {id: 2, title: 'Lenin', value: 2},
                          {id: 3, title: 'Gagarin', value: 3},
                          {id: 4, title: 'Pushkin', value: 4}
                      ]}/>
}
