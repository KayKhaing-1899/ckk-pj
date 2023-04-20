import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Cartorder = ({notFound,setNotFound,wrong,setWrong,temp,setSignupEmail,setTemp,cartTotal,setUname,setUemail,setSignupDisplay,setLoginDisplay,loginDisplay,signupDisplay,signupEmail,setIsLogin}) => {

    const [cus,setCus] = useState({
        name:"",
        email:"",
        phone:"",
        address:""
    })
    const [order,setOrder] = useState({
        date : "",
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
    const [date,setDate] = useState("")

    const change = (e) => {
        setCus(prev => ({...prev,[e.target.name]:e.target.value}))
        if(cus.address.includes('Yangon') || cus.address.includes('yangon') || cus.address.includes('YANGON')) {
            setDeli(7) 
        } else if(cus.address.includes('Ayeyarwady') || cus.address.includes('ayeyarwady') || cus.address.includes('AYEYARWADY') || 
        cus.address.includes('Bago') || cus.address.includes('bago') || cus.address.includes('BAGO') || 
        cus.address.includes('Mandalay') || cus.address.includes('mandalay') || cus.address.includes('MANDALAY')){
            setDeli(10)
        } else {
            setDeli(14)
        }
    }

    const cancelcart = () => {
        navigate('/cart')
        setTemp([])
    }

    const confirmcart = () => {
        if(!cus.name || !cus.phone || !cus.address || !cus.email) return
        temp.forEach(async(ele) => {
            order.date = date
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
            try{
                await axios.post("http://localhost:8800/orders/orderlists",order)
            } catch(err){
                console.log(err)
            }
        });
        alert("Order Successful! If you want to cancel your order, please let us know during 3 days after order!")
        navigate('/cart')
        setTemp([])
    }

    useEffect(() => {
        let current = new Date()
        let day = current.getDate()
        let month = current.getMonth()
        let year = current.getFullYear()
        let date = `${day}.${month}.${year}`
        document.getElementById('date').value = date
        setDate(date)
    })

  return (
    <div>
        <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
            <div className='cartorder'>
                <form className='cartorder_form'>
                    <label htmlFor='date'>Date :</label>
                    <input 
                        type='text'
                        id='date'
                        value=''
                    />
                    <br /><br />
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
            <Login notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
        </div>
        <div className={!signupDisplay && 'login_hide'}>
            <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
        </div>
    </div>
  )
}

export default Cartorder