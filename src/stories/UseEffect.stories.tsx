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

const Button = ({hideButton}: {hideButton: () => void}) => {
    return <button onClick={hideButton}>hide me</button>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [count, setCount] = useState(1)
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            setIsHidden(true)
        }, 2000)
    }, [isHidden])

    const hideButton = () => {
        console.log('hideButton')
        return setIsHidden(false)
    }

    return <>
        <div>Hello! {count}
            <button onClick={() => setCount((state) => state + 1)}>+</button>
        </div>
        {isHidden && <Button hideButton={hideButton}/>}
    </>
}

export const SetIntervalExample1 = () => {
    console.log('SetIntervalExample')

    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            console.log('tick' + count)
            setCount(count + 1)
            // Не работает, т.к. count берется из замыкания, запоминает 1-е значение
            // count и каждый раз его подсовывает для пересчёта.
        }, 1000)
    }, [])

    return <>
        Hello! {count}
        <div>
            <button onClick={() => setCount((state) => state + 1)}>+</button>
        </div>
    </>
}

export const SetIntervalExample2 = () => {
    console.log('SetIntervalExample2')

    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            console.log('tick ' + count)
            setCount((state => state + 1))
        }, 1000)
    }, [])

    return <>
        Hello! {count}
    </>
}

