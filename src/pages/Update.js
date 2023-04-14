import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Update = () => {

    const [products,setProducts] = useState([])
    const [prod,setProd] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const fetchpros = async () => {
            try{
                const res = await axios.get("http://localhost:8800/products/"+Pid) 
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchpros()
        products.map(p => {
            setProd(p)
        })
        if(prod.Brand==='lg'){
            setIsTv(true)
        }
        if(prod.Brand==='canon'||prod.Brand==='sony'||prod.Brand==='fujifilm'){
            setIsCam(true)
        }
        if(prod.Brand==='acer'||prod.Brand==='asus'||prod.Brand==='dell'||prod.Brand==='hp'||prod.Brand==='msi'){
            setIsCom(true)
        }
        if(prod.Brand==='oppo'||prod.Brand==='vivo'||prod.Brand==='redmi'||prod.Brand==='huawei'){
            setIsPh(true)
        }
        if(prod.Brand==='samsung'){
            if(prod.Size===""){
                setIsPh(true)
            }else{
                setIsTv(true)
            }
        }
    })

    const current = useLocation()
    const Pid = current.pathname.split('/')[2]
    const [isCom,setIsCom] = useState(false)
    const [isPh,setIsPh] = useState(false)
    const [isCam,setIsCam] = useState(false)
    const [isTv,setIsTv] = useState(false)
    const [pro,setPro] = useState({
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
        Url:"",
        Name:"",
        Model:"",
        Size:"",
        Price:"",
        Brand:""
    })
    const [cam,setCam] = useState({
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

    const comchange = (e) => {
        setCom(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const combtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.out("http://localhost:8800/computers/"+Pid, com)
            await axios.put("http://localhost:8800/products/"+Pid, pro)
        }catch(err){
            console.log(err)
        }
    }

    const tvchange = (e) => {
        setTv(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const tvbtnclick = async () => {
        try{
            await axios.put("http://localhost:8800/tvs/"+Pid, tv)
            await axios.put("http://localhost:8800/products/"+Pid, pro)
        }catch(err){
            console.log(err)
        }
    }

    const camchange = (e) => {
        setCam(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
        console.log(cam)
        console.log(pro)
    }

    const cambtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/cameras/"+Pid, cam)
            await axios.put("http://localhost:8800/products/"+Pid, pro)
        }catch(err){
            console.log(err)
        }
    }

    const phchange = (e) => {
        setPh(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const phbtnclick = async (e) => {
        e.preventDefault()
        console.log(pro)
        try{
            await axios.put("http://localhost:8800/phones/"+Pid, ph)
            await axios.put("http://localhost:8800/products/"+Pid, pro)
        }catch(err){
            console.log(err)
        }
    }

    const backclick = () => {
        navigate("/ad_home/prods")
    }

  return (
    <div className='add_page'>
        {isCom && 
            <form className='add_form'>
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='Url'
                    onChange={comchange}
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={comchange}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={comchange}
                    placeholder={prod.Model}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={comchange}
                    placeholder={prod.Ram}
                /><br /><br />
                <label htmlFor='cpu'>CPU : </label>
                <input 
                    type='text'
                    name='Cpu'
                    onChange={comchange}
                    placeholder={prod.Cpu}
                /><br /><br />
                <label htmlFor='gpu'>GPU : </label>
                <input 
                    type='text'
                    name='Gpu'
                    onChange={comchange}
                    placeholder={prod.Gpu}
                /><br /><br />
                <label htmlFor='display'>Display : </label>
                <input 
                    type='text'
                    name='Display'
                    onChange={comchange}
                    placeholder={prod.Display}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={comchange}
                    placeholder={prod.Storage}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={comchange}
                    placeholder={prod.Price}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={comchange}
                    placeholder={prod.Brand}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={combtnclick}>UPDATE</button>
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
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={tvchange}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={tvchange}
                    placeholder={prod.Model}
                /><br /><br />
                <label htmlFor='size'>Size : </label>
                <input 
                    type='text'
                    name='Size'
                    onChange={tvchange}
                    placeholder={prod.Size}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={tvchange}
                    placeholder={prod.Price}
                /><br /><br />
                <label htmlFor='brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={tvchange}
                    placeholder={prod.Brand}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={tvbtnclick}>UPDATE</button>
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
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={camchange}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='af-mode'>AF_Mode : </label>
                <input 
                    type='text'
                    name='Af_mode'
                    onChange={camchange}
                    placeholder={prod.Af_mode}
                /><br /><br />
                <label htmlFor='built-in-flash'>Built_in_Flash : </label>
                <input 
                    type='text'
                    name='Built_in_flash'
                    onChange={camchange}
                    placeholder={prod.Built_in_flash}
                /><br /><br />
                <label htmlFor='iso'>ISO : </label>
                <input 
                    type='text'
                    name='Iso'
                    onChange={camchange}
                    placeholder={prod.Iso}
                /><br /><br />
                <label htmlFor='view-finder'>View_Finder : </label>
                <input 
                    type='text'
                    name='View_finder'
                    onChange={camchange}
                    placeholder={prod.View_finder}
                /><br /><br />
                <label htmlFor='pixels'>Pixels : </label>
                <input 
                    type='text'
                    name='Pixels'
                    onChange={camchange}
                    placeholder={prod.Pixels}
                /><br /><br />
                <label htmlFor='weight'>Weight : </label>
                <input 
                    type='text'
                    name='Weight'
                    onChange={camchange}
                    placeholder={prod.Weight}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={camchange}
                    placeholder={prod.Price}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={camchange}
                    placeholder={prod.Brand}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={cambtnclick}>UPDATE</button>
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
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Model : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={phchange}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='front'>Front Camera : </label>
                <input 
                    type='text'
                    name='Front'
                    onChange={phchange}
                    placeholder={prod.Front}
                /><br /><br />
                <label htmlFor='rear'>Rear Camera : </label>
                <input 
                    type='text'
                    name='Rear'
                    onChange={phchange}
                    placeholder={prod.Rear}
                /><br /><br />
                <label htmlFor='battery'>Battery : </label>
                <input 
                    type='text'
                    name='Battery'
                    onChange={phchange}
                    placeholder={prod.Battery}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={phchange}
                    placeholder={prod.Ram}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={phchange}
                    placeholder={prod.Storage}
                /><br /><br />
                <label htmlFor='color'>Color : </label>
                <input 
                    type='text'
                    name='Color'
                    onChange={phchange}
                    placeholder={prod.Color}
                /><br /><br />
                <label htmlFor='cellular'>Cellular : </label>
                <input 
                    type='text'
                    name='Cellular'
                    onChange={phchange}
                    placeholder={prod.Cellular}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={phchange}
                    placeholder={prod.Price}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='Brand'
                    onChange={phchange}
                    placeholder={prod.Brand}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={phbtnclick}>UPDATE</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
    </div>
  )
}

export default Update