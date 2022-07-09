import s from './GitHub.module.css'
import {useState} from 'react'

export const GitHub = () => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
    return <div className={s.container}>
        <div>
            <div>
                <input placeholder={'search'}/><button>find</button>
            </div>
            <ul>
                {['Dimych', 'Artem']
                    .map(u => <li className={u === selectedUser ? s.selected : ''}
                        onClick={() => {
                            setSelectedUser(u)
                            document.title = u
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