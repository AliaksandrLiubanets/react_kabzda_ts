import {FC, useEffect} from 'react'
import s from '../GitHub.module.css'
import {SearchUserType} from '../GitHub'

type UsersProps = {
    users: SearchUserType[]
    selectedUser: SearchUserType | null
    setSelectedUser: (user: SearchUserType) => void
    setIsTimeAnough: (isTimeAnough: boolean) => void
}

export const UsersList: FC<UsersProps> = ({users, selectedUser, setSelectedUser, setIsTimeAnough}) => {

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    return <>
        <ul>
            {users.map(u => <li key={u.id}
                                className={`${s.user} ${u === selectedUser ? s.selected : ''}`}
                                onClick={() => {
                                    setSelectedUser(u)
                                    setIsTimeAnough(true)
                                }}>{u.login}</li>)
            }
        </ul>
    </>
}