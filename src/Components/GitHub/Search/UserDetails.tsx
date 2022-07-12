import {FC, useEffect, useState} from 'react'
import {SearchUserType, UserType} from '../GitHub'
import axios from 'axios'

type PropsType = {
    selectedUser: SearchUserType | null
}

export const UserDetails: FC<PropsType> = ({selectedUser}) => {

    const [userDetails, setUserDetails] = useState<UserType | null>(null)

    useEffect(() => {
        if (selectedUser)
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(response => setUserDetails(response.data))
    }, [selectedUser])

    return <>
        {userDetails &&
        <div>
            <h2>{userDetails.login}</h2>
            <div><img src={userDetails.avatar_url} alt={'avatar'}/></div>
            <div>followers: {userDetails.followers}</div>
        </div>
        }
    </>
}