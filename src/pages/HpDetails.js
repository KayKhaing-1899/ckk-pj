import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const HpDetails = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [hps,setHps] = useState([])
  useEffect(() => {
    const fetchhps = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/hp/" + hpId)
        setHps(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchhps()
    hps.map((h) => {
      setHp(h)
    })
  })
 
  const {hpId} = useParams()
  const [hp,setHp] = useState({})
  // const hp = hps.find((h) => h.id === hpId)
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
    cartItem.url=hp.Url
    cartItem.model=`${hp.Name} ${hp.Model}`
    cartItem.price=hp.Price
    let insert = true
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
      buyItem.id=hp.ComId
      buyItem.url=hp.Url
      buyItem.model=`${hp.Name} ${hp.Model}`
      buyItem.quantity=count
      buyItem.price=hp.Price
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
    navigate('/computers/hp')
  }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${hp.Url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{hp.Name} {hp.Model}</h2>
              <hr/>
              <p className='detail-title'>RAM : <span className='gray'>{hp.Ram}</span></p>
              <p className='detail-title'>CPU : <span className='gray'>{hp.Cpu}</span></p>
              <p className='detail-title'>GPU : <span className='gray'>{hp.Gpu}</span></p>
              <p className='detail-title'>Display : <span className='gray'>{hp.Display}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{hp.Storage}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{hp.Price} Ks</span></p>
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
    </div>
  )
}

export default HpDetails