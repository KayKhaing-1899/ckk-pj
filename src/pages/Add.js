import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [arr,setArr] = useState([])
    const [obj,setObj] = useState({})
    useEffect(()=>{
        const fetchcount = async () => {
            try{
                const res = await axios.get("http://localhost:8800/ms/count")
                setArr(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchcount()
        arr.map(ar => {
            setObj(ar)
        })
    })

    const [isCom,setIsCom] = useState(true)
    const [isPh,setIsPh] = useState(false)
    const [isCam,setIsCam] = useState(false)
    const [isTv,setIsTv] = useState(false)
    const [cpassword,setCpassword] = useState("")
    const [isAdmin,setIsAdmin] = useState(false)
    const [pro,setPro] = useState({
        Pid:"",
        Url:"",
        Name:"",
        Model:"",
        Ram:"",
        Cpu:"",
        Gpu:"",
        Display:"",
        Storage:"",
        Front:"",
        Rear:"",
        Battery:"",
        Color:"",
        Cellular:"",
        Af_mode:"",
        Built_in_flash:"",
        Iso:"",
        View_finder:"",
        Pixels:"",
        Weight:"",
        Size:"",
        Price:"",
        Brand:""
    })
    const [com,setCom] = useState({
        ComId:"",
        Url:"",
        Name:"",
        Model:"",
        Ram:"",
        Cpu:"",
        Gpu:"",
        Display:"",
        Storage:"",
        Price:"",
        Brand:"",
    })
    const [tv,setTv] = useState({
        TvId:"",
        Url:"",
        Name:"",
        Model:"",
        Size:"",
        Price:"",
        Brand:""
    })
    const [cam,setCam] = useState({
        CamId:"",
        Url:"",
        Name:"",
        Af_mode:"",
        Built_in_flash:"",
        Iso:"",
        View_finder:"",
        Pixels:"",
        Weight:"",
        Price:"",
        Brand:"",
    })
    const [ph,setPh] = useState({
        PhId:"",
        Url:"",
        Name:"",
        Front:"",
        Rear:"",
        Battery:"",
        Ram:"",
        Storage:"",
        Color:"",
        Cellular:"",
        Price:"",
        Brand:""
    })
    const [admin,setAdmin] = useState({
        name:"",
        pwd:""
    })

    const comclick = () => {
        setIsCom(true)
        setIsCam(false)
        setIsPh(false)
        setIsTv(false)
        setIsAdmin(false)
    }

    const camclick = () => {
        setIsCom(false)
        setIsCam(true)
        setIsPh(false)
        setIsTv(false)
        setIsAdmin(false)
    }

    const phclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(true)
        setIsTv(false)
        setIsAdmin(false)
    }

    const tvclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(false)
        setIsTv(true)
        setIsAdmin(false)
    }

    const adminclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(false)
        setIsTv(false)
        setIsAdmin(true)
    }

    const comchange = (e) => {
        setCom(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const combtnclick = async (e) => {
        e.preventDefault()
        com.ComId=obj.count
        pro.Pid=obj.count
        console.log(com)
        console.log(pro)
        try{
            await axios.post("http://localhost:8800/computers", com)
        }catch(err){
            console.log(err)
        }
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        try{
            await axios.put("http://localhost:8800/ms/count")
        } 
        catch (err) {
            console.log(err)
        }
    }

    const tvchange = (e) => {
        setTv(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const tvbtnclick = async () => {
        tv.TvId=obj.count
        pro.Pid=obj.count
        try{
            await axios.post("http://localhost:8800/tvs", tv)
        }catch(err){
            console.log(err)
        }
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        try{
            await axios.put("http://localhost:8800/ms/count")
        } 
        catch (err) {
            console.log(err)
        }
    }

    const camchange = (e) => {
        setCam(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const cambtnclick = async (e) => {
        e.preventDefault()
        cam.CamId=obj.count
        pro.Pid=obj.count
        try{
            await axios.post("http://localhost:8800/cameras", cam)
        }catch(err){
            console.log(err)
        }
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        try{
            await axios.put("http://localhost:8800/ms/count")
        } 
        catch (err) {
            console.log(err)
        }
    }

    const phchange = (e) => {
        setPh(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const phbtnclick = async (e) => {
        e.preventDefault()
        ph.PhId=obj.count
        pro.Pid=obj.count
        try{
            await axios.post("http://localhost:8800/phones", ph)
        }catch(err){
            console.log(err)
        }
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        try{
            await axios.put("http://localhost:8800/ms/count")
        } 
        catch (err) {
            console.log(err)
        }
    }

    const [isShow,setIsShow] = useState(false)
    const showPassword = () => {
        setIsShow(!isShow)
    }

    const adminchange = (e) => {
        setAdmin(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const adminbtnclick =async  () => {
        if(!admin.name || !admin.pwd || !cpassword) return
        if(admin.pwd === cpassword){
            try{
                await axios.post("http://localhost:8800/ms/admin",admin)
            } catch (err){
                console.log(err)
            }
            alert("Insert successful!")
            setAdmin(() => ({name:"",pwd:""}))
            setCpassword("")
        }else{
            alert("Your password doesn't match!")
        }
    }

    const navigate = useNavigate()
    const backclick = () => {
        navigate('/ad_home')
    }

  return (
    <div className='add_page'>
        <nav className='navbar navbar-expand-lg add_navbar'>
            <ul className='navbar-nav add_navbar_nav'>
                <li className='nav-item addtil' onClick={comclick}>Computer</li>
                <li className='nav-item addtil' onClick={phclick}>Phone</li>
                <li className='nav-item addtil' onClick={camclick}>Camera</li>
                <li className='nav-item addtil' onClick={tvclick}>TV</li>
                <li className='nav-item addtil' onClick={adminclick}>Admin</li>
            </ul>
        </nav>
        {isCom && 
            <form className='add_form'>
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='Url'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='cpu'>CPU : </label>
                <input 
                    type='text'
                    name='Cpu'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='gpu'>GPU : </label>
                <input 
                    type='text'
                    name='Gpu'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='display'>Display : </label>
                <input 
                    type='text'
                    name='Display'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={comchange}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={combtnclick}>ADD</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
        {isTv && 
            <form className='add_form'>
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='Url'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='size'>Size : </label>
                <input 
                    type='text'
                    name='Size'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={tvchange}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={tvbtnclick}>ADD</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
        {isCam && 
            <form className='add_form'>
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='Url'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='af-mode'>AF_Mode : </label>
                <input 
                    type='text'
                    name='Af_mode'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='built-in-flash'>Built_in_Flash : </label>
                <input 
                    type='text'
                    name='Built_in_flash'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='iso'>ISO : </label>
                <input 
                    type='text'
                    name='Iso'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='view-finder'>View_Finder : </label>
                <input 
                    type='text'
                    name='View_finder'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='pixels'>Pixels : </label>
                <input 
                    type='text'
                    name='Pixels'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='weight'>Weight : </label>
                <input 
                    type='text'
                    name='Weight'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={camchange}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={cambtnclick}>ADD</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
        {isPh && 
            <form className='add_form'>
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='Url'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='name'>Model : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='front'>Front Camera : </label>
                <input 
                    type='text'
                    name='Front'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='rear'>Rear Camera : </label>
                <input 
                    type='text'
                    name='Rear'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='battery'>Battery : </label>
                <input 
                    type='text'
                    name='Battery'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='color'>Color : </label>
                <input 
                    type='text'
                    name='Color'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='cellular'>Cellular : </label>
                <input 
                    type='text'
                    name='Cellular'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={phchange}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={phbtnclick}>ADD</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
        {isAdmin && 
            <form className='add_form'>
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='name'
                    value={admin.name}
                    onChange={adminchange}
                /><br /><br />
                <label htmlFor='password'>Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='pwd'
                    value={admin.pwd}
                    onChange={adminchange}
                /><br /><br />
                <label htmlFor='cpassword'>Confirm Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='cpassword'
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                /><br /><br />
                <div className='show_password_checkbox admin_pcheckbox'>
                    <input type='checkbox' style={{width:15,height:15,marginRight:10}} onClick={showPassword} />
                    <p style={{fontSize:16,marginTop:15,color:'gray'}}>Show password</p>
                </div>
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={adminbtnclick}>ADD</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
    </div>
  )
}

export default Add