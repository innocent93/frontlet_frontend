import React from 'react'
import './Home.css'
import buj_img from '../../assets/images/buj_img.png'
import punch_logo from '../../assets/images/punch_logo.png'

import buj_logo from '../../assets/images/buj_logo.png'
import ontech_img from '../../assets/images/ontech_img.png'

const Featured = () => {
  return (
      <section className="featured">
          <p>As Featured In</p>
          <div className="container grid grid-3">
              <div className="punch">
                  <img src={punch_logo} alt="" />
                  <h4>SINC Partners invests  over 200 million naira in 5 startups</h4>
                  <h6>SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</h6>

                  <div className="report">
                      <p>Reported By</p>
                      <p>Rema Viel</p>
                  </div>
              </div>

              <div className="buj">
                  <img src={buj_img} alt="" />
                  <div className="punch">
                  <img src={buj_logo} alt="" />
                  <h4>SINC Partners invests  over 200 million naira in 5 startups</h4>
                  <h6>SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</h6>

                  <div className="report">
                      <p>Reported By</p>
                      <p>Rema Viel</p>
                  </div>
              </div>
              </div>

              <div className="ontech">
                  <img src={ontech_img} alt="ontech" />
              </div>
          </div>
             
         
    </section>
  )
}

export default Featured