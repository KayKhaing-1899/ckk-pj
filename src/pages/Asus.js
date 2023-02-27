import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Asus = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [asuss,setAsuss] = useState([])
  useEffect(() => {
    const fetchAsuss = async () => {
      try{
        const res = await axios.get("http://localhost:8800/asus")
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
          <img src={"/images/asus_logo.png"} alt='' className="brand_logo" style={{width:200,height:90,marginTop:80}} />
        </div>
        <div className='products-container'>
          {asuss.map((as) => (
            <div className='products-show'>
              <Link to={`/computers/asus/${as.id}`}><img src={`/images/${as.url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{as.name} {as.model}</p>
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

export default Asus