import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Redmi = ({setUname,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [redmis,setRedmis] = useState([])
  useEffect(() => {
    const fetchredmis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/redmi")
        setRedmis(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchredmis()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/redmi_logo.png"} alt='' className="brand_logo" style={{width:160,height:70,marginTop:80}}  />
        </div>
        <div className='products-container'>
            {redmis.map((red) => (
                <div className='products-show'>
                    <Link to={`/phones/redmis/${red.id}`}><img src={`/images/${red.url}`} alt="" className="phimg"/></Link>
                    <p className='products-text'>{red.name}</p>
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

export default Redmi