import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Msi = ({setUname,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [msis,setMsis] = useState([])
  useEffect(() => {
    const fetchMsis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/msi")
        setMsis(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchMsis()
  })  

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/msi_logo.png"} alt='' className="brand_logo" style={{width:220,height:120,marginTop:70}}  />
        </div>
        <div className='products-container'>
          {msis.map((m) => (
            <div className='products-show'>
              <Link to={`/computers/msi/${m.ComId}`}><img src={`/images/${m.url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{m.Name} {m.Model}</p>
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

export default Msi