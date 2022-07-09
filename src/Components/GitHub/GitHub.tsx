import s from './GitHub.module.css'

export const GitHub = () => {
    return <div className={s.container}>
        <div>
            <div>
                <input placeholder={'search'}/><button>find</button>
            </div>
            <ul>
                {['Dimych', 'Artem']
                    .map(u => <li onClick={() => document.title = u}>{u}</li>)
                }
            </ul>
        </div>
        <div>
            <h2>UserName</h2>
            <div>Details</div>
        </div>
    </div>
}