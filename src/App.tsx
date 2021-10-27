import React from 'react';
import AppTitle from "./Components/AppTitle";
import Rating from "./Components/Rating";
import Accordion from "./Components/Accordion";
import {Toggle} from './Components/onOff/OnOff'

function App() {
  console.log('App rendering')
  return <div>
    {/*<AppTitle title={'This is App Component'}/>*/}
    {/*<AppTitle title={'My Friends'}/>*/}
    <Accordion title={'Menu'} collapsed={true}/>
    <Accordion title={'Users'} collapsed={false}/>
    <Rating stars={0}/>
    <Rating stars={1}/>
    <Rating stars={2}/>
    <Rating stars={3}/>
    <Rating stars={4}/>
    <Rating stars={5}/>
    <Toggle isToggle={false}/>
  </div>
}
export default App
