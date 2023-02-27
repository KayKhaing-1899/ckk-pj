import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin_home = () => {

    const navigate = useNavigate()

    const addclick = () => {
        navigate("/ad_home/add")
    }

    const fbackclick = () => {
        navigate("/ad_home/feedbacks")
    }

    const orderclick = () => {
        navigate("/ad_home/orders")
    }

  return (
    <div className='adhome_page'>
        <button className='btn btn-danger adhome_btn' onClick={addclick}>ADD</button><br /><br />
        <button className='btn btn-danger adhome_btn' onClick={fbackclick}>Feedbacks</button><br /><br />
        <button className='btn btn-danger adhome_btn' onClick={orderclick}>Orders</button>
    </div>
  )
}

export default Admin_home