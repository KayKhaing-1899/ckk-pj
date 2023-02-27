import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { useEffect,useState } from 'react'
import axios from 'axios'

const DellDetails = ({setUname,signupEmail,signupDisplay,setSignupDisplay,count,setCount,cartItem,setCartItem,buyItem,setBuyItem,setIsLogin,loginDisplay,setLoginDisplay}) => {

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

  const [dells,setDells] = useState([])
  useEffect(() => {
    const fetchDells = async () => {
      try{
        const res = await axios.get("http://localhost:8800/dell/" + dellId)
        setDells(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchDells()
    dells.map((d) => {
      setDell(d)
    })
  }) 
  const {dellId} = useParams()
  const [dell,setDell] = useState({})
  // const dell = dells.find((del) => del.id === dellId)
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
    cartItem.url=dell.url
    cartItem.model=`${dell.name} ${dell.model}`
    cartItem.price=dell.price
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
      buyItem.id=dell.id
      buyItem.url=dell.url
      buyItem.model=`${dell.name} ${dell.model}`
      buyItem.quantity=count
      buyItem.price=dell.price
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
          <img src={`/images/${dell.url}`} alt="detail" className='detail-image' />
          <div className='detail-text'>
              <h2 className='model_name'>{dell.name} {dell.model}</h2>
              <hr/>
              <p className='detail-title'>RAM : <span className='gray'>{dell.ram}</span></p>
              <p className='detail-title'>CPU : <span className='gray'>{dell.cpu}</span></p>
              <p className='detail-title'>GPU : <span className='gray'>{dell.gpu}</span></p>
              <p className='detail-title'>Display : <span className='gray'>{dell.display}</span></p>
              <p className='detail-title'>Storage : <span className='gray'>{dell.storage}</span></p>
              <p className='detail-title'>Price : <span className='gray'>{dell.price} Ks</span></p>
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

export default DellDetails