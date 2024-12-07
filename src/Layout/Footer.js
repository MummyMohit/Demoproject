import React from 'react'
import { ImFacebook2,ImInstagram,ImYoutube,ImWhatsapp  } from "react-icons/im";
const Footer = () => {
  return (
  <>
  <div className="card custom_card">
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 col-sm-3 col-lg-3 mt-3'>
            <h3 className='heading-t'>Rating</h3>
            <h6 className='heading-t' >Red Apple Learning Pvt. Ltd.</h6>
           <h6 className='heading-t'>Rated 4.9/5 based on 85 customer reviews</h6>
            </div>
            <div className='col-md-3 col-sm-3 col-lg-3 mt-3'>
            <h3 className='heading-t'>Follow Us</h3>
            <div className='row'>
                <div className='col-md-3'>
                <ImFacebook2 
                style={{background:'white',height:'40px',width:'30px'}}
                />
                </div>
                <div className='col-md-3 col-sm-3 col-lg-3'>
                <ImInstagram 
                style={{background:'white',height:'40px',width:'30px'}}
                />
                </div>
                <div className='col-md-3 col-sm-3 col-lg-3'>
                <ImYoutube 
                style={{background:'white',height:'40px',width:'30px'}}
                />
                </div>
                <div className='col-md-3 col-sm-3 col-lg-3'>
                <ImWhatsapp  
                style={{background:'white',height:'40px',width:'30px'}}
                />
                </div>
            </div>
                </div>
                <div className='col-md-3 col-sm-3 col-lg-3 mt-3'>
                <h3 className='heading-t'>Navigation</h3>
                <h6 className='heading-t' >Why Us</h6>
                <h6 className='heading-t'>Our Courses</h6>
                <h6 className='heading-t'>Privacy Policy</h6>
                </div>
                <div className='col-md-3 col-sm-3 col-lg-3 mt-3'>
                <h3 className='heading-t'>Contact Us</h3>
                <h6 className='heading-t' >Merlin Infinite</h6>
                <h6 className='heading-t' >DN 51, 9th Floor</h6>
                <h6 className='heading-t'>Sector-V, Salt Lake</h6>
                <h6 className='heading-t'>Kolkata-700091, West Bengal</h6>
                </div>
        </div>
    </div>
  
</div>
  </>
  )
}

export default Footer