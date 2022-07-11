import {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {SearchResult, SearchUserType} from '../GitHub'

type SearchProps = {
    // tempSearch: string
    // setTempSearch: (value: string) => void
    // setSearchTerm: (value: string) => void
    setUsers: (users: SearchUserType[]) => void
}

export const Search: FC<SearchProps> = ({setUsers}) => {
    const [tempSearch, setTempSearch] = useState<string>('it-kamasutra')
    const [searchTerm, setSearchTerm] = useState<string>('it-kamasutra')

    useEffect(() => {
        axios.get<SearchResult>('https://api.github.com/search/users?q=' + tempSearch)
            .then(response => setUsers(response.data.items))
    }, [searchTerm])

    return <div>
        <input placeholder={'search'}
               value={tempSearch}
               onChange={(e) => setTempSearch(e.currentTarget.value)}
        />
        <button onClick={() => {
            setSearchTerm(tempSearch)
        }}>find
        </button>
    </div>
}