import React from 'react'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import Poster from '../components/Poster'
import Login from './Login'
import Signup from './Signup'

const Home = ({setUname,setUemail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,setSignupEmail,signupDisplay,setSignupDisplay}) => {
  return (
    <div className='home_page'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <Poster />
        <div className='popularpage_container'>
          <h2 className='popular_title'>Recent Items</h2>
          <Popular />
        </div>
        <Categories />
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
    </div>
  )
}

export default Home