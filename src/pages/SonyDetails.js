import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'

const SonyDetails = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

  const [cart,setCart] = useState([])
  useEffect(() => {
    const fetchcart = async () => {
      try{
        const res = await axios.get("http://localhost:8800/ms/cart")
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
        const res = await axios.get("http://localhost:8800/cameras/sony/" + sonyId)
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
    // cartItem.id=cartItem.id+1
    // cartItem.url=sony.Url
    // cartItem.model=sony.Name
    // cartItem.price=sony.Price
    let insert=true
    cartItem.CartId=cart.length+1
    cartItem.Pid=sonyId
    setCartItem((item) => (
      {
        ...item
      }
    ))
    if(cart.length !== 0) {
      cart.forEach(c => {
        if(c.Pid===cartItem.Pid){
          insert=false
        }
      })
    }
    if(insert){
      try{
        await axios.post("http://localhost:8800/ms/cart", cartItem)
      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Item is already added to cart.")
    }
  }

  const buyNow = () => {
    if(count !== 0) {
      buyItem.id=sony.Pid
      buyItem.url=sony.Url
      buyItem.model=sony.Name
      buyItem.quantity=count
      buyItem.price=sony.Price
      setBuyItem((item) => (
        {
          ...item
        }
      ))
      navigate('/buynow')
      setCount(0)
    }
  }

  const back = () => {
    navigate('/cameras/sony')
  }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${sony.Url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{sony.Name}</h2>
              <hr/>
              <p className='detail-title'>AF Mode : <span className='gray'>{sony.Af_mode}</span></p>
              <p className='detail-title'>Built_in_Flash : <span className='gray'>{sony.Built_in_flash}</span></p>
              <p className='detail-title'>ISO : <span className='gray'>{sony.Iso}</span></p>
              <p className='detail-title'>View_Finder : <span className='gray'>{sony.View_finder}</span></p>
              <p className='detail-title'>Pixels : <span className='gray'>{sony.Pixels}</span></p>
              <p className='detail-title'>Weight : <span className='gray'>{sony.Weight}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{sony.Price} Ks</span></p>
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
              <button className='back' onClick={back}>back</button>
          </div>
        </div>
      </div>
      <div className={!loginDisplay && 'login_hide'}>
        <Login notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
      {/* <Link to="/phones/samsungs" className='btn btn-primary back-sam'>Back</Link> */}
    </div>
  )
}

export default SonyDetails