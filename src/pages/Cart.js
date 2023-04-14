import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Cart = ({ setSignupEmail,temp,setCartTotal,setUname,setUemail,setIsLogin,setLoginDisplay,setSignupDisplay,loginDisplay,signupDisplay,signupEmail }) => {

    const [totalPrice, setTotalPrice] = useState(0)
    const [itemsnum, setItemnum] = useState(0)
    const navigate = useNavigate()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axios.get("http://localhost:8800/ms/cart")
                setCart(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCart()
        // cart.map((g) => (
        //    setTotalPrice(totalPrice+g.allprice)
        // ))
    })

    const btnclick = async (id) => {
        try {
            await axios.delete("http://localhost:8800/ms/cart/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const click = (obj) => {
        const ch = document.getElementById(obj.model)
        const qty = document.getElementById(obj.id).value
        if (ch.checked) {
            setItemnum(itemsnum + 1)
            setTotalPrice(totalPrice + (obj.price * qty))
        } else {
            setItemnum(itemsnum - 1)
            setTotalPrice(totalPrice - (obj.price * qty))
        }
    }

    const count = (obj) => {
        const qty = document.getElementById(obj.id).value
        document.getElementById(`${obj.model}-id`).innerHTML = qty * obj.price
        const ch = document.getElementById(obj.model)
        let ans = 0
        let arrans = 0
        let arr = cart.filter(f => f.id!==obj.id)
        if(ch.checked){
            ans = obj.price*qty
        }
        arr.forEach(ar => {
            const ch = document.getElementById(ar.model)
            if(ch.checked){
                const q = document.getElementById(ar.id).value
                arrans = arrans+(q*ar.price)
            }
        })
        setTotalPrice(ans+arrans)
    }

    const cartplaceorder = () => {
        if (itemsnum !== 0) {
            setCartTotal(totalPrice)
            cart.forEach((c) => {
                const ch = document.getElementById(c.model)
                if(ch.checked) {
                    temp.push({
                        id:c.id,
                        url:c.url,
                        model:c.model,
                        quantity:document.getElementById(c.id).value,
                        price:c.price,
                        total:c.price*document.getElementById(c.id).value
                    })
                }
            })
            navigate('/cartorder')
        } else {
            alert("You didn't choose any item!")
        }
    }

    return (
        <div className='cart_page'>
            <div className={(loginDisplay || signupDisplay) && 'brand_container_hide'}>
                <div className={cart.length !== 0 ? 'cart_lists_container' : 'cart_lists_container_top'}>
                    {cart.map((item) => (
                        <div className='cart_lists' key={item.id}>
                            <input
                                type='checkbox'
                                id={item.model}
                                style={{ marginRight: 70 }}
                                onChange={() => click(item)}
                            />
                            <img src={`/images/${item.url}`} alt='' className='cart_lists_img' />
                            <div className='cart_lists_details'>
                                <span>Name : {item.model}</span><br />
                                <span>Price : {item.price} Ks</span><br />
                                <label htmlFor='quantity'>Quantity : </label>
                                <input
                                    type='number'
                                    className='cqty'
                                    id={item.id}
                                    min='0'
                                    defaultValue='0'
                                    style={{ color: '#dc3545' }}
                                    onChange={() => count(item)}
                                />
                                <p>Total :
                                    <span style={{ color: '#dc3545' }} className='ctotal' id={`${item.model}-id`}>
                                        0
                                    </span> Ks
                                </p>
                            </div>
                            <button className='btn btn-close remove_cart' onClick={() => btnclick(item.id)}></button>
                        </div>
                    ))}
                    <div className='place_order'>
                        <p className='total_footer'>Item : <span style={{ color: '#dc3545', fontWeight: 700 }}>{itemsnum}</span></p>
                        <p className='total_footer'>Total Price : <span style={{ color: '#dc3545', fontWeight: 700 }}>{totalPrice}</span> Ks</p>
                        <button className='btn btn-danger place_order_btn' onClick={cartplaceorder}>Place Order</button>
                    </div>
                </div>
            </div>
            <div className={!loginDisplay && 'login_hide'}>
                <Login setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
            </div>
            <div className={!signupDisplay && 'login_hide'}>
                <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
            </div>
        </div>
    )
}

export default Cart