import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Hp = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [hps,setHps] = useState([])
  useEffect(() => {
    const fetchhps = async () => {
      try{
        const res = await axios.get("http://localhost:8800/hp")
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
          <img src={"/images/hp_logo.png"} alt='' className="brand_logo" style={{width:150,height:130,marginTop:70}}  />
        </div>
        <div className='products-container'>
          {hps.map((hp) => (
            <div className='products-show'>
              <Link to={`/computers/hp/${hp.id}`}><img src={`/images/${hp.url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{hp.name} {hp.model}</p>
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

export default Hp