import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [arr, setArr] = useState([])
    useEffect(() => {
        const fetchprods = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products")
                setArr(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchprods()
    })

    const [brandarr, setBrandarr] = useState([])
    useEffect(() => {
        const fetchbrands = async () => {
            try {
                const res = await axios.get("http://localhost:8800/ms/brands")
                setBrandarr(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchbrands()
    })

    const [isCom, setIsCom] = useState(true)
    const [cate,setCate] = useState("C1")
    const [isPh, setIsPh] = useState(false)
    const [isCam, setIsCam] = useState(false)
    const [isTv, setIsTv] = useState(false)
    const [brand, setBrand] = useState("")
    const [pro, setPro] = useState({
        Pid: "",
        AdminId: 1,
        BrandId: "",
        Url: "",
        Name: "",
        Model: "",
        Ram: "",
        Cpu: "",
        Gpu: "",
        Display: "",
        Storage: "",
        Front: "",
        Rear: "",
        Battery: "",
        Color: "",
        Cellular: "",
        Af_mode: "",
        Built_in_flash: "",
        Iso: "",
        View_finder: "",
        Pixels: "",
        Weight: "",
        Size: "",
        Price: ""
    })

    const comclick = () => {
        setIsCom(true)
        setCate("C1")
        setIsCam(false)
        setIsPh(false)
        setIsTv(false)
    }

    const camclick = () => {
        setIsCom(false)
        setIsCam(true)
        setCate("C2")
        setIsPh(false)
        setIsTv(false)
    }

    const phclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(true)
        setCate("C3")
        setIsTv(false)
    }

    const tvclick = () => {
        setIsCom(false)
        setIsCam(false)
        setIsPh(false)
        setIsTv(true)
        setCate("C4")
    }

    const change = (e) => {
        setPro(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    let len = 0
    const btnclick = async (e) => {
        console.log(cate)
        console.log(brand)
        len = len + 1
        pro.Pid = `P${arr.length + len}`
        brandarr.forEach(ele => {
            if(ele.CateId===cate && ele.Brandname===brand){
                pro.BrandId = ele.BrandId
            }
        })
        console.log(pro)
        try {
            await axios.post("http://localhost:8800/products", pro)
            alert("Successfully added!")
        }
        catch (err) {
            console.log(err)
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
                </ul>
            </nav>
            {isCom &&
                <form className='add_form'>
                    <label htmlFor='url'>URL : </label>
                    <input
                        type='text'
                        name='Url'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='name'>Name : </label>
                    <input
                        type='text'
                        name='Name'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='model'>Model : </label>
                    <input
                        type='text'
                        name='Model'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='ram'>RAM : </label>
                    <input
                        type='text'
                        name='Ram'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='cpu'>CPU : </label>
                    <input
                        type='text'
                        name='Cpu'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='gpu'>GPU : </label>
                    <input
                        type='text'
                        name='Gpu'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='display'>Display : </label>
                    <input
                        type='text'
                        name='Display'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='storage'>Storage : </label>
                    <input
                        type='text'
                        name='Storage'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='price'>Price : </label>
                    <input
                        type='text'
                        name='Price'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='brand'>Brand : </label>
                    <input
                        type='text'
                        name='brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    /><br /><br />
                    <div className='addbtn'>
                        <button type='button' className='btn btn-danger' style={{ width: 100, marginRight: 20 }} onClick={btnclick}>ADD</button>
                        <button type='button' className='btn btn-danger' style={{ width: 100 }} onClick={backclick}>BACK</button>
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
                    /><br /><br />
                    <label htmlFor='name'>Name : </label>
                    <input
                        type='text'
                        name='Name'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='model'>Model : </label>
                    <input
                        type='text'
                        name='Model'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='size'>Size : </label>
                    <input
                        type='text'
                        name='Size'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='price'>Price : </label>
                    <input
                        type='text'
                        name='Price'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='brand'>Brand : </label>
                    <input
                        type='text'
                        name='brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    /><br /><br />
                    <div className='addbtn'>
                        <button type='button' className='btn btn-danger' style={{ width: 100, marginRight: 20 }} onClick={btnclick}>ADD</button>
                        <button type='button' className='btn btn-danger' style={{ width: 100 }} onClick={backclick}>BACK</button>
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
                    /><br /><br />
                    <label htmlFor='name'>Name : </label>
                    <input
                        type='text'
                        name='Name'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='af-mode'>AF_Mode : </label>
                    <input
                        type='text'
                        name='Af_mode'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='built-in-flash'>Built_in_Flash : </label>
                    <input
                        type='text'
                        name='Built_in_flash'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='iso'>ISO : </label>
                    <input
                        type='text'
                        name='Iso'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='view-finder'>View_Finder : </label>
                    <input
                        type='text'
                        name='View_finder'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='pixels'>Pixels : </label>
                    <input
                        type='text'
                        name='Pixels'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='weight'>Weight : </label>
                    <input
                        type='text'
                        name='Weight'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='price'>Price : </label>
                    <input
                        type='text'
                        name='Price'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='brand'>Brand : </label>
                    <input
                        type='text'
                        name='brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    /><br /><br />
                    <div className='addbtn'>
                        <button type='button' className='btn btn-danger' style={{ width: 100, marginRight: 20 }} onClick={btnclick}>ADD</button>
                        <button type='button' className='btn btn-danger' style={{ width: 100 }} onClick={backclick}>BACK</button>
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
                    /><br /><br />
                    <label htmlFor='name'>Model : </label>
                    <input
                        type='text'
                        name='Name'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='front'>Front Camera : </label>
                    <input
                        type='text'
                        name='Front'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='rear'>Rear Camera : </label>
                    <input
                        type='text'
                        name='Rear'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='battery'>Battery : </label>
                    <input
                        type='text'
                        name='Battery'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='ram'>RAM : </label>
                    <input
                        type='text'
                        name='Ram'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='storage'>Storage : </label>
                    <input
                        type='text'
                        name='Storage'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='color'>Color : </label>
                    <input
                        type='text'
                        name='Color'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='cellular'>Cellular : </label>
                    <input
                        type='text'
                        name='Cellular'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='price'>Price : </label>
                    <input
                        type='text'
                        name='Price'
                        onChange={change}
                    /><br /><br />
                    <label htmlFor='brand'>Brand : </label>
                    <input
                        type='text'
                        name='brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    /><br /><br />
                    <div className='addbtn'>
                        <button type='button' className='btn btn-danger' style={{ width: 100, marginRight: 20 }} onClick={btnclick}>ADD</button>
                        <button type='button' className='btn btn-danger' style={{ width: 100 }} onClick={backclick}>BACK</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default Add