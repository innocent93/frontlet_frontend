import React from 'react'
import './Home.css'
import skimake from '../../assets/images/skimake.png'
import krow from '../../assets/images/krow.png'
import wettaa from '../../assets/images/wettaa.png'
import kreeca from '../../assets/images/kreeca.png'

const Equity = () => {
  return (
      <section className="equity">
          <div className="text-equity1">
              <h1>Equity jobs</h1>
              <p>See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
          </div>

      <div className="text-equity2">
            <div className="box">
          <img src={skimake} alt="" /><br/>
          <p>This company is a SAAS Startup that builds AI copy generator...</p>
          <p>Chief Executive Officer</p>
          <div className="location">
            <div>
              <p>Location</p>
              <h3>Abuja Nigeria</h3>
            </div>
            <div>
              <p>INDUSTRY</p>
              <h3>On-Demand print</h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Equity</p>
              <h3>1.2%</h3>
            </div>
            <div>
              <p>Stipend</p>
              <h3>
                  NGN 200,000/mth </h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Deadline</p>
              <h3>24th, January 2024</h3>
            </div>
            <div>
              <p>ROLE TYPE</p>
              <h3>
                  FULL TIME</h3>
              </div>
          </div>
           <a href="recover" className="btn">View Details</a>
            </div>
        <div className="box">
                <img src={kreeca} alt="" />
          <p>This company is a SAAS Startup that builds AI copy generator...</p>
          <p>Uk Strategist</p>
          <div className="location">
            <div>
              <p>Location</p>
              <h3>Abuja Nigeria</h3>
            </div>
            <div>
              <p>INDUSTRY</p>
              <h3>COMMERCE</h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Equity</p>
              <h3>1.2%</h3>
            </div>
            <div>
              <p>Stipend</p>
              <h3>
                  NGN 200,000/mth </h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Deadline</p>
              <h3>24th, January 2024</h3>
            </div>
            <div>
              <p>ROLE TYPE</p>
              <h3>
                  FULL TIME</h3>
              </div>
          </div>
           <a href="recover" className="btn">View Details</a>
        </div>
        <div className="box">
         <img src={krow} alt="" />
          <p>This company is a SAAS Startup that builds AI copy generator...</p>
          <p>CTO & Head of innovations</p>
          <div className="location">
            <div>
              <p>Location</p>
              <h3>Abuja Nigeria</h3>
            </div>
            <div>
              <p>INDUSTRY</p>
              <h3>Fintech</h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Equity</p>
              <h3>1.2%</h3>
            </div>
            <div>
              <p>Stipend</p>
              <h3>
                  NGN 200,000/mth </h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Deadline</p>
              <h3>24th, January 2024</h3>
            </div>
            <div>
              <p>ROLE TYPE</p>
              <h3>
                  FULL TIME</h3>
              </div>
          </div>
           <a href="recover" className="btn">View Details</a>
        </div>
        <div className="box">
             <img src={wettaa} alt="" /><br/>
          <p>This company is a SAAS Startup that builds AI copy generator...</p>
          <p>Backend Developer</p>
          <div className="location">
            <div>
              <p>Location</p>
              <h3>Abuja Nigeria</h3>
            </div>
            <div>
              <p>INDUSTRY</p>
              <h3>Transportation</h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Equity</p>
              <h3>1.2%</h3>
            </div>
            <div>
              <p>Stipend</p>
              <h3>
                  NGN 200,000/mth </h3>
              </div>
          </div>
           <div className="location">
            <div>
              <p>Deadline</p>
              <h3>24th, January 2024</h3>
            </div>
            <div>
              <p>ROLE TYPE</p>
              <h3>
                  FULL TIME</h3>
              </div>
          </div>
           <a href="recover" className="btn">recover</a>
        </div>
       
          </div>
      
          <p className='text-center'>equity</p>
    </section>
  )
}

export default Equity