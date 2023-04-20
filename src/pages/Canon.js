import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Canon = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [canons,setCanons] = useState([])
  useEffect(() => {
    const fetchcanons = async () => {
      try{
        const res = await axios.get("http://localhost:8800/cameras/canon")
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
              <Link to={`/cameras/canon/${can.CamId}`}><img src={`/images/${can.Url}`} alt="" className="camimg"/></Link>
              <p className='products-text'>{can.Name}</p>
            </div>
          ))}
        </div>
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

export default Canon