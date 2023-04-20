import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Acer = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,setSignupEmail,signupDisplay,setSignupDisplay}) => {

  const [acers,setAcers] = useState([])
  useEffect(() => {
    const fetchAcers = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/acer")
        setAcers(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAcers()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src="/images/acer_logo.png" alt='' className="brand_logo" style={{width:250,height:170}}  />
        </div>
        <div className='products-container'>
          {acers.map((ac) => (
            <div className='products-show' key={ac.ComId}>
              <Link to={`/computers/acer/${ac.ComId}`}><img src={`/images/${ac.Url}`} alt="" className="comimg" /></Link>
              <p className='products-text'>{ac.Name} {ac.Model}</p>
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

export default Acer