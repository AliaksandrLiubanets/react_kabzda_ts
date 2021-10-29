import React, {useState} from 'react'
import s from './Rating.module.css'

type StarPropsType = {
    selected: boolean
    setStarsNumber: (starsNum: number) => void
    index: number
}

function Star(props: StarPropsType) {
    const changeStarsNum = () => props.setStarsNumber(props.index + 1)

    return <span className={s.star} onClick={changeStarsNum}>{props.selected ? <b>star </b> : "star "}</span>
}

export type StarNumberType = 0 | 1 | 2 | 3 | 4 | 5

type PropsRatingType = {
    stars: number
}

function Rating (props: PropsRatingType) {
    let starsArray = []
    const [stars, setStars] = useState<number>(props.stars)
    const setStarsNumber = (starsNum: number) => setStars(starsNum)
    let count = stars
    for (let i = 0; i < 5; i++) {
        if (count > 0) {
            starsArray.push(1)
            count--
        } else {
            starsArray.push(0)
        }
    }

let starsElements = starsArray.map((number, index) => number === 1
    ? <Star key={index} selected={true} setStarsNumber={setStarsNumber} index={index}/>
    : <Star key={index} selected={false} setStarsNumber={setStarsNumber} index={index}/>)

    return <div className={s.rating}>
        {starsElements}
    </div>
}

export default Rating