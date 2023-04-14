import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const RedmiDetails = ({setUname,setUemail,setSignupEmail,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [redmis,setRedmis] = useState([])
  useEffect(() => {
    const fetchredmis = async () => {
      try{
        const res = await axios.get("http://localhost:8800/phones/redmi/" + redId)
        setRedmis(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchredmis()
    redmis.map((ac) => {
      setRed(ac)
    })
  })
  
  const {redId} = useParams()
  const [red,setRed] = useState({})
  // const red = redmis.find((r) => r.id === redId)
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
    cartItem.url=red.Url
    cartItem.model=red.Name
    cartItem.price=red.Price
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
      buyItem.id=red.PhId
      buyItem.url=red.Url
      buyItem.model=red.Name
      buyItem.quantity=count
      buyItem.price=red.Price
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
    navigate('/phones/redmis')
  }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${red.Url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{red.Name}</h2>
              <hr/>
              <p className='detail-title'>Color : <span className='gray'>{red.Color}</span></p>
              <p className='detail-title'>Front Camera : <span className='gray'>{red.Front}</span></p>
              <p className='detail-title'>Rear Camera : <span className='gray'>{red.Rear}</span></p>
              <p className='detail-title'>Battery : <span className='gray'>{red.Battery}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{red.Storage}</span></p>
              <p className='detail-title'>RAM : <span className='gray'>{red.Ram}</span></p>
              <p className='detail-title'>Cellular : <span className='gray'>{red.Cellular}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{red.Price} Ks</span></p>
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
        <Login setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupDisplay={setSignupDisplay} />
      </div>
      <div className={!signupDisplay && 'login_hide'}>
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
      {/* <Link to="/phones/samsungs" className='btn btn-primary back-sam'>Back</Link> */}
    </div>
  )
}

export default RedmiDetails