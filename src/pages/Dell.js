import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Dell = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [dells,setDells] = useState([])
  useEffect(() => {
    const fetchDells = async () => {
      try{
        const res = await axios.get("http://localhost:8800/dell")
        setDells(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchDells()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/dell_logo.png"} alt='' className="brand_logo" style={{width:200,height:130}}  />
        </div>
        <div className='products-container'>
          {dells.map((de) => (
            <div className='products-show'>
              <Link to={`/computers/dell/${de.id}`}><img src={`/images/${de.url}`} alt="" className="comimg"/></Link>
              <p className='products-text'>{de.name} {de.model}</p>
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

export default Dell