import React from 'react'
import {ItemsType} from '../../App'


export type SelectRatingType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select({items, onChange, value}: SelectRatingType) {

    // const setValue = (e: ChangeEvent<HTMLSelectElement>) => {
    //     onChange(e.currentTarget.value)
    // }
    const selectedItem = items.find(i => i.value === value)

    return <div>
        <select onChange={() => {}} value={value}>
        {items.map(item => <option key={item.id} value={item.value}>{item.title}</option>)}
    </select>
        <h3>{selectedItem && selectedItem.title}</h3>
        {items.map(item => <div key={item.id} >{item.title}</div>)}
    </div>
}

export default Select