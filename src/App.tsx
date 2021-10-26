import React from 'react';
import AppTitle from "./Components/AppTitle";
import Rating from "./Components/Rating";
import Accordion from "./Components/Accordion";

function App() {
  console.log('App rendering')
  return <div>
    <AppTitle title={'This is App Component'}/>
    <AppTitle title={'My Friends'}/>
    <Rating stars={6}/>
    <Accordion title={'Menu'} collapsed={true}/>
    <Accordion title={'Users'} collapsed={false}/>
    <Rating stars={1}/>
    <Rating stars={3}/>
    <Rating stars={3}/>
    <Rating stars={4}/>
    <Rating stars={0}/>
  </div>
}
export default App
