import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const AsusDetails = ({setSignupEmail,setUname,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [asuss,setAsuss] = useState([])
  useEffect(() => {
    const fetchAsuss = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/asus/" + asusId)
        setAsuss(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAsuss()
    asuss.map((ac) => {
      setAsus(ac)
    })
  })
 
  const {asusId} = useParams()
  const [asus,setAsus] = useState({})
  // const asus = asuss.find((as) => as.id === asusId)
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
    cartItem.url=asus.Url
    cartItem.model=`${asus.Name} ${asus.Model}`
    cartItem.price=asus.Price
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
      buyItem.id=asus.ComId
      buyItem.url=asus.Url
      buyItem.model=`${asus.Name} ${asus.Model}`
      buyItem.quantity=count
      buyItem.price=asus.Price
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
          <img src={`/images/${asus.Url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{asus.Name} {asus.Model}</h2>
              <hr/>
              <p className='detail-title'>RAM : <span className='gray'>{asus.Ram}</span></p>
              <p className='detail-title'>CPU : <span className='gray'>{asus.Cpu}</span></p>
              <p className='detail-title'>GPU : <span className='gray'>{asus.Gpu}</span></p>
              <p className='detail-title'>Display : <span className='gray'>{asus.Display}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{asus.Storage}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{asus.Price} Ks</span></p>
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
        <Signup signupEmail={signupEmail} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} setLoginDisplay={setLoginDisplay} />
      </div>
      {/* <Link to="/phones/samsungs" className='btn btn-primary back-sam'>Back</Link> */}
    </div>
  )
}

export default AsusDetails