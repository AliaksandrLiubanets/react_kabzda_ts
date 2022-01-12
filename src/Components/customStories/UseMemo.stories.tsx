import React, {ChangeEvent, useMemo, useState} from 'react'

export default {
    title: 'useMemoExample'
}

export const DifficultCountingExample = () => {
    console.log("Example")
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo<number>(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake <= 100000000) {
                fake++
                const fakeValue = Math.floor(fake/4)
            }
            resultA *= i
        }
        console.log("resultA")
        console.log(resultA)
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    console.log("resultB")
    console.log(resultB)

    const changeA = (e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value))
    const changeB = (e: ChangeEvent<HTMLInputElement>) => setB(+e.currentTarget.value)

    return <>
        <input onChange={changeA}/>
        <input onChange={changeB}/>
        <div>ResultA: {resultA}</div>
        <div>ResultB: {resultB}</div>
    </>
}


