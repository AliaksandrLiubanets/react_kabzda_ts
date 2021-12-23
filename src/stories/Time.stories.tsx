import React, {useEffect, useState} from 'react'

export default {
    title: 'Time'
}

export const Time = () => {
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
        <div>
            <span>Actual time: </span><span>hours </span><span>minutes </span><span>seconds </span>
        </div>
    </>
}

