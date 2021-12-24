import React from 'react'
import {ComponentMeta} from '@storybook/react'
import {Clock} from './Clock'

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>;

export const ClockExample = () => {
    return <Clock />
}

