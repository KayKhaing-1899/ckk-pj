import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { useState,useEffect } from 'react'
import axios from 'axios'

const TvDetails = ({setUname,setSignupEmail,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [tvs,setTvs] = useState([])
  useEffect(() => {
    const fetchtvs = async () => {
      try{
        const res = await axios.get("http://localhost:8800/tvs/" + tvId)
        setTvs(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchtvs()
    tvs.map((t) => {
      setTv(t)
    })
  })
  
  const {tvId} = useParams()
  const [tv,setTv] = useState({})
  // const tv = tvs.find((t) => t.id === tvId)
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
    cartItem.url=tv.Url
    cartItem.model=tv.Name
    cartItem.price=tv.Price
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
      buyItem.id=tv.TvId
      buyItem.url=tv.Url
      buyItem.model=tv.Name
      buyItem.quantity=count
      buyItem.price=tv.Price
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
    <div className='tvdetails'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container tvcontainer'>
          <img src={`/images/${tv.Url}`} alt="detail" className='detail-image' />
          <div className='tvdetail-text'>
              <h2 className='model_name'>{tv.Name}</h2>
              <hr/>
              <p className='detail-title'>Model : <span className='gray'>{tv.Model}</span></p>
              <p className='detail-title'>Size : <span className='gray'>{tv.Size}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{tv.Price} Ks</span></p>
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

export default TvDetails