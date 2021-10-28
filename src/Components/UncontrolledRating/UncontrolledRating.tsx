import React, {FC, Fragment, useState} from 'react'
import yellow_star from '../../assets/yellow_star.png'
import white_star from '../../assets/white_star.png'

type StarPropsType = {
    selected: boolean
    index: number
    setStar: (star: number) => void
}

function Star(props: StarPropsType) {
    const starStyle = {
        margin: '5px',
        display: 'inline'
    }
    const imageStyle = {
        width: '15px'
    }

    return <div style={starStyle} onClick={() => props.setStar(props.index)}>
        <img style={imageStyle} src={props.selected ? yellow_star : white_star} alt={''}/>
    </div>
}

const UncontrolledRating = () => {
    console.log('Rating is rendering')
    let starsArray = []

    let [stars, setStars] = useState<number>(0)

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
        ? <Star key={index} selected={true} setStar={setStars} index={index + 1}/>
        : <Star key={index} selected={false} setStar={setStars} index={index + 1}/>)

    const blockStyle = {margin: '10px 0 10px 0'}
    return <div style={blockStyle}>
        {starsElements}
        <button onClick={() => setStars(--stars)}> -Star</button>
        <button onClick={() => setStars(++stars)}> +Star</button>
    </div>
}

export default UncontrolledRating