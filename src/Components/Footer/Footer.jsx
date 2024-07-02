import React from 'react'
import './Footer.css'
import sinc_logo_white from '../../assets/images/sinc_logo_white.png'
import truster_logo from '../../assets/images/truster_logo.png'
import line1 from '../../assets/images/line1.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta1 from '../../assets/images/insta1.png'
import insta2 from '../../assets/images/insta2.png'
import insta3 from '../../assets/images/insta3.png'
import insta4 from '../../assets/images/insta4.png'
import insta5 from '../../assets/images/insta5.png'
import gasus from '../../assets/images/gasus.png'



const Footer = () => {
  return (
    <footer className='footer bg-dark py-5'>
     
        <div className="news">
        <h1>Newsletter</h1>
        <p>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        <div>
          <form action="/post">
           <p> <input type="text" name='email' placeholder='Enter Email' className='card' />
            <a href="/em" className="btn card">Subscribe</a></p>
          </form>
        </div>
        </div>
<img src={line1} alt="" />
      
      <div className="foot-container">

         <div className=" sinc down-box">
                    <img src={sinc_logo_white} alt="" />
                    <p>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
                </div>
          

         <div className="platform">
          <h2>Platforms
           </h2>
                   <nav>
                    <ul>
                      <li><a href="/rome">kofoundme</a></li>
                      <li><a href="/rome">InResidency</a></li>
                      <li><a href="/rome">Service Market</a></li>
                      <li><a href="/rome">Founders School</a></li>
                      <li><a href="/rome">Metty</a></li>
                      <li><a href="/rome">Grantty</a></li>
                      <li><a href="/rome">Boldtell</a></li>
                      <li><a href="/rome">Chekwa</a></li>
                    

                    </ul>
                  </nav>
      </div>
      
      <div className="sinc">
        <h2>Initiatives</h2>
                  <nav>
                    <ul>
                      <li><a href="/rome">Jabi Plains</a></li>
                      <li><a href="/rome">Local Pricing Initiatives</a></li>
                      <li><a href="/rome">Scholarship program</a></li>
                      <li><a href="/rome">SSMN Initiatives</a></li>
                      <li><a href="/rome">University Stem</a></li>
                      <li><a href="/rome">University InResidency</a></li>
                      <li><a href="/rome">1Million Nigerian Product</a></li>
                      <li><a href="/rome">Founders Festival</a></li>
                    

                    </ul>
                  </nav>
        </div>

        <div className="sinc">
         <h2> About Us</h2>
                  <nav>
                    <ul>
                   
                      <li><a href="/rome">Who we Are</a></li>
                      <li><a href="/rome">Our People</a></li>
                      <li><a href="/rome">Concept Innovations</a></li>
                      <li><a href="/rome">Our Process</a></li>
                      <li><a href="/rome">Investors Network</a></li>
                      <li><a href="/rome">CSR & Events</a></li>
                    <li><a href="/rome">Career</a></li>
                    <li><a href="/rome">Contact</a></li>
                    

                    </ul>
                  </nav>
        </div>

        <div className="sinc">
         <p>More</p>
                  <nav>
                    <ul>
                      <li><a href="/rome">Service</a></li>
                      <li><a href="/rome">Equitys Job</a></li>
                      <li><a href="/rome">EIR Program</a></li>
                      <li><a href="/rome">Offers</a></li>
                      <li><a href="/rome">Innovation News</a></li>
                      <li><a href="/rome">FAQ</a></li>
                      <li><a href="/rome">Blog & Resources</a></li>
                      <li><a href="/rome">Press</a></li>
                    

                    </ul>
                  </nav>
        </div>

        <div className="sinc">
          <h1>Locations</h1>
                  <p>Abuja, Nigeria 
                   Lagos, Nigeria 
            Philadelphia, USA</p>
          <img src={truster_logo} alt="" />
          <p>Trusted</p>
        </div>

      </div>
     
      <div className='last' >
        <div>
          <p>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
        
          <p>&copy; 2023 SINC Partners Ltd. All rights reserved       <span><nav><ul><li><a href="foot">provacy anf policy</a></li></ul></nav></span></p>

        </div>
       
        <div class>
          <p className='gasus'> <img src={gasus} alt="" />We are a business built on the foundation of Christian values and belief

          </p>
          <div className="socials">
          <a href="github"><img src={facebook} alt="" /></a>
          <a href="facebook"><img src={twitter} alt="" /></a>
          <a href="insta"><img src={insta1} alt="" /></a>
          <a href="twitter"><img src={insta2} alt="" /></a>
          <a href="twitter"><img src={insta3} alt="" /></a>
          <a href="twitter"><img src={insta4} alt="" /></a>
          <a href="twitter"><img src={insta5} alt="" /></a>
         
          
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

