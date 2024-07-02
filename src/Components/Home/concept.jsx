import React from 'react'
import './Home.css'

const Concept = () => {
  return (
      <section className="concept">
            <div className="con">
              <h1 className='text-center '>Our Concept Innovations</h1>
                        <p className='text-center '>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
            </div>
                 
            <div className='concept-container grid grid-3'>
              
            <div className="card">
                 
                  <h1>
                      Service Incubator
                  </h1>
                  <p>
                      A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP

                  </p>
                  
            </div>
              
            <div className="card">
                   <h1>Visualting</h1>
                  <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
                 
                  
              </div>
              
               <div className="card">
                   <h1>Diiming</h1>
                  <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice </p>
            
                  
            </div>
          </div>
          
    </section>
  )
}

export default Concept