import React from 'react'
import './Home.css'
import Vector from '../../assets/images/Vector.png'
const Builder = () => {
  return (
      <section className="builder">
      <h1 className='text-center'>Network of builders helping startup scale</h1>
      
          <div className='container grid'>
              
            <div className="card">
                  <h1>Work with Service Incubators to expedite your time-to-market</h1>
                  <p>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building..</p>
                  
          <span>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</span>
                  <div className="line"><h2>Learn More </h2> <span><img src={Vector} alt="icon" /></span></div>
                  
            </div>
              
            <div className="card">
                   <h1>Access funding after your mvp is validated </h1>
                  <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p>
                  <span>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months</span>
                   <div className="line"><h2>Learn More </h2> <span><img src={Vector} alt="icon" /></span></div>
            </div>
          </div>
          
    </section>
  )
}

export default Builder