import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [isCom,setIsCom] = useState(true)
    const [isPh,setIsPh] = useState(false)
    const [isCam,setIsCam] = useState(false)
    const [isTv,setIsTv] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const [cpassword,setCpassword] = useState("")
    const [pro,setPro] = useState({
        id:"",
        url:"",
        name:"",
        model:"",
        ram:"",
        cpu:"",
        gpu:"",
        display:"",
        storage:"",
        front:"",
        rear:"",
        battery:"",
        color:"",
        cellular:"",
        af_mode:"",
        built_in_flash:"",
        iso:"",
        view_finder:"",
        pixels:"",
        weight:"",
        size:"",
        price:"",
        brand:""
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
        try{
            await axios.post("http://localhost:8800/computers", com)
        }catch(err){
            console.log(err)
        }
        // try{
        //     await axios.post("http://localhost:8800/products", pro)
        // } 
        // catch (err) {
        //     console.log(err)
        // }
        // if(brand === 'acer' || brand === 'Acer' || brand === 'ACER'){
        //     try{
        //         await axios.post("http://localhost:8800/acer", com)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'asus' || brand === 'Asus' || brand === 'ASUS'){
        //     try{
        //         await axios.post("http://localhost:8800/asus", com)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'dell' || brand === 'Dell' || brand === 'DELL'){
        //     try{
        //         await axios.post("http://localhost:8800/dell", com)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'hp' || brand === 'Hp' || brand === 'HP'){
        //     try{
        //         await axios.post("http://localhost:8800/hp", com)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'msi' || brand === 'Msi' || brand === 'MSI'){
        //     try{
        //         await axios.post("http://localhost:8800/msi", com)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
    }

    const tvchange = (e) => {
        setTv(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const tvbtnclick = async () => {
        try{
            await axios.post("http://localhost:8800/tvs", tv)
        }catch(err){
            console.log(err)
        }
        // try{
        //     await axios.post("http://localhost:8800/products", pro)
        // } 
        // catch (err) {
        //     console.log(err)
        // }
        // try{
        //     await axios.post("http://localhost:8800/tv", tv)
        // } 
        // catch (err) {
        //     console.log(err)
        // }
    }

    const camchange = (e) => {
        setCam(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const cambtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/cameras", cam)
        }catch(err){
            console.log(err)
        }
        // try{
        //     await axios.post("http://localhost:8800/products", pro)
        // } 
        // catch (err) {
        //     console.log(err)
        // }
        // if(brand === 'sony' || brand === 'Sony' || brand === 'SONY'){
        //     try{
        //         await axios.post("http://localhost:8800/sony", cam)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'fuji' || brand === 'Fuji' || brand === 'fujifilm' || brand === 'Fujifilm' || brand === 'FUJI' || brand === 'FUJIFILM'){
        //     try{
        //         await axios.post("http://localhost:8800/fuji", cam)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'canon' || brand === 'Canon' || brand === 'CANON'){
        //     try{
        //         await axios.post("http://localhost:8800/canon", cam)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
    }

    const phchange = (e) => {
        setPh(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const phbtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/phones", ph)
        }catch(err){
            console.log(err)
        }
        // try{
        //     await axios.post("http://localhost:8800/products", pro)
        // } 
        // catch (err) {
        //     console.log(err)
        // }
        // if(brand === 'samsung' || brand === 'Samsung' || brand === 'SAMSUNG'){
        //     try{
        //         await axios.post("http://localhost:8800/samsung", ph)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'oppo' || brand === 'Oppo' || brand === 'OPPO'){
        //     try{
        //         await axios.post("http://localhost:8800/oppo", ph)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'vivo' || brand === 'Vivo' || brand === 'VIVO'){
        //     try{
        //         await axios.post("http://localhost:8800/vivo", ph)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'huawei' || brand === 'Huawei' || brand === 'HUAWEI'){
        //     try{
        //         await axios.post("http://localhost:8800/huawei", ph)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        // if(brand === 'redmi' || brand === 'Redmi' || brand === 'REDMI'){
        //     try{
        //         await axios.post("http://localhost:8800/redmi", ph)
        //     } 
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
    }

    const [isShow,setIsShow] = useState(false)
    const showPassword = () => {
        setIsShow(!isShow)
    }

    const adminchange = (e) => {
        setAdmin(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const adminbtnclick = async() => {
        if(!admin.name || !admin.pwd || !cpassword) return
        if(admin.pwd===cpassword){
            try{
                await axios.post("http://localhost:8800/admin",admin)
            } catch (err){
                console.log(err)
            }
        } else {
            alert("Your passord doesn't match!")
        }
    }

  return (
    <div className='add_page'>
        <nav className='navbar navbar-expand-lg'>
            <ul className='navbar-nav'>
                <li className='nav-item addtil' onClick={comclick}>Computer</li>
                <li className='nav-item addtil' onClick={phclick}>Phone</li>
                <li className='nav-item addtil' onClick={camclick}>Camera</li>
                <li className='nav-item addtil' onClick={tvclick}>TV</li>
                <li className='nav-item addtil' onClick={adminclick}>Admin</li>
            </ul>
        </nav>
        {isCom && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='ComId'
                    onChange={comchange}
                /><br /><br />
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
                <button type='button' className='btn btn-danger addbtn' onClick={combtnclick}>ADD</button>
            </form>
        }
        {isTv && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='TvId'
                    onChange={tvchange}
                /><br /><br />
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
                <button type='button' className='btn btn-danger addbtn' onClick={tvbtnclick}>ADD</button>
            </form>
        }
        {isCam && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='CamId'
                    onChange={camchange}
                /><br /><br />
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
                <button type='button' className='btn btn-danger addbtn' onClick={cambtnclick}>ADD</button>
            </form>
        }
        {isPh && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='PhId'
                    onChange={phchange}
                /><br /><br />
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
                <button type='button' className='btn btn-danger addbtn' onClick={phbtnclick}>ADD</button>
            </form>
        }
        {isAdmin && 
            <form className='add_form'>
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='name'
                    onChange={adminchange}
                /><br /><br />
                <label htmlFor='password'>Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='pwd'
                    onChange={adminchange}
                /><br /><br />
                <label htmlFor='cpassword'>Confirm Password : </label>
                <input 
                    type={isShow ? 'text' : 'password'}
                    name='cpassword'
                    onChange={(e) => setCpassword(e.target.value)}
                /><br /><br />
                <div className='show_password_checkbox admin_pcheckbox'>
                    <input type='checkbox' style={{width:15,height:15,marginRight:10}} onClick={showPassword} />
                    <p style={{fontSize:16,marginTop:15,color:'gray'}}>Show password</p>
                </div>
                <button type='button' className='btn btn-danger addbtn' onClick={adminbtnclick}>ADD</button>
            </form>
        }
    </div>
  )
}

export default Add