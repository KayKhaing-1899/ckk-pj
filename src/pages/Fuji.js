import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Fuji = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [fujis,setFujis] = useState([])
  useEffect(() => {
    const fetchfujis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/cameras/fujifilm")
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
          <img src={"/images/fuji_logo.png"} alt='' className="brand_logo" style={{width:350,height:60,marginTop:90}}  />
        </div>
        <div className='products-container'>
            {fujis.map((fu) => (
              <div className='products-show'>
                <Link to={`/cameras/fuji/${fu.Pid}`}><img src={`/images/${fu.Url}`} alt="" className="camimg"/></Link>
                <p className='products-text'>{fu.Name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
    </div>
  )
}

export default Fuji