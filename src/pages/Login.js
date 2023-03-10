import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Login = ({setIsLogin,setLoginDisplay,setSignupDisplay,setUname}) => {

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/users")
                setUser(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchUser()
    })

    const [user,setUser] = useState([])
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)
    const [notFound,setNotFound] = useState(false)
    const [wrong,setWrong] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUname(name)
        if(!name || !password) {
            return
        }else{
            user.forEach(u => {
                if(u.Name===name) {
                    setNotFound(false)
                    if(u.Password===password){
                        setIsLogin(true)
                        setLoginDisplay(false)
                        setName("")
                        setPassword("")
                        setWrong(false)
                    }else{
                        setWrong(true)
                    }
                }else{
                    setNotFound(true)
                }
            })
        }
    }

    const okclick = () => {
        setNotFound(false)
        setWrong(false)
    }

    const closePage = () => {
        setLoginDisplay(false)
        setName("")
        setPassword("")
    }

    const showPassword = () => {
        setIsShow(!isShow)
    }

    const click = () => {
        setLoginDisplay(false)
        setSignupDisplay(true)
    }

  return (
    <div className='login_page'>
        <div className={(notFound||wrong) ? 'brand_container_hide' : 'login_container'}>
            <div className='close'>
                <h3 className='login_title'>Login</h3>
                <button className='btn btn-close close_btn' onClick={closePage}></button>
            </div>
            <form>
                <label htmlFor='name'>Name</label>
                <br />
                <input 
                    type='text' 
                    name='name'
                    id='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />
                <label htmlFor='password'>Password</label>
                <br />
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='password'
                    id='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button type='button' className='btn btn-danger login_btn' onClick={handleSubmit}>Login</button>
            </form>
            <button className='show_eye' onClick={showPassword}>
                {isShow ? <img src="/images/open_eye.png" alt='' className='show_eye_img' /> : <img src="/images/close_eye.png" alt='' className='show_eye_img' />}
            </button>
            {/* <div className='form-footer'>
                <input type='checkbox'></input>
                <p className='check-name'>Remember me</p>
                <p className='help'>Need help?</p>
            </div> */}
            <p className='sign_up'>
                Are you new customer? <span className='signup_now' onClick={click}>Sign_up</span> now.
            </p>
        </div>
        {notFound && 
            <div className='alert'>
                <h2>User Not Found</h2>
                <div className='alert_container'>
                    <button className='btn btn-primary alert_ok' onClick={okclick}>OK</button>
                </div>
            </div>
        }
        {wrong && 
            <div className='alert'>
                <h2>Your password is wrong</h2>
                <div className='alert_container'>
                    <button className='btn btn-primary alert_ok' onClick={okclick}>OK</button>
                </div>
            </div>
        }
    </div>
  )
}

export default Login