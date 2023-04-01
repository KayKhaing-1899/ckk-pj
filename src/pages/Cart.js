import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Cart = ({notFound,setNotFound,wrong,setWrong,setSignupEmail,temp,setCartTotal,setUname,setUemail,setIsLogin,setLoginDisplay,setSignupDisplay,loginDisplay,signupDisplay,signupEmail }) => {

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
        const ch = document.getElementById(obj.CartId)
        const qty = document.getElementById(obj.Pid).value
        if (ch.checked) {
            setItemnum(itemsnum + 1)
            setTotalPrice(totalPrice + (obj.Price * qty))
        } else {
            setItemnum(itemsnum - 1)
            setTotalPrice(totalPrice - (obj.Price * qty))
        }
    }

    const count = (obj) => {
        const qty = document.getElementById(obj.Pid).value
        document.getElementById(`${obj.Pid}-id`).innerHTML = qty * obj.Price
        const ch = document.getElementById(obj.CartId)
        let ans = 0
        let arrans = 0
        let arr = cart.filter(f => f.Pid!==obj.Pid)
        if(ch.checked){
            ans = obj.Price*qty
        }
        arr.forEach(ar => {
            const ch = document.getElementById(ar.CartId)
            if(ch.checked){
                const q = document.getElementById(ar.Pid).value
                arrans = arrans+(q*ar.Price)
            }
        })
        setTotalPrice(ans+arrans)
    }

    const cartplaceorder = () => {
        if (itemsnum !== 0) {
            setCartTotal(totalPrice)
            cart.forEach((c) => {
                const ch = document.getElementById(c.CartId)
                if(ch.checked) {
                    temp.push({
                        id:c.Pid,
                        url:c.Url,
                        model:c.Name,
                        quantity:document.getElementById(c.Pid).value,
                        price:c.Price,
                        total:c.Price*document.getElementById(c.Pid).value
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
                        <div className='cart_lists' key={item.CartId}>
                            <input
                                type='checkbox'
                                id={item.CartId}
                                style={{ marginRight: 70 }}
                                onChange={() => click(item)}
                            />
                            <img src={`/images/${item.Url}`} alt='' className='cart_lists_img' />
                            <div className='cart_lists_details'>
                                <span>Name : {item.Name}</span><br />
                                <span>Price : {item.Price} Ks</span><br />
                                <label htmlFor='quantity'>Quantity : </label>
                                <input
                                    type='number'
                                    className='cqty'
                                    id={item.Pid}
                                    min='0'
                                    defaultValue='0'
                                    style={{ color: '#dc3545' }}
                                    onChange={() => count(item)}
                                />
                                <p>Total :
                                    <span style={{ color: '#dc3545' }} className='ctotal' id={`${item.Pid}-id`}>
                                        0
                                    </span> Ks
                                </p>
                            </div>
                            <button className='btn btn-close remove_cart' onClick={() => btnclick(item.CartId)}></button>
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
                <Login notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
            </div>
            <div className={!signupDisplay && 'login_hide'}>
                <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
            </div>
        </div>
    )
}

export default Cart