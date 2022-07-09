import s from './GitHub.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

type SearchUserType = {
    login: string
}
type SearchResult = {
    items: SearchUserType[]
}

export const GitHub = () => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null)

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser
        }

    }, [selectedUser])

    useEffect(() => {
        axios.get<SearchResult>('https://api.github.com/search/users?q=it-kamasutra')
            .then(response => console.log(response.data.items))
    }, [])

    return <div className={s.container}>
        <div>
            <div>
                <input placeholder={'search'}/>
                <button>find</button>
            </div>
            <ul>
                {['Dimych', 'Artem']
                    .map(u => <li className={u === selectedUser ? s.selected : ''}
                                  onClick={() => {
                                      setSelectedUser(u)
                                      // document.title = u
                                  }}>{u}</li>)
                }
            </ul>
        </div>
        <div>
            <h2>UserName</h2>
            <div>Details</div>
        </div>
    </div>
}