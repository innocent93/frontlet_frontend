import React from 'react'
import './Home.css'
import startup1 from '../../assets/images/startup1.png'
import startup2 from '../../assets/images/startup2.png'
import glog1 from '../../assets/images/glog1.png'
import glog2 from '../../assets/images/glog2.png'
import glog3 from '../../assets/images/glog3.png'



const Blog = () => {
  return (
      <section className="blogs">
          <h1 className='text-center'>Blogs & Resources</h1>
          <div className="blogs-container grid grid-3">
              <div >
                  <img src={startup1} alt="stat" />
              </div>
              <div >
                  <img src={startup2} alt="stat" />
              </div>
              <div >
                  <img src={startup2} alt="stat" />
               </div>
          </div>

           <div className="glog-container grid grid-3">
              <div className="glog flex">
                <div className="glog-text">
                      <h5>Top Ten Most Powerful Startup</h5>
                      <h6>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</h6>
                  </div>
                  <img src={glog1} alt="glo" />
              </div>
               <div className="glog flex">
                <div className="glog-text">
                      <h5>Top Ten Most Powerful Startup</h5>
                      <h6>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</h6>
                  </div>
                  <img src={glog2} alt="glo" />
              </div>
               <div className="glog flex">
                <div className="glog-text">
                      <h5>Top Ten Most Powerful Startup</h5>
                      <h6>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</h6>
                  </div>
                  <img src={glog3} alt="glo" />
              </div>
          </div>
          <h3 className='text-center'>See More Blogs & Resources</h3>
   </section>
  )
}

export default Blog