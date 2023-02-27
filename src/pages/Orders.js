import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Orders = () => {

    const [orders,setOrders] = useState([])
    useEffect(() =>{
        const fetchorders = async () => {
            try{
                const res = await axios.get("http://localhost:8800/orderlists")
                setOrders(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchorders()
    },[])
    console.log(orders)

  return (
    <div className='orders_page'>
        <div className='orders'>
            <p className='orders_span til'>Customer Name</p>
            <p className='orders_span til'>Email</p>
            <p className='orders_span til'>Phone</p>
            <p className='orders_span til'>Address</p>
            <p className='orders_span til'>Item Name</p>
            <p className='orders_span til'>Quantity</p>
            <p className='orders_span til'>Price</p>
            <p className='orders_span til'>Total</p>
        </div>
        <hr />
        {orders.map((ord) => (
            <div className='orders'>
                <p className='orders_span'>{ord.cusname}</p>
                <p className='orders_span'>{ord.email}</p>
                <p className='orders_span'>{ord.phone}</p>
                <p className='orders_span'>{ord.address}</p>
                <p className='orders_span'>{ord.item}</p>
                <p className='orders_span'>{ord.quantity}</p>
                <p className='orders_span'>{ord.price}</p>
                <p className='orders_span'>{ord.total}</p>
            </div>
        ))}
    </div>
  )
}

export default Orders