import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect'
}

export const Example1 = () => {
    console.log('Example1')

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)
    document.title = 'fsdds'

    useEffect(() => {
        console.log("sueEffect every render")
        document.title = count.toString()
    })

    useEffect(() => {
        console.log("sueEffect first render")
        document.title = count.toString()
    }, [])

    useEffect(() => {
        console.log("sueEffect first render and every count changing")
        document.title = count.toString()
    }, [count])

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <div>Hello! {count}
            <button onClick={() => setCount(changer)}>+</button>
        </div>
        <div>fake: {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
        </div>

    </>
}

export const SetTimeoutExample = () => {
    console.log('Example1')

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)
    document.title = 'fsdds'

    useEffect(() => {
        console.log("sueEffect every render")
        document.title = count.toString()
    })


    const changer = (state: number) => {
        // console.log('changer')
        return state + 1
    }

    return <>
        <div>Hello! {count}
            <button onClick={() => setCount(changer)}>+</button>
        </div>
        <div>fake: {fake}
            <button onClick={() => setFake((state) => state + 1)}>+</button>
        </div>

    </>
}

