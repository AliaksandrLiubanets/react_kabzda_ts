import {FC, useEffect, useState} from 'react'
import {SearchUserType} from '../GitHub'

type TimerType = {
    initialSeconds: number
    selectedUser: SearchUserType | null
    setIsTimeAnough: (isTimeAnough: boolean) => void
}

export const Timer: FC<TimerType> = ({initialSeconds, selectedUser, setIsTimeAnough}) => {
    const [seconds, setSeconds] = useState<number>(initialSeconds)

    useEffect(() => {
        setSeconds(initialSeconds)
    }, [selectedUser])

    useEffect(() => {
        if (seconds < 1) {
            setIsTimeAnough(false)
        }
        const id = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [seconds])

    return <div>{seconds}</div>
}
