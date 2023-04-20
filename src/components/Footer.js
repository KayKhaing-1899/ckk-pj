import React from 'react'
import { useState } from 'react'

const Footer = ({isLogin,setSignupEmail,setSignupDisplay}) => {

    const [email,setEmail] = useState("")

    const handleSubmit = () => {
        if(!email || isLogin===true) return
        setSignupEmail(email)
        setEmail("")
        setSignupDisplay(true)
    }

  return (
    <footer>
        <div className='signup_footer'>
            <img src="/images/plane.png" alt='' className='signup_footer_img' />
            <span className='signup_footer_text'>Sign up to the site</span>
            <form className='footer_signup_form'>
                <input 
                    type='text' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                />
                <button type='button' className='footer_signup_btn' onClick={handleSubmit}>Sign up</button>
            </form>
        </div>
        <div className='last_footer'>
            <div className='call'>
                <img src="/images/phone.png" alt='' className='call_img' />
                <p>
                    <span className='available_time'>Contact us: Monday to Sunday 9 AM - 6 PM</span><br />
                    <span className='hotline'>+959 774 751 509</span>
                </p>
            </div>
            <div className='customer_service'>
                <h5 className='last_footer_title'>Customer Services</h5>
                <p>Privacy Policy</p>
                <p>Term and Conditions</p>
                <p>Shipping and Return Policy</p>
                <p>About Us</p>
            </div>
            <div className='callus'>
                <h5 className='last_footer_title'>Call us here</h5>
                <p>Sales: +959 774 751 509 </p>
                <p>Customer services: +959 774 751 509 </p>
                <p>Email: ckk181099@gmail.com </p>
            </div>
            <div className='connect'>
                <h5 className='last_footer_title'>Connect with us</h5>
                <img src="/images/facebook.png" alt='' className='connect_img' />
                <img src="/images/instagram.png" alt='' className='connect_img' />
                <img src="/images/whatsapp.png" alt='' className='connect_img' />
            </div>
        </div>
        <div className='copyright'>
            <p>copy right Chaw Kay Khaing. All right reserved.</p>
        </div>
    </footer>
  )
}

export default Footer