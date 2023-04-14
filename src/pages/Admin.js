import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin = ({setAdm}) => {

    const [admin,setAdmin] = useState([])
    useEffect(() => {
        const fetchadmin = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/admin")
                setAdmin(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchadmin()
    })

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)
    const [notFound,setNotFound] = useState(false)
    const [wrong,setWrong] = useState(false)
    const navigate = useNavigate()

    const showPassword = () => {
        setIsShow(!isShow)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !password) {
            return
        } else {
            admin.forEach(ad => {
                if(ad.name===name) {
                    if(ad.pwd===password) {
                        setAdm(prev => ({...prev,name:name,pwd:password}))
                        navigate("/ad_home")
                        setName("")
                        setPassword("")
                        setWrong(false)
                        setNotFound(false)
                    }else{
                        setWrong(true)
                    }
                    setNotFound(false)
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

  return (
    <div className='admin_login_page'>
        <div className={(notFound||wrong)? 'brand_container_hide' : 'admin_container'}>
            <h3 className='login_title'>Login</h3>
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
            <button className='adshow_eye' onClick={showPassword}>
                {isShow ? <img src="/images/open_eye.png" alt='' className='show_eye_img' /> : <img src="/images/close_eye.png" alt='' className='show_eye_img' />}
            </button>
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

export default Admin