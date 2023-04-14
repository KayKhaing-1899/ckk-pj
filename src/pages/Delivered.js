import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Delivered = () => {

    const [delivers,setDelivers] = useState([])
    useEffect(() =>{
        const fetchorders = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/delivered")
                setDelivers(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchorders()
    },[])
    console.log(delivers)

  return (
    <div>
        <div>
            <hr />
            <div className='orders'>
                <p className='orders_span orders_num til'>Date</p>
                <p className='orders_span til'>Customer Name</p>
                <p className='orders_span orders_text til'>Email</p>
                <p className='orders_span til'>Phone</p>
                <p className='orders_span til'>Address</p>
                <p className='orders_span til'>Item Name</p>
                <p className='orders_span orders_num til'>Quantity</p>
                <p className='orders_span orders_num til'>Price</p>
                <p className='orders_span orders_num til'>Total</p>
            </div>
            <hr />
            <div>
                {delivers.map((ord) => (
                    <div className='orders'>
                        <p className='orders_span orders_num'>{ord.date}</p>
                        <p className='orders_span'>{ord.cusname}</p>
                        <p className='orders_span orders_text'>{ord.email}</p>
                        <p className='orders_span'>{ord.phone}</p>
                        <p className='orders_span'>{ord.address}</p>
                        <p className='orders_span'>{ord.item}</p>
                        <p className='orders_span orders_num'>{ord.quantity}</p>
                        <p className='orders_span orders_num'>{ord.price}</p>
                        <p className='orders_span orders_num'>{ord.total}</p>
                    </div>
                ))}
                </div>
            <hr />
        </div>
    </div>
  )
}

export default Delivered