import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {OnOff} from './OnOff'

export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const On = Template.bind({});
On.args = {
    isToggle: true,
    setIsToggle: () => { console.log ('setToggle')}
};

export const Off = Template.bind({});
Off.args = {
    isToggle: false,
    setIsToggle: () => { console.log ('setToggle')}
};

export const ChangeMode: ComponentStory<typeof OnOff> = (args) => {
    const [isToggle, setIsToggle] = useState<boolean>(false)
    return <OnOff isToggle={isToggle} setIsToggle={setIsToggle}/>
}

// export const ChangingOnOff = ChangeMode.bind({})
// ChangingOnOff.args = {
//     // isToggle: false,
//     // setIsToggle: () => { setIsToggle()}
//
// }