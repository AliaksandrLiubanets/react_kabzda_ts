import React, {FC} from "react"

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star is rendering")
    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}

type PropsRatingType = {stars: number}

const Rating: FC<PropsRatingType> =({stars}) =>{
    console.log('Rating is rendering')
    let starsArray = []
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
    ? <Star key={index} selected={true} />
    : <Star key={index} selected={false} />)

    return <div>
        {starsElements}
    </div>
}

export default Rating