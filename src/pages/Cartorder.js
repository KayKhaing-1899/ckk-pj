import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Cartorder = ({temp,setTemp,cartTotal,setUname,setSignupDisplay,setLoginDisplay,loginDisplay,signupDisplay,signupEmail,setIsLogin}) => {

    const [cus,setCus] = useState({
        name:"",
        email:"",
        phone:"",
        address:""
    })
    const [order,setOrder] = useState({
        cusname : "",
        email : "",
        phone : "",
        address : "",
        item : "",
        quantity : 0,
        price : 0,
        total : 0
    })
    const navigate = useNavigate()
    const [deli,setDeli] = useState(0)

    const change = (e) => {
        setCus(prev => ({...prev,[e.target.name]:e.target.value}))
        if(cus.address.includes('Yangon') || cus.address.includes('yangon') || cus.address.includes('YANGON')) {
            setDeli(5) 
        } else if(cus.address.includes('Ayeyarwady') || cus.address.includes('ayeyarwady') || cus.address.includes('AYEYARWADY') || 
        cus.address.includes('Bago') || cus.address.includes('bago') || cus.address.includes('BAGO') || 
        cus.address.includes('Mandalay') || cus.address.includes('mandalay') || cus.address.includes('MANDALAY')){
            setDeli(7)
        } else {
            setDeli(10)
        }
    }

    const cancelcart = () => {
        navigate('/cart')
        setTemp([])
    }

    const confirmcart = () => {
        if(!cus.name || !cus.phone || !cus.address || !cus.email) return
        temp.forEach(async(ele) => {
            order.cusname = cus.name
            order.email = cus.email
            order.phone = cus.phone
            order.address = cus.address
            order.item = ele.model
            order.quantity = ele.quantity
            order.price = ele.price
            order.total = ele.total
            setOrder(prev => ({
                ...prev
            }))
            console.log(order)
            try{
                await axios.post("http://localhost:8800/orderlists",order)
            } catch(err){
                console.log(err)
            }
        });
        alert("Order successful!")
        navigate('/cart')
        setTemp([])
    }

  return (
    <div>
        <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
            <div className='cartorder'>
                <form className='cartorder_form'>
                    <label htmlFor='name'>Name :</label>
                    <input 
                        type='text'
                        name='name'
                        onChange={change} 
                    />
                    <br /><br />
                    <label htmlFor='email'>Email :</label>
                    <input 
                        type='text'
                        name='email'
                        onChange={change} 
                    />
                    <br /><br />
                    <label htmlFor='phone'>Phone :</label>
                    <input 
                        type='text'
                        name='phone'
                        onChange={change} 
                    />
                    <br /><br />
                    <label htmlFor='address'>Address :</label>
                    <input 
                        type='text'
                        name='address'
                        onChange={change} 
                    />
                    <hr />
                    <div className='cartorder_title'>
                        <p>Name</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    {temp.map((citem) => (
                        <div className='cartorder_body'>
                            <p>{citem.model}</p>
                            <p>{citem.quantity}</p>
                            <p>{citem.total} Ks</p>
                        </div>
                    ))}
                    <hr />
                    <div className='cartorder_total'>
                        <p>Total Price</p>
                        <p></p>
                        <p>{cartTotal} Ks</p>
                    </div>
                    <div className='cartorder_total'>
                        <p>Delivery Time</p>
                        <p></p>
                        <p>{deli} days</p>
                    </div>
                    <hr />
                    <div className='cartorder_btn'>
                        <button type='button' className='btn btn-danger cancel_btn' onClick={cancelcart}>Cancel</button>
                        <button type='button' className='btn btn-danger confirm_btn' onClick={confirmcart}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
        <div className={!loginDisplay && 'login_hide'}>
            <Login setUname={setUname} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
        </div>
        <div className={!signupDisplay && 'login_hide'}>
            <Signup signupEmail={signupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
        </div>
    </div>
  )
}

export default Cartorder