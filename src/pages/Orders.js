import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Orders = () => {

    const [orders,setOrders] = useState([])
    useEffect(() =>{
        const fetchorders = async () => {
            try{
                const res = await axios.get("http://localhost:8800/orders/orderlists")
                setOrders(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchorders()
    },[])

    const [name,setName] = useState("")
    const [notsearch,setNotsearch] = useState(true)
    const [customer,setCustomer] = useState([])
    const [showbtn,setShowbtn] = useState(false)

    const searchclick = async() => {
        if(!name) return
        setNotsearch(false)
        setShowbtn(true)
        try{
            const res = await axios.get("http://localhost:8800/orders/orderlists/" + name)
            setCustomer(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    const deleteclick = () => {
        customer.map(async(cus) => {
            const ch = document.getElementById(cus.id)
            if(ch.checked){
                try{
                    await axios.delete("http://localhost:8800/orders/orderlists/" + cus.id)
                    window.location.reload()
                } catch(err) {
                    console.log(err)
                }
            }
        })
        setNotsearch(true)
        setShowbtn(false)
    }

    const backclick = () => {
        setNotsearch(true)
        setShowbtn(false)
    }

    const navigate = useNavigate()
    const back = () => {
        navigate('/ad_home')
    }

    const deliver = async (obj) => {
        try{
            await axios.post("http://localhost:8800/ms/delivered",obj)
        }catch(err){
            console.log(err)
        }
        try{
            await axios.delete("http://localhost:8800/orders/orderlists/"+obj.id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='orders_page'>
        <div className='search_cus'>
            <div className='search_cus_bar'>
                <input
                    type='text'
                    name='name'
                    value={name}
                    placeholder="Enter customer name..."
                    onChange={(e) => setName(e.target.value)}
                    style={{width:400,height:50,borderRadius:5,textIndent:10,marginRight:20}}
                />
                <div>
                    <button type='button' className='btn btn-danger prosearch_btn' onClick={searchclick} >SEARCH</button>
                    {showbtn && 
                        <button type='button' className='btn btn-danger prosearch_btn' onClick={deleteclick} >CANCEL</button>
                    }
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
                <p className='orders_span orders_check'></p>
                <p className='orders_span orders_num til'>Date</p>
                <p className='orders_span til'>Customer Name</p>
                <p className='orders_span orders_text til'>Email</p>
                <p className='orders_span til'>Phone</p>
                <p className='orders_span til'>Address</p>
                <p className='orders_span til'>Item Name</p>
                <p className='orders_span orders_num til'>Quantity</p>
                <p className='orders_span orders_num til'>Price</p>
                <p className='orders_span orders_num til'>Total</p>
                <p className='orders_span orders_num til'></p>
            </div>
            <hr />
            {notsearch ? 
                <div>
                    {orders.map((ord) => (
                        <div className='orders'>
                            <p className='orders_span orders_check'></p>
                            <p className='orders_span orders_num'>{ord.date}</p>
                            <p className='orders_span'>{ord.cusname}</p>
                            <p className='orders_span orders_text'>{ord.email}</p>
                            <p className='orders_span'>{ord.phone}</p>
                            <p className='orders_span'>{ord.address}</p>
                            <p className='orders_span'>{ord.item}</p>
                            <p className='orders_span orders_num'>{ord.quantity}</p>
                            <p className='orders_span orders_num'>{ord.price}</p>
                            <p className='orders_span orders_num'>{ord.total}</p>
                            <p className='orders_span orders_num'>
                                <button className='btn btn-danger' onClick={()=>deliver(ord)}>Deliver</button>
                            </p>
                        </div>
                    ))}
                </div> : 
                <div>
                    {customer.map((ord) => (
                        <div className='orders'>
                            <p className='orders_span orders_check'>
                                <input type='checkbox' id={ord.id} />
                            </p>
                            <p className='orders_span orders_num'>{ord.date}</p>
                            <p className='orders_span'>{ord.cusname}</p>
                            <p className='orders_span orders_text'>{ord.email}</p>
                            <p className='orders_span'>{ord.phone}</p>
                            <p className='orders_span'>{ord.address}</p>
                            <p className='orders_span'>{ord.item}</p>
                            <p className='orders_span orders_num'>{ord.quantity}</p>
                            <p className='orders_span orders_num'>{ord.price}</p>
                            <p className='orders_span orders_num'>{ord.total}</p>
                            <p className='orders_span orders_num'>
                                <button className='btn btn-danger' onClick={()=>deliver(ord)}>Deliver</button>
                            </p>
                        </div>
                    ))}
                </div>
            }
            <hr />
        </div>
    </div>
  )
}

export default Orders