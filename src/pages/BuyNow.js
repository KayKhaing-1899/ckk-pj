import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import Signup from './Signup'

const BuyNow = ({buyItem,setUname,setIsLogin,setSignupDisplay,setLoginDisplay,signupEmail,signupDisplay,loginDisplay}) => {

    const [cus,setCus] = useState({
        name : "",
        email : "",
        phone : "",
        address : ""
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

    const price = Number(buyItem.price)

    const [totalprice,setTotalprice] = useState(buyItem.quantity * price)

    const handleChange = (e) => {
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

    const handleSubmit = async () => {
        if(!cus.name || !cus.phone || !cus.address || !cus.email) return
        order.cusname = cus.name
        order.email = cus.email
        order.phone = cus.phone
        order.address = cus.address
        order.item = buyItem.model
        order.quantity = buyItem.quantity
        order.price = buyItem.price
        order.total = totalprice
        setOrder(prev => ({
            ...prev
        }))
        console.log(order)
        try{
            await axios.post("http://localhost:8800/orderlists",order)
        } catch(err){
            console.log(err)
        }
        alert("Order Successful!")
        setTotalprice(0)
        const text = buyItem.model.split(" ")
        if(text[0] === 'Samsung') navigate(`/phones/samsungs/${buyItem.id}`)
        if(text[0] === 'Oppo') navigate(`/phones/oppos/${buyItem.id}`)
        if(text[0] === 'Vivo') navigate(`/phones/vivos/${buyItem.id}`)
        if(text[0] === 'Dell') navigate(`/computers/dell/${buyItem.id}`)
        if(text[0] === 'Acer') navigate(`/computers/acer/${buyItem.id}`)
        if(text[0] === 'Asus') navigate(`/computers/asus/${buyItem.id}`)
        if(text[0] === 'HP') navigate(`/computers/hp/${buyItem.id}`)
        if(text[0] === 'Msi') navigate(`/computers/msi/${buyItem.id}`)
        if(text[0] === 'Canon') navigate(`/cameras/canon/${buyItem.id}`)
        if(text[0] === 'Sony') navigate(`/cameras/sony/${buyItem.id}`)
        if(text[0] === 'Fujifilm') navigate(`/cameras/fuji/${buyItem.id}`)
        if(buyItem.model.includes('TV')) {
            navigate(`/tvs/${buyItem.id}`)
        }
    }

  return (
    <div>
        <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
            <div className='buynow_page'>
                <form className='customer_info_form'>
                    <label htmlFor='name'>Name :</label>
                    <input 
                        type='text'
                        name='name'
                        onChange={handleChange} 
                    />
                    <br /><br />
                    <label htmlFor='phone'>Phone :</label>
                    <input 
                        type='text'
                        name='phone'
                        onChange={handleChange} 
                    />
                    <br /><br />
                    <label htmlFor='email'>Email :</label>
                    <input 
                        type='text'
                        name='email'
                        onChange={handleChange} 
                    />
                    <br /><br />
                    <label htmlFor='address'>Address :</label>
                    <input 
                        type='text'
                        name='address'
                        onChange={handleChange} 
                    />
                    <hr />
                    <div className='buynow_container'>
                        <img src={`/images/${buyItem.url}`} alt='' className='buynow_img' />
                        <div className='buynow_details'>
                            <p>Name : {buyItem.model}</p>
                            <p>Quantity : {buyItem.quantity}</p>
                            <p>Price : {buyItem.price} Ks</p>
                        </div>
                    </div>
                    <div className='buynow_total'>
                        <p className='total'>Delivery : <span style={{color:'#dc4535',fontWeight:700}}>{deli} days</span> <br />
                            Total : <span style={{color:'#dc4535',fontWeight:700}}>{totalprice}</span> Ks
                        </p>
                        <button className='btn btn-danger' type='button' onClick={handleSubmit}>Order Now</button>
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

export default BuyNow