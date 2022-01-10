import React, {useState} from 'react'

export default {
    title: 'ReactMemoExample'
}

const Count = (props: { count: number }) => {
    console.log('COUNT')
    return <div>{props.count}</div>
}

const CountWithMemo = React.memo(Count)

const Table = (props: { users: string[] }) => {
    console.log('TABLE')
    return <>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </>
}

const TableWithMemo = React.memo(Table)

export const UsersWithCount = () => {
    console.log('UsersWithCount')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Gena', 'Vasya', 'Misha'])

    const addUser = () => {
        const user = "UserName" + new Date().getTime()
        setUsers([...users, user])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <CountWithMemo count={count}/>
        <TableWithMemo users={users}/>
    </>
}


