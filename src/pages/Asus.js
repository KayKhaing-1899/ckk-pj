import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Asus = ({setUname,setUemail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,setSignupEmail,signupDisplay,setSignupDisplay}) => {

  const [asuss,setAsuss] = useState([])
  useEffect(() => {
    const fetchAsuss = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/asus")
        setAsuss(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAsuss()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/asus_logo.png"} alt='' className="brand_logo" style={{width:250,height:80,marginTop:80}} />
        </div>
        <div className='products-container'>
          {asuss.map((as) => (
            <div className='products-show'>
              <Link to={`/computers/asus/${as.ComId}`}><img src={`/images/${as.Url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{as.Name} {as.Model}</p>
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

export default Asus