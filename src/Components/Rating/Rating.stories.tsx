//
// import Rating, {StarNumberType} from './Rating'
// import React, {useState} from 'react';
// import {Story, Meta} from '@storybook/react';
//
//
// import {action} from '@storybook/addon-actions';
//
// export default {
//     title: 'Components/Rating',
//     component: Rating,
//     argTypes: {
//         stars: {
//             defaultValue: 0,
//             options: [0, 1, 2, 3, 4, 5],
//             // type: 'range',
//             min: 0,
//             max: 5,
//             step: 1
//         }
//     },
// } as Meta;
//
// const Template: Story<{stars: StarNumberType}> = (args) => <Rating {...args} />
//
// export const EmptyStars = Template.bind({});
// EmptyStars.args = {
//     stars: 0
// };
// export const Rating1 = Template.bind({});
// Rating1.args = {
//     stars: 1
// };
// export const Rating2 = Template.bind({});
// Rating2.args = {
//     stars: 2
// };
// export const Rating3 = Template.bind({});
// Rating3.args = {
//     stars: 3
// };
// export const Rating4 = Template.bind({});
// Rating4.args = {
//     stars: 4
// };
// export const Rating5 = Template.bind({});
// Rating5.args = {
//     stars: 5
// };

// const ModeChanging: Story<RatingPropsType> = (args) => {
//     const [rating, setRating] = useState<RatingValueType>(0)
//     return <Rating {...args} value={rating} setRatingValue={setRating}/>
// }
//
// export const RatingChanging = ModeChanging.bind({});
// RatingChanging.args = {
//     value: 0
// };


import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import Rating from './Rating'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
