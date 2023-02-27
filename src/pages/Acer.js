import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Acer = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [acers,setAcers] = useState([])
  useEffect(() => {
    const fetchAcers = async () => {
      try{
        const res = await axios.get("http://localhost:8800/acer")
        setAcers(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAcers()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src="/images/acer_logo.png" alt='' className="brand_logo" style={{width:200,height:160}}  />
        </div>
        <div className='products-container'>
          {acers.map((ac) => (
            <div className='products-show' key={ac.id}>
              <Link to={`/computers/acer/${ac.id}`}><img src={`/images/${ac.url}`} alt="" className="comimg" /></Link>
              <p className='products-text'>{ac.name} {ac.model}</p>
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

export default Acer