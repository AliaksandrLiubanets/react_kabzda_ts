import React, {useState} from 'react'
import './App.css'
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating'
import Rating, {StarNumberType} from './Components/Rating/Rating'
import Accordion from './Components/Accordion/Accordion'
import {OnOff} from './Components/OnOff/OnOff'
import {GitHub} from './Components/GitHub/GitHub'

export type ItemsType = {
  id: number
  title: string
  value: string
}

export const users: Array<ItemsType> = [
  {id: 1, title: 'Dimych', value: "1"},
  {id: 2, title: 'Lenin', value: "2"},
  {id: 3, title: 'Gagarin', value: "3"},
  {id: 4, title: 'Pushkin', value: "4"}
]

function App() {

  const [ratingValue, setRatingValue] = useState<StarNumberType>(3)
  const [isToggle, setIsToggle] = useState<boolean>(true)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [value, setValue] = useState('')

  const changeValue = (value: string) => {
    setValue(value)}

  return <div className="App">
    <UncontrolledAccordion title={'Menu'}  />
    {/*<Accordion title={'Menu'} collapsed={collapsed} onChange={setCollapsed} />*/}
    <Accordion title={'Users'} collapsed={collapsed} onChange={setCollapsed} items={users} onClick={() => {}}/>
    <UncontrolledRating />
    <Rating stars={ratingValue} setRatingValue={setRatingValue}/>
    <UncontrolledOnOff defaultOn={true} />
    <OnOff isToggle={isToggle} setIsToggle={setIsToggle}/>
    {/*<Select items={users} value={value} onChange={changeValue}/>*/}
    <GitHub/>
  </div>
}

export default App
