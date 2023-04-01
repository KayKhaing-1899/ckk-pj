import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'

const Opdetails = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSignupEmail,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [oppos,setOppos] = useState([])
  useEffect(() => {
    const fetchoppos = async () => {
      try{
        const res = await axios.get("http://localhost:8800/phones/oppo/" + opId)
        setOppos(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchoppos()
    oppos.map((op) => {
      setOp(op)
    })
  })
  
  const {opId} = useParams()
  const [op,setOp] = useState({})
  // const op = oppos.find((op) => op.id === opId)
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
    // cartItem.url=op.Url
    // cartItem.model=op.Name
    // cartItem.price=op.Price
    let insert = true
    cartItem.CartId=cart.length+1
    cartItem.Pid=opId
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
      buyItem.id=op.Pid
      buyItem.url=op.Url
      buyItem.model=op.Name
      buyItem.quantity=count
      buyItem.price=op.Price
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
    navigate('/phones/oppos')
  }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${op.Url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{op.Name}</h2>
              <hr/>
              <p className='detail-title'>Color : <span className='gray'>{op.Color}</span></p>
              <p className='detail-title'>Front Camera : <span className='gray'>{op.Front}</span></p>
              <p className='detail-title'>Rear Camera : <span className='gray'>{op.Rear}</span></p>
              <p className='detail-title'>Battery : <span className='gray'>{op.Battery}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{op.Storage}</span></p>
              <p className='detail-title'>RAM : <span className='gray'>{op.Ram}</span></p>
              <p className='detail-title'>Cellular : <span className='gray'>{op.Cellular}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{op.Price} Ks</span></p>
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

export default Opdetails