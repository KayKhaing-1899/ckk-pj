import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AcerDetails = ({setUname,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay,signupEmail,setSignupEmail,signupDisplay,setSignupDisplay}) => {

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

  const [acers,setAcers] = useState([])
  useEffect(() => {
    const fetchAcers = async () => {
      try{
        const res = await axios.get("http://localhost:8800/computers/acer/" + acerId)
        setAcers(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAcers()
    acers.map((ac) => {
      setAcer(ac)
    })
  })

  const {acerId} = useParams()
  const [acer,setAcer] = useState({})
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
    cartItem.url=acer.Url
    cartItem.model=`${acer.Name} ${acer.Model}`
    cartItem.price=acer.Price
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
      buyItem.id=acer.ComId
      buyItem.url=acer.Url
      buyItem.model=`${acer.Name} ${acer.Model}`
      buyItem.quantity=count
      buyItem.price=acer.Price
      setBuyItem((item) => (
        {
          ...item
        }
      ))
      navigate('/buynow')
      console.log(buyItem)
      setCount(0)
    }
  }

  // const [initial,setInitial] = useState(true)
  // const [imageUrl,setImageUrl] = useState("")
  // const imageclick = (imgurl) => {
  //   setImageUrl(imgurl)
  //   setInitial(false)
  // }

  return (
    <div className='details'>
      <div className={(loginDisplay || signupDisplay) && 'detail_container_hide'}>
        <div className='detail-container'>
          <img src={`/images/${acer.Url}`} alt="detail" className='detail-image' />
          {/* <div className='image_container'>
            {initial ? 
              <img src={`/images/${acer.url}`} alt="detail" className='image_body' /> : 
              <img src={`/images/${imageUrl}`} alt="detail" className='image_body' />
            }
            <div className='image_footer_container'>
              <img src="/images/acer2.jpg" alt="detail" className='image_footer' onClick={() => imageclick("acer2.jpg")} />
              <img src="/images/acer3.jpg" alt="detail" className='image_footer' onClick={() => imageclick("acer3.jpg")} />
              <img src="/images/acer4.jpg" alt="detail" className='image_footer' onClick={() => imageclick("acer4.jpg")} />
            </div>
          </div> */}
          <div className='detail-text'>
            <h2 className='model_name'>{acer.Name} {acer.Model}</h2>
            <hr/>
            <p className='detail-title'>RAM : <span className='gray'>{acer.Ram}</span></p>
            <p className='detail-title'>CPU : <span className='gray'>{acer.Cpu}</span></p>
            <p className='detail-title'>GPU : <span className='gray'>{acer.Gpu}</span></p>
            <p className='detail-title'>Display : <span className='gray'>{acer.Display}</span></p>
            <p className='detail-title'>Storage : <span className='gray'>{acer.Storage}</span></p>
            <p className='detail-title'>Price : <span className='gray'>{acer.Price} Ks</span></p>
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

export default AcerDetails