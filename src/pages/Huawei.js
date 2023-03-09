import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Huawei = ({setUname,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [huaweis,setHuaweis] = useState([])
  useEffect(() => {
    const fetchhuaweis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/phones/huawei")
        setHuaweis(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchhuaweis()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/huawei_logo.png"} alt='' className="brand_logo" style={{width:180,height:150}}  />
        </div>
        <div className='products-container'>
            {huaweis.map((hua) => (
                <div className='products-show'>
                    <Link to={`/phones/huaweis/${hua.PhId}`}><img src={`/images/${hua.Url}`} alt="" className="phimg"/></Link>
                    <p className='products-text'>{hua.Name}</p>
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

export default Huawei