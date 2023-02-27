import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'

const SonyDetails = ({setUname,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

  const [cart,setCart] = useState([])
  useEffect(() => {
    const fetchcart = async () => {
      try{
        const res = await axios.get("http://localhost:8800/cart")
        setCart(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchcart()
  })

  const [sonys,setSonys] = useState([])
  useEffect(() => {
    const fetchsonys = async () => {
      try{
        const res = await axios.get("http://localhost:8800/sony/" + sonyId)
        setSonys(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchsonys()
    sonys.map((ac) => {
      setSony(ac)
    })
  })
 
  const {sonyId} = useParams()
  const [sony,setSony] = useState({})
  // const sony = sonys.find((so) => so.id === sonyId)
  const navigate = useNavigate() 

  const decrement = () => {
    if(count !== 0){
      setCount(count - 1)
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  const addCart = async () => {
    cartItem.id=cartItem.id+1
    cartItem.url=sony.url
    cartItem.model=sony.name
    cartItem.price=sony.price
    let insert=true
    setCartItem((item) => (
      {
        ...item
      }
    ))
    if(cart.length !== 0) {
      cart.forEach(c => {
        if(c.model===cartItem.model){
          insert=false
        }
      })
    }
    if(insert){
      try{
        await axios.post("http://localhost:8800/cart", cartItem)
      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Item is already added to cart.")
    }
  }

  const buyNow = () => {
    if(count !== 0) {
      buyItem.id=sony.id
      buyItem.url=sony.url
      buyItem.model=sony.name
      buyItem.quantity=count
      buyItem.price=sony.price
      setBuyItem((item) => (
        {
          ...item
        }
      ))
      navigate('/buynow')
      setCount(0)
    }
  }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${sony.url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{sony.name}</h2>
              <hr/>
              <p className='detail-title'>AF Mode : <span className='gray'>{sony.af_mode}</span></p>
              <p className='detail-title'>Built_in_Flash : <span className='gray'>{sony.built_in_flash}</span></p>
              <p className='detail-title'>ISO : <span className='gray'>{sony.iso}</span></p>
              <p className='detail-title'>View_Finder : <span className='gray'>{sony.view_finder}</span></p>
              <p className='detail-title'>Pixels : <span className='gray'>{sony.pixels}</span></p>
              <p className='detail-title'>Weight : <span className='gray'>{sony.weight}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{sony.price} Ks</span></p>
              <hr />
              <div className='quantity'>
                <span className='qty'>Quantity</span>
                <button className='count-btn' onClick={decrement}>-</button>
                <h5 style={{marginRight:30,fontSize:20}}>{count}</h5>
                <button className='count-btn' onClick={increment}>+</button>
              </div>
              <hr />
              <button className='buy_now' onClick={buyNow}>buy now</button>
              <button className='add_to_cart' onClick={addCart}>add to cart</button>
          </div>
        </div>
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login setUname={setUname} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
      {/* <Link to="/phones/samsungs" className='btn btn-primary back-sam'>Back</Link> */}
    </div>
  )
}

export default SonyDetails