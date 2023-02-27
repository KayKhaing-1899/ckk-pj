import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Fuji = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [fujis,setFujis] = useState([])
  useEffect(() => {
    const fetchfujis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/fuji")
        setFujis(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchfujis()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/fuji_logo.png"} alt='' className="brand_logo" style={{width:300,height:60,marginTop:90}}  />
        </div>
        <div className='products-container'>
            {fujis.map((fu) => (
              <div className='products-show'>
                <Link to={`/cameras/fuji/${fu.id}`}><img src={`/images/${fu.url}`} alt="" className="camimg"/></Link>
                <p className='products-text'>{fu.name}</p>
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

export default Fuji