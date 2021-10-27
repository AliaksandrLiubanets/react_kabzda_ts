import React, {FC, useState} from 'react'

type StarPropsType = {
    selected: boolean
    setStars: (stars: number) => void
    stars: number
    }

function Star(props: StarPropsType) {
    const starStyle = {
        display: 'inline'
    }
    console.log("Star is rendering")
    if (props.selected) {
        return <div style={starStyle}><span><b>star</b></span><button onClick={() => props.setStars(props.stars--)}> -Star</button></div>
    } else {
        return <div style={starStyle}><span>star</span><button onClick={() => props.setStars(props.stars++)}> +Star</button></div>
    }
}

const UncontrolledRating =() => {
    console.log('Rating is rendering')
    let starsArray = []

    const [stars, setStars] = useState<number>(2)

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
    ? <Star key={index} selected={true} setStars={setStars} stars={stars}/>
    : <Star key={index} selected={false} setStars={setStars} stars={stars}/>)

    return <div>
        {starsElements}
    </div>
}

export default UncontrolledRating;