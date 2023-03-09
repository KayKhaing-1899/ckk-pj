import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Tv = ({setUname,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [tvs,setTvs] = useState([])
  useEffect(() => {
    const fetchtvs = async () => {
      try{
        const res = await axios.get("http://localhost:8800/tvs")
        setTvs(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchtvs()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <h2 className='brand-name'>TV</h2>
        <div className='products-container'>
          {tvs.map((tv) => (
            <div className='products-show'>
              <Link to={`/tvs/${tv.TvId}`}><img src={`/images/${tv.Url}`} alt="" className="tv_img"/></Link>
              <p className='products-text'>{tv.Name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login setUname={setUname} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
    </div>
  )
}

export default Tv