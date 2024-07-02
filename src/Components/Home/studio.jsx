import React from 'react'
import '../Home/Home.css'
import Portfolio from '../../assets/images/Portfolio.png'
import Vector from '../../assets/images/Vector.png'

const Studio = () => {
  return (
    <section className="studio">
          <div className="studio-port">
              <h1 className='text-center'>Our Studio Portfolio</h1>
              <p className='text-center'>Our 2024 Service Incubator Portfolio Companies</p>
          </div>

          <div className="studio-gallery">
              <img src={Portfolio} alt="port" />
          </div>

          <div className="last">
            <p>
              View All Companies
            </p>
            <span><img src={Vector} alt="down-arrow" /></span>
          </div>

          
    </section>
  )
}

export default Studio