import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [isCom,setIsCom] = useState(true)
    const [isPh,setIsPh] = useState(false)
    const [isCam,setIsCam] = useState(false)
    const [isTv,setIsTv] = useState(false)
    const [brand,setBrand] = useState("")
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
        price:""
    })
    const [com,setCom] = useState({
        id:"",
        url:"",
        name:"",
        model:"",
        ram:"",
        cpu:"",
        gpu:"",
        display:"",
        storage:"",
        price:""
    })
    const [tv,setTv] = useState({
        id:"",
        url:"",
        name:"",
        model:"",
        size:"",
        price:""
    })
    const [cam,setCam] = useState({
        id:"",
        url:"",
        name:"",
        af_mode:"",
        built_in_flash:"",
        iso:"",
        view_finder:"",
        pixels:"",
        weight:"",
        price:""
    })
    const [ph,setPh] = useState({
        id:"",
        url:"",
        name:"",
        front:"",
        rear:"",
        battery:"",
        ram:"",
        storage:"",
        color:"",
        cellular:"",
        price:""
    })

    const comclick = () => {
        setIsCom(true)
        setIsCam(false)
        setIsPh(false)
        setIsTv(false)
    }

    const camclick = () => {
        setIsCom(false)
        setIsCam(true)
        setIsPh(false)
        setIsTv(false)
    }

    const phclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(true)
        setIsTv(false)
    }

    const tvclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(false)
        setIsTv(true)
    }

    const comchange = (e) => {
        setCom(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const combtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        if(brand === 'acer' || brand === 'Acer' || brand === 'ACER'){
            try{
                await axios.post("http://localhost:8800/acer", com)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'asus' || brand === 'Asus' || brand === 'ASUS'){
            try{
                await axios.post("http://localhost:8800/asus", com)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'dell' || brand === 'Dell' || brand === 'DELL'){
            try{
                await axios.post("http://localhost:8800/dell", com)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'hp' || brand === 'Hp' || brand === 'HP'){
            try{
                await axios.post("http://localhost:8800/hp", com)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'msi' || brand === 'Msi' || brand === 'MSI'){
            try{
                await axios.post("http://localhost:8800/msi", com)
            } 
            catch (err) {
                console.log(err)
            }
        }
    }

    const tvchange = (e) => {
        setTv(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const tvbtnclick = async () => {
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        try{
            await axios.post("http://localhost:8800/tv", tv)
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
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        if(brand === 'sony' || brand === 'Sony' || brand === 'SONY'){
            try{
                await axios.post("http://localhost:8800/sony", cam)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'fuji' || brand === 'Fuji' || brand === 'fujifilm' || brand === 'Fujifilm' || brand === 'FUJI' || brand === 'FUJIFILM'){
            try{
                await axios.post("http://localhost:8800/fuji", cam)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'canon' || brand === 'Canon' || brand === 'CANON'){
            try{
                await axios.post("http://localhost:8800/canon", cam)
            } 
            catch (err) {
                console.log(err)
            }
        }
    }

    const phchange = (e) => {
        setPh(prev => ({...prev,[e.target.name]:e.target.value}))
        setPro(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const phbtnclick = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/products", pro)
        } 
        catch (err) {
            console.log(err)
        }
        if(brand === 'samsung' || brand === 'Samsung' || brand === 'SAMSUNG'){
            try{
                await axios.post("http://localhost:8800/samsung", ph)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'oppo' || brand === 'Oppo' || brand === 'OPPO'){
            try{
                await axios.post("http://localhost:8800/oppo", ph)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'vivo' || brand === 'Vivo' || brand === 'VIVO'){
            try{
                await axios.post("http://localhost:8800/vivo", ph)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'huawei' || brand === 'Huawei' || brand === 'HUAWEI'){
            try{
                await axios.post("http://localhost:8800/huawei", ph)
            } 
            catch (err) {
                console.log(err)
            }
        }
        if(brand === 'redmi' || brand === 'Redmi' || brand === 'REDMI'){
            try{
                await axios.post("http://localhost:8800/redmi", ph)
            } 
            catch (err) {
                console.log(err)
            }
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
            </ul>
        </nav>
        {isCom && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='id'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='url'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='name'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='model'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='ram'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='cpu'>CPU : </label>
                <input 
                    type='text'
                    name='cpu'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='gpu'>GPU : </label>
                <input 
                    type='text'
                    name='gpu'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='display'>Display : </label>
                <input 
                    type='text'
                    name='display'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='storage'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='price'
                    onChange={comchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                /><br /><br />
                <button type='button' className='btn btn-danger addbtn' onClick={combtnclick}>ADD</button>
            </form>
        }
        {isTv && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='id'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='url'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='name'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='model'>Model : </label>
                <input 
                    type='text'
                    name='model'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='size'>Size : </label>
                <input 
                    type='text'
                    name='size'
                    onChange={tvchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='price'
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
                    name='id'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='url'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='name'>Name : </label>
                <input 
                    type='text'
                    name='name'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='af-mode'>AF_Mode : </label>
                <input 
                    type='text'
                    name='af_mode'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='built-in-flash'>Built_in_Flash : </label>
                <input 
                    type='text'
                    name='built_in_flash'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='iso'>ISO : </label>
                <input 
                    type='text'
                    name='iso'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='view-finder'>View_Finder : </label>
                <input 
                    type='text'
                    name='view_finder'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='pixels'>Pixels : </label>
                <input 
                    type='text'
                    name='pixels'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='weight'>Weight : </label>
                <input 
                    type='text'
                    name='weight'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='price'
                    onChange={camchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                /><br /><br />
                <button type='button' className='btn btn-danger addbtn' onClick={cambtnclick}>ADD</button>
            </form>
        }
        {isPh && 
            <form className='add_form'>
                <label htmlFor='id'>Id : </label>
                <input 
                    type='text'
                    name='id'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='url'>URL : </label>
                <input 
                    type='text'
                    name='url'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='name'>Model : </label>
                <input 
                    type='text'
                    name='name'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='front'>Front Camera : </label>
                <input 
                    type='text'
                    name='front'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='rear'>Rear Camera : </label>
                <input 
                    type='text'
                    name='rear'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='battery'>Battery : </label>
                <input 
                    type='text'
                    name='battery'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='ram'>RAM : </label>
                <input 
                    type='text'
                    name='ram'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='storage'>Storage : </label>
                <input 
                    type='text'
                    name='storage'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='color'>Color : </label>
                <input 
                    type='text'
                    name='color'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='cellular'>Cellular : </label>
                <input 
                    type='text'
                    name='cellular'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='price'>Price : </label>
                <input 
                    type='text'
                    name='price'
                    onChange={phchange}
                /><br /><br />
                <label htmlFor='Brand'>Brand : </label>
                <input 
                    type='text'
                    name='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                /><br /><br />
                <button type='button' className='btn btn-danger addbtn' onClick={phbtnclick}>ADD</button>
            </form>
        }
    </div>
  )
}

export default Add