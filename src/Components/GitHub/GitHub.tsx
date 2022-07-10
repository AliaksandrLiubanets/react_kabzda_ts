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

type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

export const GitHub = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState<string>('it-kamasutra')
    const [searchTerm, setSearchTerm] = useState<string>('it-kamasutra')
    const [userDetails, setUserDetails] = useState<UserType | null>(null)

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
        fetchData(tempSearch)
    }, [searchTerm])

    useEffect(() => {
        if(selectedUser)
        axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
            .then(response => setUserDetails(response.data))
    }, [selectedUser])

    return <div className={s.container}>x
        <div>
            <div>
                <input placeholder={'search'}
                       value={tempSearch}
                       onChange={(e) => setTempSearch(e.currentTarget.value)}
                />
                <button onClick={() => {
                    setSearchTerm(tempSearch)
                    // fetchData(tempSearch)
                }}>find</button>
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
            <div>
                {userDetails &&
                <div>
                    <div>{userDetails.login}</div>
                    <div><img src={userDetails.avatar_url} alt={'avatar'}/></div>
                    <div>followers: {userDetails.followers}</div>
                </div>}
            </div>
        </div>
    </div>
}