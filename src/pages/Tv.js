import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Tv = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [tvs,setTvs] = useState([])
  useEffect(() => {
    const fetchtvs = async () => {
      try{
        const res = await axios.get("http://localhost:8800/tv")
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
              <Link to={`/tvs/${tv.id}`}><img src={`/images/${tv.url}`} alt="" className="tv_img"/></Link>
              <p className='products-text'>{tv.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login setUname={setUname} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
    </div>
  )
}

export default Tv