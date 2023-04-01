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
                const res = await axios.get("http://localhost:8800/products/" + Pid) 
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchpros()
        products.map(p => {
            setProd(p)
        })
        if(prod.BrandId==='B14'||prod.BrandId==='B15'){
            setIsTv(true)
        }
        if(prod.BrandId==='B6'||prod.BrandId==='B7'||prod.BrandId==='B8'){
            setIsCam(true)
        }
        if(prod.BrandId==='B9'||prod.BrandId==='B10'||prod.BrandId==='B11'||prod.BrandId==='B12'||prod.BrandId==='B13'){
            setIsPh(true)
        }
        if(prod.BrandId==='B1'||prod.BrandId==='B2'||prod.BrandId==='B3'||prod.BrandId==='B4'||prod.BrandId==='B5'){
            setIsCom(true)
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
        Price:""
    })

    const change = (e) => {
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const btnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/products/" + Pid, pro)
            alert("Update Successful!")
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
                    onChange={change}
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={change}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={change}
                    placeholder={prod.Model}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={change}
                    placeholder={prod.Ram}
                /><br /><br />
                <label htmlFor='cpu'>CPU : </label>
                <input 
                    type='text'
                    name='Cpu'
                    onChange={change}
                    placeholder={prod.Cpu}
                /><br /><br />
                <label htmlFor='gpu'>GPU : </label>
                <input 
                    type='text'
                    name='Gpu'
                    onChange={change}
                    placeholder={prod.Gpu}
                /><br /><br />
                <label htmlFor='display'>Display : </label>
                <input 
                    type='text'
                    name='Display'
                    onChange={change}
                    placeholder={prod.Display}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={change}
                    placeholder={prod.Storage}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={change}
                    placeholder={prod.Price}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={btnclick}>UPDATE</button>
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
                    onChange={change}
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={change}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='Model'
                    onChange={change}
                    placeholder={prod.Model}
                /><br /><br />
                <label htmlFor='size'>Size : </label>
                <input 
                    type='text'
                    name='Size'
                    onChange={change}
                    placeholder={prod.Size}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={change}
                    placeholder={prod.Price}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={btnclick}>UPDATE</button>
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
                    onChange={change}
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={change}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='af-mode'>AF_Mode : </label>
                <input 
                    type='text'
                    name='Af_mode'
                    onChange={change}
                    placeholder={prod.Af_mode}
                /><br /><br />
                <label htmlFor='built-in-flash'>Built_in_Flash : </label>
                <input 
                    type='text'
                    name='Built_in_flash'
                    onChange={change}
                    placeholder={prod.Built_in_flash}
                /><br /><br />
                <label htmlFor='iso'>ISO : </label>
                <input 
                    type='text'
                    name='Iso'
                    onChange={change}
                    placeholder={prod.Iso}
                /><br /><br />
                <label htmlFor='view-finder'>View_Finder : </label>
                <input 
                    type='text'
                    name='View_finder'
                    onChange={change}
                    placeholder={prod.View_finder}
                /><br /><br />
                <label htmlFor='pixels'>Pixels : </label>
                <input 
                    type='text'
                    name='Pixels'
                    onChange={change}
                    placeholder={prod.Pixels}
                /><br /><br />
                <label htmlFor='weight'>Weight : </label>
                <input 
                    type='text'
                    name='Weight'
                    onChange={change}
                    placeholder={prod.Weight}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={change}
                    placeholder={prod.Price}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={btnclick}>UPDATE</button>
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
                    onChange={change}
                    placeholder={prod.Url}
                /><br /><br />
                <label htmlFor='name'>Model : </label>
                <input 
                    type='text'
                    name='Name'
                    onChange={change}
                    placeholder={prod.Name}
                /><br /><br />
                <label htmlFor='front'>Front Camera : </label>
                <input 
                    type='text'
                    name='Front'
                    onChange={change}
                    placeholder={prod.Front}
                /><br /><br />
                <label htmlFor='rear'>Rear Camera : </label>
                <input 
                    type='text'
                    name='Rear'
                    onChange={change}
                    placeholder={prod.Rear}
                /><br /><br />
                <label htmlFor='battery'>Battery : </label>
                <input 
                    type='text'
                    name='Battery'
                    onChange={change}
                    placeholder={prod.Battery}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='Ram'
                    onChange={change}
                    placeholder={prod.Ram}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='Storage'
                    onChange={change}
                    placeholder={prod.Storage}
                /><br /><br />
                <label htmlFor='color'>Color : </label>
                <input 
                    type='text'
                    name='Color'
                    onChange={change}
                    placeholder={prod.Color}
                /><br /><br />
                <label htmlFor='cellular'>Cellular : </label>
                <input 
                    type='text'
                    name='Cellular'
                    onChange={change}
                    placeholder={prod.Cellular}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='Price'
                    onChange={change}
                    placeholder={prod.Price}
                /><br /><br />
                <div className='addbtn'>
                    <button type='button' className='btn btn-danger' style={{width:100,marginRight:20}} onClick={btnclick}>UPDATE</button>
                    <button type='button' className='btn btn-danger' style={{width:100}} onClick={backclick}>BACK</button>
                </div>
            </form>
        }
    </div>
  )
}

export default Update