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
    setIsTimeAnough: (isTimeIsUp: boolean) => void
    isTimeAnough: boolean
}

const initialSeconds = 6

export const Search: FC<SearchProps> = ({setUsers, selectedUser, setIsTimeAnough, isTimeAnough}) => {
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
        {
            isTimeAnough && <Timer initialSeconds={initialSeconds} selectedUser={selectedUser} setIsTimeAnough={setIsTimeAnough}/>
        }

    </div>
}