import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'

const VivoDetails = ({setUname,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [vivos,setVivos] = useState([])
  useEffect(() => {
    const fetchvivos = async () => {
      try{
        const res = await axios.get("http://localhost:8800/vivo/" + vivId)
        setVivos(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchvivos()
    vivos.map((ac) => {
      setViv(ac)
    })
  })
  
  const {vivId} = useParams()
  const [viv,setViv] = useState({})
  // const viv = vivos.find((vi) => vi.id === vivId)
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
    cartItem.url=viv.url
    cartItem.model=viv.name
    cartItem.price=viv.price
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
      buyItem.id=viv.id
      buyItem.url=viv.url
      buyItem.model=viv.name
      buyItem.quantity=count
      buyItem.price=viv.price
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
          <img src={`/images/${viv.url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{viv.name}</h2>
              <hr/>
              <p className='detail-title'>Color : <span className='gray'>{viv.color}</span></p>
              <p className='detail-title'>Front Camera : <span className='gray'>{viv.front}</span></p>
              <p className='detail-title'>Rear Camera : <span className='gray'>{viv.rear}</span></p>
              <p className='detail-title'>Battery : <span className='gray'>{viv.battery}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{viv.storage}</span></p>
              <p className='detail-title'>RAM : <span className='gray'>{viv.ram}</span></p>
              <p className='detail-title'>Cellular : <span className='gray'>{viv.cellular}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{viv.price} Ks</span></p>
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

export default VivoDetails