import React from 'react'
import './Footer.css'
import { BsFillPiggyBankFill } from 'react-icons/bs'
import { FaHeadphones, FaShippingFast, FaWallet } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon-box'>
                    <BsFillPiggyBankFill />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                    <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free Delievery</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                    <FaHeadphones />
                    </div>
                    <div className='detail'>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                    <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Money Back</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className='right-box'>
                <div className='header'>
                    <img src='image/logo.webp' alt='logo'/>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>4005, Silver Business Pointindia</li>
                            <li>+91 7876229259</li>
                            <li>arifmohd78310@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
