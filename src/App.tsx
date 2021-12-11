import React, {useState} from 'react'
import './App.css'
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating'
import Rating, {StarNumberType} from './Components/Rating/Rating'
import Accordion from './Components/Accordion/Accordion'
import {OnOff} from './Components/OnOff/OnOff'


function App() {

  const [ratingValue, setRatingValue] = useState<StarNumberType>(3)
  const [isToggle, setIsToggle] = useState<boolean>(true)

  return <div className="App">
    <UncontrolledAccordion title={'Menu'}  />
    <Accordion title={'Users'} collapsed={true}/>
    <UncontrolledRating />
    <Rating stars={ratingValue} setRatingValue={setRatingValue}/>
    <UncontrolledOnOff  />
    <OnOff isToggle={isToggle} setIsToggle={setIsToggle}/>
  </div>
}
export default App
