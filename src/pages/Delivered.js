import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Delivered = () => {

    const [delivers,setDelivers] = useState([])
    useEffect(() =>{
        const fetchorders = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/orders/deliver")
                setDelivers(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchorders()
    })
    
    const [date,setDate] = useState("")
    const [notsearch,setNotsearch] = useState(false)
    const [deli,setDeli] = useState([])

    const searchclick = async() => {
        if(!date) return
        setNotsearch(true)
        try{
            const res = await axios.get("http://localhost:8800/ms/orders/deliver/" + date )
            setDeli(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    const back = () => {
        setNotsearch(false)
    }

    const navigate = useNavigate()
    const backclick = () => {
        navigate('/ad_home')
    }

  return (
    <div>
        <div className='search_cus'>
            <div className='search_cus_bar'>
                <input
                    type='text'
                    name='date'
                    value={date}
                    placeholder="Enter delivery date (dd.mm.yyyy)"
                    onChange={(e) => setDate(e.target.value)}
                    style={{width:400,height:50,borderRadius:5,textIndent:10,marginRight:20}}
                />
                <div>
                    <button type='button' className='btn btn-danger prosearch_btn' onClick={searchclick} >SEARCH</button>
                    {notsearch ? 
                        <button type='button' className='btn btn-danger prosearch_btn' onClick={back} >BACK</button> :
                        <button type='button' className='btn btn-danger prosearch_btn' onClick={backclick} >BACK</button> 
                    }
                </div>
            </div>
        </div>
        <div>
            <hr />
            <div className='orders'>
                <p className='orders_span orders_num til'>Delivery Date</p>
                <p className='orders_span orders_num til'>Order Date</p>
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
            {!notsearch ?
                <div>
                    {delivers.map((ord) => (
                        <div className='orders'>
                            <p className='orders_span orders_num'>{ord.delidate}</p>
                            <p className='orders_span orders_num'>{ord.date}</p>
                            <p className='orders_span'>{ord.cusname}</p>
                            <p className='orders_span orders_text'>{ord.email}</p>
                            <p className='orders_span'>{ord.phone}</p>
                            <p className='orders_span'>{ord.address}</p>
                            <p className='orders_span'>{ord.Name}</p>
                            <p className='orders_span orders_num'>{ord.quantity}</p>
                            <p className='orders_span orders_num'>{ord.Price}</p>
                            <p className='orders_span orders_num'>{ord.total}</p>
                        </div>
                    ))}
                </div> :
                <div>
                    {deli.map((ord) => (
                        <div className='orders'>
                            <p className='orders_span orders_num'>{ord.delidate}</p>
                            <p className='orders_span orders_num'>{ord.date}</p>
                            <p className='orders_span'>{ord.cusname}</p>
                            <p className='orders_span orders_text'>{ord.email}</p>
                            <p className='orders_span'>{ord.phone}</p>
                            <p className='orders_span'>{ord.address}</p>
                            <p className='orders_span'>{ord.Name}</p>
                            <p className='orders_span orders_num'>{ord.quantity}</p>
                            <p className='orders_span orders_num'>{ord.Price}</p>
                            <p className='orders_span orders_num'>{ord.total}</p>
                        </div>
                    ))}
                </div>
            }
            
            <hr />
        </div>
    </div>
  )
}

export default Delivered