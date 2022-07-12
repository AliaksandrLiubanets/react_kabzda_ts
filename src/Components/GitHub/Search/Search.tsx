import {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {SearchResult, SearchUserType} from '../GitHub'
import s from './Search.module.css'
import {Timer} from '../Timer/Timer'

type SearchProps = {
    // tempSearch: string
    // setTempSearch: (value: string) => void
    // setSearchTerm: (value: string) => void
    setUsers: (users: SearchUserType[]) => void
    selectedUser: SearchUserType | null
    setIsTimeIsUp: (isTimeIsUp: boolean) => void
}

export const Search: FC<SearchProps> = ({setUsers, selectedUser, setIsTimeIsUp}) => {
    const [tempSearch, setTempSearch] = useState<string>('it-kamasutra')
    const [searchTerm, setSearchTerm] = useState<string>('it-kamasutra')

    useEffect(() => {
        axios.get<SearchResult>('https://api.github.com/search/users?q=' + tempSearch)
            .then(response => setUsers(response.data.items))
    }, [searchTerm])

    return <div className={s.search_container}>
        <div>
            <input placeholder={'search'}
                    value={tempSearch}
                    onChange={(e) => setTempSearch(e.currentTarget.value)}
        />
            <button onClick={() => {
                setSearchTerm(tempSearch)
            }}>find
            </button>
        </div>
        <Timer initialDigit={3} selectedUser={selectedUser} setIsTimeIsUp={setIsTimeIsUp}/>
    </div>
}