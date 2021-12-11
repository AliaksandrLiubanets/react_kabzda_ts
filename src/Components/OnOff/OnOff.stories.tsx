import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {OnOff} from './OnOff'

export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const On = Template.bind({});

On.args = {
    isToggle: true
};

export const Off = Template.bind({});
Off.args = {
    isToggle: false
};

