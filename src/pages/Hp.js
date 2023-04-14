import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Hp = ({setUname,setUemail,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [hps,setHps] = useState([])
  useEffect(() => {
    const fetchhps = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/hp")
        setHps(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchhps()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/hp_logo.png"} alt='' className="brand_logo" style={{width:170,height:140,marginTop:60}}  />
        </div>
        <div className='products-container'>
          {hps.map((hp) => (
            <div className='products-show'>
              <Link to={`/computers/hp/${hp.ComId}`}><img src={`/images/${hp.Url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{hp.Name} {hp.Model}</p>
            </div>
          ))}
        </div>
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

export default Hp