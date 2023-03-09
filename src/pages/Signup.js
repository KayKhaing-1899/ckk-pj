import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Signup = ({signupEmail,setSignupEmail,setSignupDisplay,setLoginDisplay}) => {

    const [users,setUsers] = useState([])
    useEffect(() => {
        const fetchusers = async () => {
        try{
            const res = await axios.get("http://localhost:8800/users")
            setUsers(res.data)
        } catch (err) {
            console.log(err)
        }
        }
        fetchusers()
    })

    const [cpassword,setCpassword] = useState("")
    const[user,setUser] = useState({
        Name:"",
        Phone:"",
        Email:"",
        Address:"",
        Password:""
    })
    const [isShow,setIsShow] = useState(false)

    const handleChange = (e) => {
        setUser(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async (e) => {
        let signup = true
        if(signupEmail!==""){
            if(signupEmail === user.Email) {
                if(user.Password !== cpassword) {
                    alert("Your password doesn't match!")
                } else {
                    users.forEach(u => {
                        if(u.Email===user.Email) { signup = false }
                    })
                    if(signup===true){
                        setSignupDisplay(false)
                        try {
                            await axios.post("http://localhost:8800/users", user)
                        } catch (err) {
                            console.log(err)
                        }
                    } else {
                        alert("Your Email is already taken!")
                    }
                }  
            } else {
                alert("Your email doesn't match!")
            }
        } else {
            if(user.Password !== cpassword) {
                alert("Your password doesn't match!")
            } else {
                users.forEach(u => {
                    if(u.Email===user.Email) { signup = false }
                })
                if(signup===true){
                    setSignupDisplay(false)
                    try {
                        await axios.post("http://localhost:8800/users", user)
                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    alert("Your Email is already taken!")
                }
            }
        }
    }

    const closePage = () => {
        setSignupDisplay(false)
        setSignupEmail("")
    }

    const showPassword = () => {
        setIsShow(!isShow)
    }

    const click = () => {
        setSignupDisplay(false)
        setLoginDisplay(true)
    }

  return (
    <div className='signup_page'>
        <div className='signup_container'>
            <div className='close'>
                <h3 className='signup_title'>Sign Up</h3>
                <button className='btn btn-close close_btn' onClick={closePage}></button>
            </div>
            <form className='signup_form'>
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={handleChange}
                />
                <br /><br />
                <label htmlFor='phone'>Phone : </label>
                <input 
                    type='text'
                    name='Phone'
                    onChange={handleChange}

                />
                <br /><br />
                <label htmlFor='email'>Email : </label>
                <input 
                    type='text'
                    name='Email'
                    onChange={handleChange}
                />
                <br /><br />
                <label htmlFor='address'>Address : </label>
                <input 
                    type='text'
                    name='Address'
                    onChange={handleChange}
                />
                <br /><br />
                <label htmlFor='password'>Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='Password'
                    onChange={handleChange}
                />
                <br /><br />
                <label htmlFor='confirm_pwd'>Confirm Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='cpassword'
                    onChange={(e) => setCpassword(e.target.value)}
                />
                <br /><br />
                <div className='show_password_checkbox'>
                    <input type='checkbox' style={{width:15,height:15,marginRight:10}} onClick={showPassword} />
                    <p style={{fontSize:16,marginTop:15,color:'gray'}}>Show password</p>
                </div>
                <button type='button' className='btn btn-danger signup_btn' onClick={handleClick}>Sign Up</button>
            </form>
            <p style={{color:'gray'}}>
                If you already have an account, <span style={{color:'red',fontStyle:'italic',cursor:'pointer'}} onClick={click}>Login</span> here.
            </p>
        </div>
    </div>
  )
}

export default Signup