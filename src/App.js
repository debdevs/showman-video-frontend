import React from 'react'

import Navbar from './components/UI/organisms/Navbar/Navbar';
import Hero from './components/templates/Hero/Hero';
import  SubHeading  from './components/templates/SubHeading/SubHeading';
import './meyer-reset.css';
import './App.css';
const App = () => {
  return (
    <div className='home-column'>
      
    <Navbar/>
    <Hero/>
    <SubHeading/>
    
    
   
    
   

    </div>
  )
}

export default App;