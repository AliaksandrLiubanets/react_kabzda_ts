import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Select from './Select'

export default {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>

const callback = action('Click on box')

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const WithValue = Template.bind({})
WithValue.args = {
    items: [
        {id: 1, title: 'Dimych', value: "1"},
        {id: 2, title: 'Lenin', value: "2"},
        {id: 3, title: 'Gagarin', value: "3"},
        {id: 4, title: 'Pushkin', value: "4"}
    ],
    value: '2',
    onChange: action('change select'),
}
export const WithoutValue = Template.bind({})
WithoutValue.args = {
    items: [
        {id: 1, title: 'Dimych', value: "1"},
        {id: 2, title: 'Lenin', value: "2"},
        {id: 3, title: 'Gagarin', value: "3"},
        {id: 4, title: 'Pushkin', value: "4"}
    ],
    onChange: action('change select'),
}

// export const ControlledSelect: ComponentStory<typeof Select> = (args) => {
//     const [parentValue, setParentValue] = useState('2')
//     const setValue = (e: ChangeEvent<HTMLSelectElement>) => {
//         setParentValue(e.currentTarget.value)
//     }
//     return <Select value={parentValue}
//                    onChange={setValue}
//                    items={[
//                        {id: 1, title: 'Dimych', value: "1"},
//                        {id: 2, title: 'Lenin', value: "2"},
//                        {id: 3, title: 'Gagarin', value: "3"},
//                        {id: 4, title: 'Pushkin', value: "4"}
//                    ]}/>
// }
