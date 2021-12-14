import React, {useState} from 'react'
import './App.css'
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating'
import Rating, {StarNumberType} from './Components/Rating/Rating'
import Accordion from './Components/Accordion/Accordion'
import {OnOff} from './Components/OnOff/OnOff'

export type UsersType = {
  id: number
  title: string
  value: number
}

export const users: Array<UsersType> = [
  {id: 1, title: 'Dimych', value: 1},
  {id: 2, title: 'Lenin', value: 2},
  {id: 3, title: 'Gagarin', value: 3},
  {id: 4, title: 'Pushkin', value: 4}
]

function App() {

  const [ratingValue, setRatingValue] = useState<StarNumberType>(3)
  const [isToggle, setIsToggle] = useState<boolean>(true)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [user, setUser] = useState<UsersType>(users[1])

  const onClickUser = (id: number) => {
    const clickedUser = users.find(user => user.id === id)
    clickedUser && setUser(clickedUser)
  }

  return <div className="App">
    <UncontrolledAccordion title={'Menu'}  />
    {/*<Accordion title={'Menu'} collapsed={collapsed} onChange={setCollapsed} />*/}
    <Accordion title={'Users'} collapsed={collapsed} onChange={setCollapsed} items={users} onClick={onClickUser}/>
    <UncontrolledRating />
    <Rating stars={ratingValue} setRatingValue={setRatingValue}/>
    <UncontrolledOnOff defaultOn={true} />
    <OnOff isToggle={isToggle} setIsToggle={setIsToggle}/>
  </div>
}
export default App
