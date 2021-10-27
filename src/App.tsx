import React from 'react';
import {OnOff} from './Components/onOff/OnOff'
import UncontrolledAccordion from './Components/UncontrolledAccordion/UncontrolledAccordion'

function App() {
  console.log('App rendering')
  return <div>
    {/*<AppTitle title={'This is App Component'}/>*/}
    {/*<AppTitle title={'My Friends'}/>*/}
    {/* eslint-disable-next-line react/jsx-no-undef */}
    <UncontrolledAccordion title={'Menu'} />
    <UncontrolledAccordion title={'Users'} />
    {/*<Rating stars={0}/>*/}
    {/*<Rating stars={1}/>*/}
    {/*<Rating stars={2}/>*/}
    {/*<Rating stars={3}/>*/}
    {/*<Rating stars={4}/>*/}
    {/*<Rating stars={5}/>*/}
    <OnOff  />
    <OnOff  />
  </div>
}
export default App
