/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './Navbar.css'
import sinc_logo from '../../assets/images/sinc_logo.png'
// import {MdoutlineTravelExplore} from 'react-icons/md'

const Navbar = () => {
    // const [show, setShow] = useState('show')
    return (
        <>
            
            <div className="container flex">
                <div className="navbar flex">
                     <img src={sinc_logo} alt="" />
                    <nav>
                       
                        <ul>
                            <li><a href="index.ht,">About</a></li>
                            <li><a href="features.html">Sip</a></li>
                            <li><a href="docs.html">Studio</a></li>
                            <li><a href="features.html">SEEQ</a></li>
                            <li><a href="docs.html">Platform</a></li>
                            <li><a href="features.html">initiative</a></li>
                            <li><a href="docs.html">More</a></li>
                        </ul>
                    </nav>
 <div className='links'>
                    <a href="ref" className="btn1">SINC With Us</a>
                    <a href="ref" className="btn2">Apply to SIP 1.0</a>
                </div>

                </div>

               
            </div>
               
        </>
        
        /* <div class="navbar">
            <div class="container">
                
            <img src={sinc_logo} alt="" />
                <nav>
                     <ul>
                         <li><a href="index.ht,">home</a></li>
                             <li><a href="features.html">Features</a></li>
                                 <li><a href="docs.html">Docs</a></li>
                     </ul>
                </nav>
            </div>


        </div> */
      
      
    );
}

export default Navbar
