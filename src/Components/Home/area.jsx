import React from 'react'
import './Home.css'

const Area = () => {
  return (
      <section className="area">
          <h1 className='text-center py-1'>Our Area Focus</h1>

          <p className='text-center py-2'>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>

          <div className="box">
              <div className="box1">
                  <p>01</p>
                  <p>Business Support & Incubation </p>
              </div>
              <div className="box2">
                  <p>02</p>
                  <p>On-Demand & As-A-Service</p>
              </div>
              <div className="box3">
                  <p>03</p>
                  <p>Marketplace & Crowdsourcing</p>
              </div>
              <div className="box4">
                  <p>04</p>
                  <p>Aggregation 7 Shared Economy</p>
              </div>
              <div className="box5">
                  <p>05</p>
                  <p>Decentralized Economy & Digital Assets</p>
              </div>
           </div>
          
    </section>
  )
}

export default Area