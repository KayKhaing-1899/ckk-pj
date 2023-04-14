import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Admin_home = ({adm}) => {

    const navigate = useNavigate()

    const prodclick = () => {
        navigate("/ad_home/prods")
    }

    const addclick = () => {
        navigate("/ad_home/add")
    }

    const fbackclick = () => {
        navigate("/ad_home/feedbacks")
    }

    const orderclick = () => {
        navigate("/ad_home/orders")
    }

    const deliverclick = () => {
        navigate("/ad_home/delivered")
    }

    const [accdrop,setAccdrop] = useState(false)
    const acc_click = () => {
        setAccdrop(!accdrop)
    }

    const logout_click = () => {
        navigate("/admin")
    }

  return (
    <div>
        <nav className='navbar navbar-expand-lg fixed-top'>
            <img src='/images/CKK.png' className='navbar-brand admin_nav' alt='' />
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
                    <li className='nav-item'><Link to='/tvs' className='nav-link'>TVs</Link></li>
                    <li>
                        <img style={{width:45,height:45}} src="/images/account.png" alt='' onClick={acc_click} />
                    </li>
                </ul>
                <div className={accdrop ? 'accdrop_show' : 'accdrop_hide'}>
                    <p style={{fontSize:14}}>{adm.name}</p>
                    <hr />
                    <button className='logout' onClick={logout_click}>Logout</button>
                </div>
            </div>
        </nav>
        <div className='adhome'>
            <div className='adhome_page'>
                <button className='btn btn-danger adhome_btn' onClick={prodclick}>Products</button><br /><br />
                <button className='btn btn-danger adhome_btn' onClick={addclick}>ADD</button><br /><br />
                <button className='btn btn-danger adhome_btn' onClick={fbackclick}>Feedbacks</button><br /><br />
                <button className='btn btn-danger adhome_btn' onClick={orderclick}>Orders</button><br /><br />
                <button className='btn btn-danger adhome_btn' onClick={deliverclick}>Delivered</button>
            </div>
        </div>
        <div className='last_footer adhome_footer'>
            <div className='call'>
                <img src="/images/phone.png" alt='' className='call_img' />
                <p>
                    <span className='available_time'>Contact us: Monday to Sunday 9 AM - 6 PM</span><br />
                    <span className='hotline'>+959 774 751 509</span>
                </p>
            </div>
            <div className='customer_service'>
                <h5 className='last_footer_title'>Customer Services</h5>
                <p>Privacy Policy</p>
                <p>Term and Conditions</p>
                <p>Shipping and Return Policy</p>
                <p>About Us</p>
            </div>
            <div className='callus'>
                <h5 className='last_footer_title'>Call us here</h5>
                <p>Sales: +959 774 751 509 </p>
                <p>Customer services: +959 774 751 509 </p>
                <p>Email: ckk181099@gmail.com </p>
            </div>
            <div className='connect'>
                <h5 className='last_footer_title'>Connect with us</h5>
                <img src="/images/facebook.png" alt='' className='connect_img' />
                <img src="/images/instagram.png" alt='' className='connect_img' />
                <img src="/images/whatsapp.png" alt='' className='connect_img' />
            </div>
        </div>
    </div>
  )
}

export default Admin_home