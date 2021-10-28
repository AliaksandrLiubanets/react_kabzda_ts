import React, {FC} from "react"

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}

type PropsRatingType = {
    stars: 0 | 1 | 2 | 3 | 4 | 5
}

const Rating: FC<PropsRatingType> =({stars}) =>{
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