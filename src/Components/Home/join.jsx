import React from 'react'
import './Home.css'
import circle5 from '../../assets/images/circle5.png'
import circle6 from '../../assets/images/circle6.png'
import circle7 from '../../assets/images/circle7.png'
import Vector from '../../assets/images/Vector.png'
import left_arrow from '../../assets/images/left_arrow.png'
import right_arrow from '../../assets/images/right_arrow.png'

const Join = () => {
  return (
      <section className="join">
          <div className="con">
              <h1 className='text-center '>Join Our Entrepreneur In Residence (EIR) Program</h1>
                        <p className='text-center '>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
          </div>
          
           <div className="join-container grid grid-3">
                <div className="card">
                 
                  <h1>
                      <img src={circle5} alt="icon" />
                  </h1>
                  <h2>
                Application and Selection
                  </h2>
                  <p>
                      Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.
 </p>
                  
            </div>
              
            <div className="card">
                 
                  <h1>
                      <img src={circle6} alt="icon" />
                  </h1>
                  <h2>
                    Alignment Meeting and Proposal Submission
                  </h2>
                  <p>If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.</p>
                 </div>
            <div className="card">
                 
                  <h1>
                      <img src={circle7} alt="icon" />
                  </h1>
                  <h2>
                Negotiation and Agreement
                  </h2>
                  <p>
                   Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners. </p>
                  
            </div>
       
          </div>

          <div className="last">
            <p>
           Build your dream
            </p>
            <span><img src={Vector} alt="down-arrow" /></span>
          </div>

          <div className="arrow">
              <img src={left_arrow} alt="down-arrow" />
              <img src={right_arrow} alt="down-arrow" />
          </div>

    </section>
  )
}

export default Join