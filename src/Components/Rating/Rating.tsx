import React from 'react'
import s from './Rating.module.css'

type StarPropsType = {
    selected: boolean
    stars: StarNumberType
    setRatingValue: (stars: StarNumberType) => void
}

function Star(props: StarPropsType) {

    const setRating = () => props.setRatingValue(props.stars)

    return <span className={s.star} onClick={setRating}>{props.selected ? <b>star </b> : 'star '}</span>
}

export type StarNumberType = 0 | 1 | 2 | 3 | 4 | 5 | number

export type PropsRatingType = {
    stars: StarNumberType
    setRatingValue: (stars: StarNumberType) => void
}

function Rating(props: PropsRatingType) {

    return <div className={s.rating}>
        <Star selected={props.stars > 0} setRatingValue={props.setRatingValue} stars={1}/>
        <Star selected={props.stars > 1} setRatingValue={props.setRatingValue} stars={2}/>
        <Star selected={props.stars > 2} setRatingValue={props.setRatingValue} stars={3}/>
        <Star selected={props.stars > 3} setRatingValue={props.setRatingValue} stars={4}/>
        <Star selected={props.stars > 4} setRatingValue={props.setRatingValue} stars={5}/>
    </div>
}

export default Rating