import React, {useMemo, useState} from 'react'

export default {
    title: 'useState'
}

const generateData = () => {
    console.log('generateData')
    // difficult counting
    return 1234564654111
}

export const Example1 = () => {
    console.log('Example1')

    const [count, setCount] = useState(generateData)

    const changer = (state: number) => {
        console.log('changer')
        return state + 1
    }

    return <>
        <button onClick={() => setCount(changer)} >+</button>
        {count}
    </>
}


