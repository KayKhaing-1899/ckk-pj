import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setUname,setUemail,setSearchTerm,uname,isLogin,setIsLogin,setLoginDisplay}) => {

    const [cart,setCart] = useState([])
    useEffect(() => {
        const fetchCart = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/cart")
                setCart(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchCart()
    })

    const [accdrop,setAccdrop] = useState(false)
    const navigate = useNavigate()

    const logout_click = () => {
        setIsLogin(false)
        setAccdrop(false)
        setUname("")
        setUemail("")
    }

    const login_click = () => {
        setLoginDisplay(true)
    }

    const acc_click = () => {
        setAccdrop(!accdrop)
    }

    const searchclick = async () => {
        navigate("/results")
    }

  return (
    <nav className='navbar navbar-expand-lg fixed-top'>
        <img src='/images/CKK.png' className='navbar-brand' alt='' />
        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navigation'>
            <ul className='navbar-nav'>
                <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
                <li className='nav-item dropdown'>
                    <Link to='computers' className='nav-link dropdown-toggle' data-bs-toggle='dropdown' role='button'>Computers</Link>
                    <ul className='dropdown-menu'>
                        <h4 className='dropdown-header'>Brands</h4>
                        <hr className='dropdown-divider'></hr>
                        <li><Link to='/computers/dell' className='dropdown-item'>DELL</Link></li>
                        <li><Link to='/computers/acer' className='dropdown-item'>ACER</Link></li>
                        <li><Link to='/computers/asus' className='dropdown-item'>ASUS</Link></li>
                        <li><Link to='/computers/hp' className='dropdown-item'>HP</Link></li>
                        <li><Link to='/computers/msi' className='dropdown-item'>MSI</Link></li>
                    </ul>
                </li>
                <li className='nav-item dropdown'>
                    <Link to='cameras' className='nav-link dropdown-toggle' data-bs-toggle='dropdown' role='button'>Cameras</Link>
                    <ul className='dropdown-menu'>
                        <h4 className='dropdown-header'>Brands</h4>
                        <hr className='dropdown-divider'></hr>
                        <li><Link to='/cameras/canon' className='dropdown-item'>Canon</Link></li>
                        <li><Link to='/cameras/sony' className='dropdown-item'>Sony</Link></li>
                        <li><Link to='/cameras/fuji' className='dropdown-item'>Fujifilm</Link></li>
                    </ul>
                </li>
                <li className='nav-item dropdown'>
                    <Link to='phones' className='nav-link dropdown-toggle' data-bs-toggle='dropdown' role='button'>Phones</Link>
                    <ul className='dropdown-menu'>
                        <h4 className='dropdown-header'>Brands</h4>
                        <hr className='dropdown-divider'></hr>
                        <li><Link to='/phones/samsungs' className='dropdown-item'>Samsung</Link></li>
                        <li><Link to='/phones/oppos' className='dropdown-item'>Oppo</Link></li>
                        <li><Link to='/phones/vivos' className='dropdown-item'>Vivo</Link></li>
                        <li><Link to='/phones/redmis' className='dropdown-item'>Redmi</Link></li>
                        <li><Link to='/phones/huaweis' className='dropdown-item'>Huawei</Link></li>
                    </ul>
                </li>
                <li className='nav-item'><Link to='tvs' className='nav-link'>TVs</Link></li>
                <li className='nav-item'><Link to='contact' className='nav-link'>Contact Us</Link></li>
            </ul>
            <div className='searchbar_container'>
                <input 
                    type='text'
                    className='searchbar' 
                    placeholder='Search...'
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img src="/images/search.png" alt='' className='searchbar_img' style={{width:25,height:25}} onClick={searchclick} />
            </div>
        </div>
        <div className={isLogin ? 'cart_countch':'cart_count'}>
            <Link to='/cart'><button className='cart'></button></Link>
            <span className={cart.length === 0 ? 'hide_cart' : 'show_cart' }>{cart.length}</span>
        </div>
        {isLogin ? 
            <div className='account'>
                <img style={{width:45,height:45}} src="/images/account.png" alt='' onClick={acc_click} />
            </div> : 
            <button onClick={login_click} className='login'>Login</button> 
        }
        <div className={accdrop ? 'accdrop_show' : 'accdrop_hide'}>
            <p style={{fontSize:14}}>{uname}</p>
            <hr />
            <button className='logout' onClick={logout_click}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar