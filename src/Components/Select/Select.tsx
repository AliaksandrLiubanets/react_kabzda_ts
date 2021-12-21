import React, {useState} from 'react'
import {ItemsType} from '../../App'
import s from './Select.module.css'


export type SelectRatingType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select({items, onChange, value}: SelectRatingType) {

    const [active, setActive] = useState(false)

    const toggleItems = () => setActive(!active)

    const selectedItem = items.find(i => i.value === value)

    return <>
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active
                && <div className={s.items}>
                    {items.map(item => <div onClick={() => {onChange(item.value)}}
                                            key={item.id}>{item.title}
                    </div>)}
                </div>
            }
        </div>
    </>
}

export default Select