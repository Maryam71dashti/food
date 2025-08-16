import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img className='footer-logo' src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Delivery</li>
                        <li>privacy Policy </li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get in touch</h2>
                    <ul>
                        <li>0913-036-2452</li>
                        <li>maryam.a.dashti71@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">copyright 2025 and copying of site programs is not permitted</p>
        </div>
    )
}

export default Footer