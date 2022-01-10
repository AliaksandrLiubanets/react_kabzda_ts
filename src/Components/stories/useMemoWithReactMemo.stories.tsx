import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'ReactMemoWithuseMemo'
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

export const useMemoHelpsReactMemo = () => {
    console.log('UsersWithCount')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Gena', 'Vasya', 'Misha'])

    const addUser = () => {
        const user = 'UserName' + new Date().getTime()
        setUsers([...users, user])
    }

    const filteredUsers = useMemo(() => {
        const filteredUsers = users.filter((user => user.toLowerCase().includes('a')))
        return filteredUsers
    }, [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <CountWithMemo count={count}/>
        <TableWithMemo users={filteredUsers}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Redux', 'HTML'])

    const addBook = () => {
        console.log(books)
        const book = 'New Book' + new Date().getTime()
        setBooks([...books, book])
    }

    const memoizedBooks = useMemo(() => {
        console.log('addBook in Memo')
        return addBook
    }, [books])

    const memoizedBooks2 = useMemo(() => {
        return () => {
            const book = 'New Book' + new Date().getTime()
            setBooks([...books, book])
        }
    }, [books])

    const memoizedBooks3 = useCallback(addBook, [books])

    const memoizedBooks4 = useCallback(() => {
        const book = 'New Book' + new Date().getTime()
        setBooks([...books, book])
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books books={books} addBook={memoizedBooks2}/>
    </>
}

const SecretBooks = (props: { books: string[], addBook: () => void }) => {
    console.log('SecretBooks')
    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(SecretBooks)

