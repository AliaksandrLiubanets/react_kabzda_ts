import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Select from './Select'

export default {
    title: 'SelectMemo'
} as ComponentMeta<typeof Select>


export const FilteredPopulation: ComponentStory<typeof Select> = () => {
    const [value, setValue] = useState('2')
    const [items, setItems] = useState([
        {id: 1, title: 'Dimych', value: '1', city: 'Minsk', population: 2},
        {id: 2, title: 'Gena', value: '2', city: 'Brest', population: 0.35},
        {id: 3, title: 'Petya', value: '3', city: 'Mogilev', population: 0.28},
        {id: 4, title: 'Sveta', value: '4', city: 'Grodno', population: 0.25},
        {id: 5, title: 'Katya', value: '5', city: 'Novopolock', population: 0.11},
        {id: 6, title: 'Roma', value: '6', city: 'M.G.', population: 0.03}
    ])

    const filteredItems = items.filter(item => item.population > 0.3)

    const filteredItem = items.find(item => item.value === value)

    const listOfItems = filteredItems.map(item => <div key={item.id}>
        <div>city: {item.city}. population: {item.population}.</div>
    </div>)

    return <>
        <Select value={value}
                onChange={setValue}
                items={filteredItems}/>
        <div>
            {listOfItems}
        </div>
        <hr/>
        <div>name according value {value}: {filteredItem ? filteredItem.title : 'No name'}</div>
    </>
}


