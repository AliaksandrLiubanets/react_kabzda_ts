import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {OnOff} from './OnOff'
import {action} from '@storybook/addon-actions'

export default {
    title: 'OnOff/Controlled',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

const callback = action('Click on box')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const On = Template.bind({});
On.args = {
    isToggle: true,
    setIsToggle: callback,
};

export const Off = Template.bind({});
Off.args = {
    isToggle: false,
    setIsToggle: callback,
};

const OnOffWithMemo = React.memo(OnOff)

export const ChangingMode: ComponentStory<typeof OnOff> = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false)
    return <OnOffWithMemo isToggle={isToggle} setIsToggle={setIsToggle}/>
}

// export const ChangingOnOff = ChangeMode.bind({})
// ChangingOnOff.args = {
//     // isToggle: false,
//     // setIsToggle: () => { setIsToggle()}
//
// }