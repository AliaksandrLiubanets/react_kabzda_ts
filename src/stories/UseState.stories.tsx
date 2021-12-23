import React, {useState} from 'react'

export default {
    title: 'ReactMemoExample'
}

const generateData = () => {
    // difficult counting
    return 1234564654111
}

export const Example1 = () => {
    console.log('Example1')

    const initialValue = generateData()

    const [count, setCount] = useState(initialValue)

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
    </>
}


