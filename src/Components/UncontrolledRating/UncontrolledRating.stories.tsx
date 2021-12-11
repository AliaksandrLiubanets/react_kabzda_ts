
import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import UncontrolledRating from './UncontrolledRating'


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    stars: 0
};

export const Rating1 = Template.bind({});
Rating1.args = {
    stars: 1
};

export const Rating2 = Template.bind({});
Rating2.args = {
    stars: 2
};

export const Rating3 = Template.bind({});
Rating3.args = {
    stars: 3
};

export const Rating4 = Template.bind({});
Rating4.args = {
    stars: 4
};

export const Rating5 = Template.bind({});
Rating5.args = {
    stars: 5
}

// const ModeChanging: ComponentStory<typeof Rating> = (args) => {
//     const [stars, setStars] = useState<StarNumberType>(0)
//     return <Rating {...args} stars={stars} setRatingValue={setStars}/>
// }
//
// export const UncontrolledRating = ModeChanging.bind({})

// UncontrolledRating.args = {
//     stars: 0
// }