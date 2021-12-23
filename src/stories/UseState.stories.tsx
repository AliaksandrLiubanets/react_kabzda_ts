import React, {useMemo, useState} from 'react'

export default {
    title: 'useState'
}

const generateData = () => {
    console.log('generateData')
    // difficult counting
    return 1234564654111
}

const val = generateData()

export const Example1 = () => {
    console.log('Example1')

    const initialValue = useMemo(generateData, [])

    const [count, setCount] = useState(initialValue)

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
    </>
}


