import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Login = ({setIsLogin,setLoginDisplay,setSignupDisplay,setUname}) => {

    useEffect(() => {
        const fetchUser = async () => {
            try{
                const res = await axios.get("http://localhost:8800/users")
                setUser(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchUser()
    },[])

    const [user,setUser] = useState([])
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUname(name)
        if(!name || !password) {
            return
        } else {
            user.forEach(u => {
                if(u.Name===name) {
                    if(u.Password===password) {
                        setIsLogin(true)
                        setLoginDisplay(false)
                        setName("")
                        setPassword("")
                    } else {
                        console.log("Your password is wrong!")
                    }
                } else {
                    console.log("User doesn't exist")
                }
            })
        }
    }

    const closePage = () => {
        setLoginDisplay(false)
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
        <div className='login_container'>
            <div className='close'>
                <h3 className='login_title'>Login</h3>
                <button className='btn btn-close close_btn' onClick={closePage}></button>
            </div>
            <form onSubmit={handleSubmit}>
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
                <button type='submit' className='btn btn-danger login_btn'>Login</button>
            </form>
            <button className='show_eye' onClick={showPassword}>
                {isShow ? <img src="/images/open_eye.png" alt='' className='show_eye_img' /> : <img src="/images/close_eye.png" alt='' className='show_eye_img' />}
            </button>
            <div className='form-footer'>
                <input type='checkbox'></input>
                <p className='check-name'>Remember me</p>
                <p className='help'>Need help?</p>
            </div>
            <p className='sign_up'>
                Are you new customer? <span className='signup_now' onClick={click}>Sign_up</span> now.
            </p>
        </div>
    </div>
  )
}

export default Login