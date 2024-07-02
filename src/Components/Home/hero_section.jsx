import React from 'react'
import './Home.css';
import Image from "../../assets/images/Image.jpg"
import three_dots from "../../assets/images/three_dots.png"

const Hero = () => {
    return (
 <section className='hero'>
        <div className="container grid">
            <div className="sinc">
                    <h1>SINC Partners is a service incubation company </h1>
                    <span>
                        Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                    </span>

                     
                    <div>
                         <a href="ref" className="btn">since with us</a>
                   </div>
                   
                    <span className='three_dots'><img src={three_dots} alt="" /></span>
                
            </div>

            <div className='hero_img'>
                <img src={Image} alt="" />
            </div>
        </div>
    
</section>
    );
}

export default Hero