import React, {FC, useState} from 'react'
import yellow_star from '../../assets/yellow_star.png'
import white_star from '../../assets/white_star.png'

type StarPropsType = {
    selected: boolean
    }

function Star(props: StarPropsType) {
    const starStyle = {
        margin: "5px",
        display: 'inline'
    }
    const imageStyle = {
        width: "15px",
    }
    console.log("Star is rendering")
    if (props.selected) {
        return <div style={starStyle}><img style={imageStyle} src={yellow_star}/></div>
    } else {
        return <div style={starStyle}><img style={imageStyle} src={white_star}/></div>
    }
}

const UncontrolledRating =() => {
    console.log('Rating is rendering')
    let starsArray = []

    let [stars, setStars] = useState<number>(2)

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

    const blockStyle = {margin: "10px 0 10px 0"}
    return <div style={blockStyle}>
        {starsElements}
        <button onClick={() => setStars(--stars)}> -Star</button>
        <button onClick={() => setStars(++stars)}> +Star</button>
    </div>
}

export default UncontrolledRating;