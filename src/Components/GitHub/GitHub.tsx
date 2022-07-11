import s from './GitHub.module.css'
import {useState} from 'react'
import {UserDetails} from './Header/UserDetails'
import {Users} from './Header/Users'
import {Search} from './Header/Search'

export type SearchUserType = {
    login: string
    id: number
}
export type SearchResult = {
    items: SearchUserType[]
}

export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

export const GitHub = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])

    return <div className={s.container}>
        <div>
            <Search setUsers={setUsers}/>
            <Users users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
        <UserDetails selectedUser={selectedUser}/>
    </div>
}

