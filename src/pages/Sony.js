import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Sony = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [sonys,setSonys] = useState([])
  useEffect(() => {
    const fetchsonys = async () => {
      try{
        const res = await axios.get("http://localhost:8800/cameras/sony")
        setSonys(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchsonys()
  })
 
  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/sony_logo.png"} alt='' className="brand_logo" style={{width:300,height:170}}  />
        </div>
        <div className='products-container'>
          {sonys.map((so) => (
            <div className='products-show'>
              <Link to={`/cameras/sony/${so.Pid}`}><img src={`/images/${so.Url}`} alt="" className="camimg"/></Link>
              <p className='products-text'>{so.Name}</p>
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

export default Sony