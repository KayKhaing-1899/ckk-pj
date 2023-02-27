import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const [admin,setAdmin] = useState([])
    useEffect(() => {
        const fetchadmin = async () => {
            try{
                const res = await axios.get("http://localhost:8800/admin")
                setAdmin(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchadmin()
    },[])

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)
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
                        navigate("/ad_home")
                        setName("")
                        setPassword("")
                    } else {
                        alert("Your password is wrong!")
                    }
                } else {
                    alert("User doesn't exist")
                }
            })
        }
    }

  return (
    <div className='admin_container'>
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
  )
}

export default Admin