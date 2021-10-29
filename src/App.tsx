import React from 'react';
import './App.css'
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './Components/UncontrolledRating/UncontrolledRating'
import Rating from './Components/Rating/Rating'
import Accordion from './Components/Accordion/Accordion'
import {OnOff} from './Components/OnOff/OnOff'


function App() {
  console.log('App rendering')
  return <div className="App">
    {/*<AppTitle title={'This is App Component'}/>*/}
    {/*<AppTitle title={'My Friends'}/>*/}
    {/* eslint-disable-next-line react/jsx-no-undef */}
    <UncontrolledAccordion title={'Menu'}  />
    <Accordion title={'Users'} collapsed={true}/>
    <UncontrolledRating />
    <Rating stars={3}/>
    {/*<Rating stars={4}/>*/}
    {/*<Rating stars={5}/>*/}
    <UncontrolledOnOff  />
    <OnOff isToggle={true}/>
  </div>
}
export default App
