import React from 'react'
import {ComponentMeta} from '@storybook/react'
import {UncontrolledOnOff} from './UncontrolledOnOff'

export default {
    title: 'UncontrolledOnOf',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>;


export const Uncontrolled = () => {
    return <UncontrolledOnOff />
}

