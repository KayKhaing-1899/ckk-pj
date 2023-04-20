import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Samsung from "./pages/Samsung";
import Oppo from "./pages/Oppo";
import Samdetails from "./pages/Samdetails"
import Opdetails from "./pages/Opdetails"
import Dell from "./pages/Dell"
import Acer from "./pages/Acer"
import Asus from "./pages/Asus"
import Msi from "./pages/Msi"
import Hp from "./pages/Hp"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart";
import Sony from "./pages/Sony";
import Canon from "./pages/Canon";
import Fuji from "./pages/Fuji";
import AcerDetails from "./pages/AcerDetails";
import AsusDetails from "./pages/AsusDetails";
import DellDetails from "./pages/DellDetails";
import MsiDetails from "./pages/MsiDetails";
import HpDetails from "./pages/HpDetails";
import SonyDetails from "./pages/SonyDetails";
import CanonDetails from "./pages/CanonDetails";
import FujiDetails from "./pages/FujiDetails";
import BuyNow from "./pages/BuyNow";
import Vivo from "./pages/Vivo";
import VivoDetails from "./pages/VivoDetails";
import Redmi from "./pages/Redmi"
import RedmiDetails from "./pages/RedmiDetails";
import Huawei from "./pages/Huawei"
import HuaweiDetails from "./pages/HuaweiDetails";
import Cartorder from "./pages/Cartorder";
import Tv from "./pages/Tv";
import TvDetails from "./pages/TvDetails";
import Feedbacks from "./pages/Feedbacks";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import Results from "./pages/Results";
import Admin from "./pages/Admin";
import Admin_home from "./pages/Admin_home";
import Products from "./pages/Products";
import Update from "./pages/Update";
import Delivered from "./pages/Delivered";
import Admin_Update from "./pages/Admin_Update";

function App() {

  const [count,setCount] = useState(0)
  const [isLogin,setIsLogin] = useState(false)
  const [cartItem,setCartItem] = useState({id:0,url:"",model:"",price:""})
  const [buyItem,setBuyItem] = useState({id:"",url:"",model:"",quantity:0,price:""})
  const [cartTotal,setCartTotal] = useState(0)
  const [loginDisplay,setLoginDisplay] = useState(false)
  const [signupDisplay,setSignupDisplay] = useState(false)
  const [signupEmail,setSignupEmail] = useState("")
  const [uname,setUname] = useState("")
  const [uemail,setUemail] = useState("")
  const [searchTerm,setSearchTerm] = useState("")
  const [temp,setTemp] = useState([])
  const [adm,setAdm] = useState({
    id:0,
    name:"",
    pwd:""
  })
  const [notFound, setNotFound] = useState(false)
  const [wrong, setWrong] = useState(false)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setNotFound={setNotFound} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setSearchTerm={setSearchTerm} uname={uname} isLogin={isLogin} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} />} >
          <Route 
            index 
            element={<Home notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} />} 
          />
          <Route 
            path="/phones/samsungs" 
            element={<Samsung notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />}
          />
          <Route 
            path="/phones/samsungs/:samId" 
            element={<Samdetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/phones/oppos" 
            element={<Oppo notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />}
          />
          <Route 
            path="/phones/oppos/:opId" 
            element={<Opdetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/phones/vivos" 
            element={<Vivo notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />}
          />
          <Route 
            path="/phones/vivos/:vivId" 
            element={<VivoDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/phones/redmis" 
            element={<Redmi notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/phones/redmis/:redId" 
            element={<RedmiDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/phones/huaweis" 
            element={<Huawei notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />}
          />
          <Route 
            path="/phones/huaweis/:huaweiId" 
            element={<HuaweiDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/computers/dell" 
            element={<Dell notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/computers/dell/:dellId" 
            element={<DellDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/computers/acer" 
            element={<Acer notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/computers/acer/:acerId" 
            element={<AcerDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/computers/asus" 
            element={<Asus notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/computers/asus/:asusId" 
            element={<AsusDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/computers/msi" 
            element={<Msi notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/computers/msi/:msiId" 
            element={<MsiDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/computers/hp" 
            element={<Hp notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/computers/hp/:hpId" 
            element={<HpDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/cameras/sony" 
            element={<Sony notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/cameras/sony/:sonyId" 
            element={<SonyDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/cameras/canon" 
            element={<Canon notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/cameras/canon/:canonId" 
            element={<CanonDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/cameras/fuji" 
            element={<Fuji notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/cameras/fuji/:fujiId" 
            element={<FujiDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/tvs" 
            element={<Tv notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/tvs/:tvId" 
            element={<TvDetails notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} count={count} setCount={setCount} cartItem={cartItem} setCartItem={setCartItem} buyItem={buyItem} setBuyItem={setBuyItem} />} 
          />
          <Route 
            path="/contact" 
            element={<Contact notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} uname={uname} uemail={uemail} setUname={setUname} setUemail={setUemail} isLogin={isLogin} setIsLogin={setIsLogin} signupEmail={signupEmail} setSignupEmail={setSignupEmail} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} temp={temp} setCartTotal={setCartTotal} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/buynow" 
            element={<BuyNow notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} buyItem={buyItem} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
          <Route 
            path="/cartorder" 
            element={<Cartorder notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} temp={temp} setTemp={setTemp} cartTotal={cartTotal} setUname={setUname} setUemail={setUemail} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupDisplay={signupDisplay} setSignupDisplay={setSignupDisplay} setIsLogin={setIsLogin} loginDisplay={loginDisplay} setLoginDisplay={setLoginDisplay} />} 
          />
        </Route>
        <Route path="/results" element={<Results searchTerm={searchTerm} />} />
        <Route path="/admin" element={<Admin setAdm={setAdm} />} />
        <Route path="/ad_home" element={<Admin_home adm={adm} />} />
        {/* <Route path="/update/:adminId" element={<Admin_Update />} /> */}
        <Route path="/ad_home/prods" element={<Products />} />
        <Route path="/ad_home/add" element={<Add />} />
        <Route path="/update/:Pid" element={<Update />} />
        <Route path="/ad_home/orders" element={<Orders />} />
        <Route path="/ad_home/delivered" element={<Delivered />} />
        <Route path="/ad_home/feedbacks" element={<Feedbacks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
