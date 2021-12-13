import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import UncontrolledRating from './UncontrolledRating'

export default {
    title: 'Rating/Uncontrolled',
    component: UncontrolledRating
} as ComponentMeta<typeof UncontrolledRating>;

// const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating />;

const ModeChanging: ComponentStory<typeof UncontrolledRating> = () => {
    // const [stars, setStars] = useState<StarNumberType>(0)
    return <UncontrolledRating />
}

export const Uncontrolled = ModeChanging.bind({})
