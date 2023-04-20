import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Login = ({ notFound,setNotFound,wrong,setWrong,setIsLogin, setLoginDisplay, setSignupDisplay, setUname, setUemail }) => {

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:8800/ms/users")
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchUser()
    })

    const [user, setUser] = useState([])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isShow, setIsShow] = useState(false)
    const [isUpdate,setIsUpdate] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotFound(false)
        setWrong(false)
        if (!name || !password) {
            return
        }else{
            user.forEach(u => {
                if (u.Name === name) {
                    if (u.Password === password) {
                        setUname(name)
                        setUemail(u.Email)
                        setWrong(false)
                        setNotFound(false)
                        setIsLogin(true)
                        setLoginDisplay(false)
                        setName("")
                        setPassword("")
                    } else {
                        setWrong(true)
                    }
                } else {
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

    // const updatepwd = () => {
    //     setIsUpdate(true)
    // }
 
    // const [email,setEmail] = useState("")
    // const [newpwd,setNewpwd] = useState("")
    // const [cpwd,setCpwd] = useState("")
    // const updateSubmit = () => {
    //     if(!email||!newpwd||!cpwd) return
    //     user.forEach( async u => {
    //         if(u.Email===email){
    //             if(newpwd===cpwd){
    //                 try {
    //                     await axios.put("http://localhost:8800/ms/users/" + email , newpwd)
    //                 } catch (err) {
    //                     console.log(err)
    //                 }
    //                 setIsUpdate(false)
    //                 setEmail("")
    //                 setNewpwd("")
    //                 setCpwd("")
    //             }else{
    //                 alert("Your password doesn't match!")
    //             }
    //         }else{
    //             alert("Your email doesn't exist!")
    //         }
    //     })
    // }

    return (
        <div className='login_page'>
            <div className={(notFound || wrong || isUpdate) ? 'brand_container_hide' : 'login_container'}>
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
                    <button type='submit' className='btn btn-danger login_btn' >Login</button>
                </form>
                <button className='show_eye' onClick={showPassword}>
                    {isShow ? <img src="/images/open_eye.png" alt='' className='show_eye_img' /> : <img src="/images/close_eye.png" alt='' className='show_eye_img' />}
                </button>
                <div className='form-footer'>
                    {/* <input type='checkbox'></input>
                    <p className='check-name'>Remember me</p> */}
                    {/* <p className='help' onClick={updatepwd}>Forget Password?</p> */}
                </div>
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
            {/* {isUpdate &&
                <div className='login_container'>
                    <form>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br /><br />
                        <label htmlFor='password'>New Password</label>
                        <br />
                        <input
                            type='password'
                            name='newpwd'
                            value={newpwd}
                            onChange={(e) => setNewpwd(e.target.value)}
                        />
                        <br /><br />
                        <label htmlFor='password'>Confirm Password</label>
                        <br />
                        <input
                            type='password'
                            name='cpwd'
                            value={cpwd}
                            onChange={(e) => setCpwd(e.target.value)}
                        />
                        <br /><br />
                        <button type='button' className='btn btn-danger' onClick={updateSubmit}>UPDATE</button>
                    </form>
                </div>
            } */}
        </div>
    )
}

export default Login