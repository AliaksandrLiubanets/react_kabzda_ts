import {FC, useEffect, useState} from 'react'
import {SearchUserType} from '../GitHub'

type TimerType = {
    initialDigit: number
    selectedUser: SearchUserType | null
    setIsTimeIsUp: (isTimeIsUp: boolean) => void
}

export const Timer: FC<TimerType> = ({initialDigit, selectedUser, setIsTimeIsUp}) => {
    const [digit, setDigit] = useState<number>(initialDigit)

    useEffect(() => {
        setDigit(initialDigit)
    }, [selectedUser])

    useEffect(() => {
        if (digit < 1) {
            setIsTimeIsUp(false)
        }
        const id = setInterval(() => {
            setDigit((prev) => prev - 1)
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [digit])

    return <div>{digit}</div>
}
