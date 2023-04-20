import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Admin_Update = () => {

    const current = useLocation()
    const Id = current.pathname.split('/')[2]
    const [newadmin,setNewadmin] = useState({
        name:"",
        password:""
    })

    const change = (e) => {
        setNewadmin(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const navigate = useNavigate()
    const updateclick = async () => {
         try{
            await axios.put("http://localhost:8800/ms/admin/"+Id, newadmin)
        }catch(err){
            console.log(err)
        }
    }

    const backclick = () => {
        navigate("/admin")
    }

  return (
    <div>
        <form className='add_form'>
            <label htmlFor='url'>New Name : </label>
            <input 
                type='text'
                name='name'
                onChange={change}
            /><br /><br />
            <label htmlFor='name'>Name : </label>
            <input 
                type='text'
                name='password'
                onChange={change}
            /><br /><br />
            <div className='addbtn'>
                <button className='btn btn-danger' style={{width:100,marginRight:20}} onClick={updateclick}>UPDATE</button>
                <button className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
            </div>
        </form>
    </div>
  )
}

export default Admin_Update