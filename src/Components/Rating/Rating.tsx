import React from 'react'
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
}

function Rating(props: PropsRatingType) {

    return <div className={s.rating}>
        <Star selected={props.stars > 0} />
        <Star selected={props.stars > 1} />
        <Star selected={props.stars > 2} />
        <Star selected={props.stars > 3} />
        <Star selected={props.stars > 4} />
    </div>
}

export default Rating