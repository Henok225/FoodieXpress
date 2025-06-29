import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           {/* <img src={assets.logo} alt="" /> */}
           <h2 Style="color:red;font-size:30px;">FoodieXpress</h2>
           <p>Lorem Ipsum is simple dummy text of the printing and typesetting industry.</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+-121-1212-22</li>
            <li>Contact@ghgg.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">&copy; 2024-25 FoodieXpress.com all rights reserved</p>
    </div>
  )
}

export default Footer
