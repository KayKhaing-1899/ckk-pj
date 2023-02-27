import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Canon = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [canons,setCanons] = useState([])
  useEffect(() => {
    const fetchcanons = async () => {
      try{
        const res = await axios.get("http://localhost:8800/canon")
        setCanons(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchcanons()
  })
  
  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/canon_logo.png"} alt='' className="brand_logo" style={{width:250,height:100,marginTop:70}}  />
        </div>
        <div className='products-container'>
          {canons.map((can) => (
            <div className='products-show'>
              <Link to={`/cameras/canon/${can.id}`}><img src={`/images/${can.url}`} alt="" className="camimg"/></Link>
              <p className='products-text'>{can.name}</p>
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

export default Canon