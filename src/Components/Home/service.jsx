import React from 'react'
import './Home.css'
import diamond from '../../assets/images/diamond.png'
import star from '../../assets/images/star.png'
import polygon from '../../assets/images/polygon.png'
import Vector from '../../assets/images/Vector.png'

const Services = () => {
  return (
    <>
    <section className='services'>
        
          <div className="model">
            <h1>Our Service Incubation Model</h1>
            <p>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
           </div>
        
          
        <div className="hypo">
          <div className="hypo-text">
            <h1>Hypothesis</h1>
            <p>Just a few reasons we know its time for this model within the ecosystem</p>
          </div>

          <div className="services-container grid grid-3">
                <div className="card">
                 
                  <h1>
                      <img src={diamond} alt="icon" />
                  </h1>
                  <p>
                    Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support
</p>
                  
            </div>
              
            <div className="card">
                   <h1>   <img src={star} alt="icon" /></h1>
                  <p>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</p>
                 
                  
            </div>
              
            <div className="card">
                   <h1><img src={polygon} alt="icon" /></h1>
                  <p>Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
            
                  
          </div>
          
          </div>
        <div className="case">
          <div className="study">
            <h1>Case Study</h1>
            <p>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
          </div>
          <div className="button">
            <div className="card">
              Service Incubator Equity
            </div>
            <div className="card">
              SEEQ Maths Equation
            </div>
            <div className="card">
             Value of my Equity Over Time
            </div>
            </div>
            
          </div>
          <div className="last">
            <p>
              Become A Service Incubator
            </p>
            <span><img src={Vector} alt="down-arrow" /></span>
          </div>
        </div>
        
       
    </section>
    </>
   
  );
}

export default Services