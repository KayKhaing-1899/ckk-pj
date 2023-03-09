import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Oppo = ({setUname,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [oppos,setOppos] = useState([])
  useEffect(() => {
    const fetchoppos = async () => {
      try{
        const res = await axios.get("http://localhost:8800/phones/oppo")
        setOppos(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchoppos()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/oppo_logo.png"} alt='' className="brand_logo" style={{width:140,height:150}}  />
        </div>
        <div className='products-container'>
            {oppos.map((op) => (
                <div className='products-show'>
                    <Link to={`/phones/oppos/${op.PhId}`}><img src={`/images/${op.Url}`} alt="" className="phimg"/></Link>
                    <p className='products-text'>{op.Name}</p>
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

export default Oppo