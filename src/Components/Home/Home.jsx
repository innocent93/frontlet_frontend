import React from 'react'
import './Home.css'


import Hero from './hero_section'
import Quote from './nigeria'
import Builder from './builder'
import Area from './area'
import Concept from './concept'
import Services from './service'
import Studio from './studio'
import Cofound from './cofound'
import Join from './join'
import Featured from './featured'
import Lets from './lets'
import Blog from './blogs'
import Investor from './investor'
import Equity from './equity'



const Home = () => {
    return (
      <>
            <Hero /> 
            <Quote />
            <Builder />
            <Area />
            <Concept />
            <Services />
            <Studio />
            <Cofound />
            <Join />
           
        <Investor />
         <Equity/> 
         <Blog />
             <Featured />
             <Lets />
      
      
      </>
    

  )
}

export default Home