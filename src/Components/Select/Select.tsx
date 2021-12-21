import React, {useState, KeyboardEvent, useEffect} from 'react'
import {ItemsType} from '../../App'
import s from './Select.module.css'


export type SelectRatingType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select({items, onChange, value}: SelectRatingType) {

    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(value)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: string) => {
        onChange(value);
        toggleItems()
    }

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredItemValue)

    useEffect(() => {
        setHoveredItemValue(value)
    }, [value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key ==='ArrowDown' || e.key ==='ArrowUp'){
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key ==='ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return <>
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active
                && <div className={s.items}>
                    {items.map(item => <div
                        className={s.item + " " + (hoveredItem === item ? s.selected: '')}
                        onMouseEnter={() => {setHoveredItemValue(item.value)}}
                        onClick={() => {onItemClick(item.value)}}
                        key={item.id}>{item.title}
                    </div>)
                    }
                </div>
            }
        </div>
    </>
}

export default Select