import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import Signup from './Signup'

const BuyNow = ({notFound,setNotFound,wrong,setWrong,buyItem,setUname,setUemail,setIsLogin,setSignupDisplay,setSignupEmail,setLoginDisplay,signupEmail,signupDisplay,loginDisplay}) => {

    const [cus,setCus] = useState({
        name : "",
        email : "",
        phone : "",
        address : ""
    })
    const [order,setOrder] = useState({
        date: "",
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
            setDeli(7) 
        } else if(cus.address.includes('Ayeyarwady') || cus.address.includes('ayeyarwady') || cus.address.includes('AYEYARWADY') || 
        cus.address.includes('Bago') || cus.address.includes('bago') || cus.address.includes('BAGO') || 
        cus.address.includes('Mandalay') || cus.address.includes('mandalay') || cus.address.includes('MANDALAY')){
            setDeli(10)
        } else {
            setDeli(14)
        }
    }

    const handleSubmit = async () => {
        if(!cus.name || !cus.phone || !cus.address || !cus.email) return
        order.date = document.getElementById("date").value
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
            await axios.post("http://localhost:8800/orders/orderlists",order)
        } catch(err){
            console.log(err)
        }
        alert("Order Successful! If you want to cancel your order, please let us know during 3 days after order!")
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
        setCus(()=>({
            name : "",
            email : "",
            phone : "",
            address : ""
        }))
    }

    const cancelclick = () => {
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
        setCus(()=>({
            name : "",
            email : "",
            phone : "",
            address : ""
        }))
    }

    const [date,setDate] = useState("")
    useEffect(() => {
        let current = new Date()
        let day = current.getDate()
        let month = current.getMonth()
        let year = current.getFullYear()
        let date = `${day}.${month}.${year}`
        // document.getElementById('date').value = date
        setDate(date)
    })

  return (
    <div>
        <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
            <div className='buynow_page'>
                <div className='cus_info_form_container'>
                    <form className='customer_info_form'>
                        <label htmlFor='date'>Date :</label>
                        <input 
                            type='text'
                            id='date'
                            value={date}
                        />
                        <br /><br />
                        <label htmlFor='name'>Name :</label>
                        <input 
                            type='text'
                            name='name'
                            value={cus.name}
                            onChange={handleChange} 
                        />
                        <br /><br />
                        <label htmlFor='phone'>Phone :</label>
                        <input 
                            type='text'
                            name='phone'
                            value={cus.phone}
                            onChange={handleChange} 
                        />
                        <br /><br />
                        <label htmlFor='email'>Email :</label>
                        <input 
                            type='text'
                            name='email'
                            value={cus.email}
                            onChange={handleChange} 
                        />
                        <br /><br />
                        <label htmlFor='address'>Address :</label>
                        <input 
                            type='text'
                            name='address'
                            value={cus.address}
                            onChange={handleChange} 
                        />
                    </form>
                </div>
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
                    <div>
                        <button className='btn btn-danger buynow_cancel' onClick={cancelclick}>Cancel</button>
                        <button className='btn btn-danger' onClick={handleSubmit}>Order Now</button>
                    </div>
                </div>
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

export default BuyNow