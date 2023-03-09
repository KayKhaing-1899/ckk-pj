import {Link} from "react-router-dom"
import Login from '../pages/Login'
import Signup from "./Signup"
import { useState,useEffect } from "react"
import axios from "axios"

const Vivo = ({setUname,setSignupEmail,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,signupDisplay,setSignupDisplay}) => {

  const [vivos,setVivos] = useState([])
  useEffect(() => {
    const fetchvivos = async () => {
      try{
        const res = await axios.get("http://localhost:8800/phones/vivo")
        setVivos(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchvivos()
  })

  return (
    <div className='products'>
      <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
        <div className="brand_container">
          <img src={"/images/vivo_logo.png"} alt='' className="brand_logo" style={{width:150,height:70,marginTop:80}}  />
        </div>
        <div className='products-container'>
            {vivos.map((viv) => (
                <div className='products-show'>
                    <Link to={`/phones/vivos/${viv.PhId}`}><img src={`/images/${viv.Url}`} alt="" className="phimg"/></Link>
                    <p className='products-text'>{viv.Name}</p>
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

export default Vivo