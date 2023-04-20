import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import React from 'react'

const Main = ({notFound,setNotFound,wrong,setWrong,setUname,setUemail,setSearchTerm,uname,isLogin,setIsLogin,setLoginDisplay,setSignupEmail,setSignupDisplay}) => {
  return (
    <>
      <Navbar notFound={notFound} setNotFound={setNotFound} wrong={wrong} setWrong={setWrong} setUname={setUname} setUemail={setUemail} setSearchTerm={setSearchTerm} uname={uname} isLogin={isLogin} setIsLogin={setIsLogin} setLoginDisplay={setLoginDisplay} />
      <Outlet />
      <Footer isLogin={isLogin} setSignupEmail={setSignupEmail} setSignupDisplay={setSignupDisplay} />
    </>
  )
}

export default Main