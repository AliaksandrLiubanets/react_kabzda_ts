import React, {useState} from 'react'
import s from './UncontrolledRating.module.css'
import yellow_star from '../../assets/yellow_star.png'
import white_star from '../../assets/white_star.png'
import {StarNumberType} from '../Rating/Rating'

type StarPropsType = {
    selected: boolean
    starNumber: StarNumberType
    setStar: (star: StarNumberType) => void
}

function Star(props: StarPropsType) {
    const starStyle = {
        margin: '5px',
        display: 'inline'
    }
    const imageStyle = {
        width: '15px'
    }

    const setStars = () => props.setStar(props.starNumber)

    return <div style={starStyle} onClick={setStars}>
        <img style={imageStyle} src={props.selected ? yellow_star : white_star} alt={''}/>
    </div>
}

const UncontrolledRating = () => {

    let [stars, setStars] = useState<StarNumberType>(0)
    const minusStar = () =>  setStars(stars -= 1)
    const plusStar = () =>  setStars(stars += 1)

    const blockStyle = {margin: '10px 0 10px 0'}

    return <div style={blockStyle}>
        <Star selected={stars > 0} setStar={setStars} starNumber={1}/>
        <Star selected={stars > 1} setStar={setStars} starNumber={2}/>
        <Star selected={stars > 2} setStar={setStars} starNumber={3}/>
        <Star selected={stars > 3} setStar={setStars} starNumber={4}/>
        <Star selected={stars > 4} setStar={setStars} starNumber={5}/>
        <button className={s.minus_button} onClick={minusStar}> -</button>
        <button className={s.plus_button} onClick={plusStar}> +</button>
    </div>
}

export default UncontrolledRating