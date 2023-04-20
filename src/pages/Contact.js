import React from 'react'
import { useState } from 'react'
import Login from '../pages/Login'
import Signup from './Signup'
import axios from 'axios'

const Contact = ({notFound,setNotFound,wrong,setWrong,isLogin,setSignupEmail,setIsLogin,uname,uemail,setUname,setUemail,signupEmail,signupDisplay,setSignupDisplay,loginDisplay,setLoginDisplay}) => {

  const [feed,setFeed] = useState({
    Uname:"",
    Email:"",
    Subject:"",
    Fback:""
  })

  const handleChange = (e) => {
    setFeed(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    feed.Uname=uname
    feed.Email=uemail
    if(!feed.Subject||!feed.Fback) return
    if(isLogin) {
      try{
        await axios.post("http://localhost:8800/ms/feedbacks", feed)
      } 
      catch (err) {
        console.log(err)
      }
      alert('Your message have been saved. Thanks for your suggestion!')
    } else {
      alert ('You need to login first!')
    }
  }

return (
  <div className="contact">
    <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
      <div className="div1">
        <span style={{color:'gray'}}>Give Advice Now!</span>
        <h2>Contact With Us</h2>
        <p>
          Dear customers, if you want to suggest something or if you have any problem, please let us know now!
        </p>
      </div>
      <form className='send_form'>
        {isLogin ? 
          <div>
            <label htmlFor='name'>Name</label><br />
            <input 
              type='text'
              name='Uname'
              value={uname}
              inputMode={false}
              // onChange={handleChange} 
            /><br /><br />
          </div> :
          <div>
            <label htmlFor='name'>Name</label><br />
            <input 
              type='text'
              name='Uname'
              onChange={handleChange} 
            /><br /><br />
          </div>
        }
        {isLogin ? 
          <div>
            <label htmlFor='Email'>Email</label><br />
            <input 
              type='text'
              name='Email'
              value={uemail}
              inputMode={false}
              // onChange={handleChange} 
            /><br /><br />
          </div> :
          <div>
            <label htmlFor='Email'>Email</label><br />
            <input 
              type='text'
              name='Email'
              onChange={handleChange} 
            /><br /><br />
          </div>
        }
        <label htmlFor='Subject'>Subject</label><br />
        <input 
          type='text'
          name='Subject'
          onChange={handleChange} 
        /><br /><br />
        <label htmlFor='Fback'>Message</label><br />
        <textarea 
          type='text'
          name='Fback'
          onChange={handleChange}
        /><br /><br />
        <button type='button' onClick={handleSubmit} className='btn btn-primary send_message_btn'>send message</button>
      </form>
    </div>
    <div className={!loginDisplay && 'login_hide'}>
      <Login notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
    </div>
    <div className={!signupDisplay && 'login_hide'}>
      <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
    </div>
  </div>
)
}

export default Contact