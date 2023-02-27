import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Samsung = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [samsungs,setSamsungs] = useState([])
  useEffect(() => {
    const fetchsamsungs = async () => {
      try{
        const res = await axios.get("http://localhost:8800/samsung")
        setSamsungs(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchsamsungs()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className='brand_container'>
          <img src={"/images/samsung_logo.png"} alt='' className="brand_logo" style={{width:190,height:180}}  />
        </div>
        <div className='products-container'>
            {samsungs.map((sam) => (
                <div className='products-show'>
                    <Link to={`/phones/samsungs/${sam.id}`}><img src={`/images/${sam.url}`} alt="" className="phimg"/></Link>
                    <p className='products-text'>{sam.name}</p>
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

export default Samsung