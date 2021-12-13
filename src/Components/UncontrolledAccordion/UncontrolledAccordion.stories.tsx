import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import UncontrolledAccordion from './UncontrolledAccordion'

export default {
    title: 'Accordion/Uncontrolled',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const ChangeTitleUncontrolledAccordion = Template.bind({});
ChangeTitleUncontrolledAccordion.args = {
    title: 'Menu',
};
