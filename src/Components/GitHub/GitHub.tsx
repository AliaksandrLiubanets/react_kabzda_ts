import s from './GitHub.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

type SearchUserType = {
    login: string
    id: number
}
type SearchResult = {
    items: SearchUserType[]
}

export const GitHub = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState<string>('')

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

const fetchData = (term: string) => {
    axios.get<SearchResult>('https://api.github.com/search/users?q=' + term)
        .then(response => setUsers(response.data.items))
}

    useEffect(() => {
        fetchData('it-kamasutra')
    }, [])

    return <div className={s.container}>
        <div>
            <div>
                <input placeholder={'search'}
                       value={tempSearch}
                       onChange={(e) => setTempSearch(e.currentTarget.value)}
                />
                <button onClick={() => fetchData(tempSearch) }>find</button>
            </div>
            <ul>
                {users.map(u => <li key={u.id}
                                    className={`${s.user} ${u === selectedUser ? s.selected : ''}`}
                                    onClick={() => {
                                        setSelectedUser(u)
                                        // document.title = u
                                    }}>{u.login}</li>)
                }
            </ul>
        </div>
        <div>
            <h2>UserName</h2>
            <div>Details</div>
        </div>
    </div>
}