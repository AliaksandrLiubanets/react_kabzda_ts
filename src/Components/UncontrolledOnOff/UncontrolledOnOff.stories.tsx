import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {UncontrolledOnOff} from './UncontrolledOnOff'

export default {
    title: 'UncontrolledOnOf',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args}/>

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
    defaultOn: true
}


