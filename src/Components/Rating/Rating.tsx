import React, {useState} from 'react'
import s from './Rating.module.css'

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    return <span className={s.star} >{props.selected ? <b>star </b> : 'star '}</span>
}

export type StarNumberType = 0 | 1 | 2 | 3 | 4 | 5 | number

export type PropsRatingType = {
    stars: StarNumberType
    setRatingValue: (stars: StarNumberType) => void
}

function Rating(props: PropsRatingType) {

    const [stars, setStars] = useState<StarNumberType>(props.stars)

    return <div className={s.rating}>
        <Star selected={stars > 0} />
        <Star selected={stars > 1} />
        <Star selected={stars > 2} />
        <Star selected={stars > 3} />
        <Star selected={stars > 4} />
    </div>
}

export default Rating