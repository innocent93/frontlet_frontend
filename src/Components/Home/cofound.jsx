import React from 'react'
import './Home.css'
import circle1 from '../../assets/images/circle1.png'
import circle2 from '../../assets/images/circle2.png'
import circle3 from '../../assets/images/circle3.png'
import Vector from '../../assets/images/Vector.png'


const Cofound = () => {
  return (
      <section className="cofound">
            <div className="con">
              <h1 className='text-center '>Co-found With Us</h1>
                        <p className='text-center '>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
            </div>
                 
           <div className="cofound-container grid grid-3">
                <div className="card">
                 
                  <h1>
                      <img src={circle1} alt="icon" />
                  </h1>
                  <h2>
                      We Ideate
                  </h2>
                  <p>
                      We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
                   </p>
                  
            </div>
              
            <div className="card">
                 
                  <h1>
                      <img src={circle2} alt="icon" />
                  </h1>
                  <h2>
                      You Validate
                  </h2>
                  <p>
                    You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions  </p>
                  
            </div>
            <div className="card">
                 
                  <h1>
                      <img src={circle3} alt="icon" />
                  </h1>
                  <h2>
                 You Co-own
                  </h2>
                  <p>
                     After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
 </p>
                  
            </div>
       
          </div>
             <div className="last">
            <p>
           Build your dream
            </p>
            <span><img src={Vector} alt="down-arrow" /></span>
          </div>
    </section>
  )
}

export default Cofound