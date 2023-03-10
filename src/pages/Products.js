import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {

    const [products,setProducts] = useState([])
    useEffect(() => {
        const fetchpros = async () => {
            try{
                const res = await axios.get("http://localhost:8800/products")
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchpros()
    })

    const [name,setName] = useState("")
    const [results,setResults]=useState([])
    const [isSearch,setIsSearch] = useState(false)
    const [showbtn,setShowbtn] = useState(false)

    const searchclick = async() => {
        if(!name) return
        setIsSearch(true)
        setShowbtn(true)
        try{
            const res = await axios.get("http://localhost:8800/" + name)
            setResults(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    const backclick = () => {
        setIsSearch(false)
        setShowbtn(false)
    }

    const deleteclick = async(obj) => {
        try{
            await axios.delete("http://localhost:8800/"+obj.Name)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
        if(obj.Brand==='acer' || obj.Brand==='asus' || obj.Brand==='dell' || obj.Brand==='hp' || obj.Brand==='msi'){
            try{
                await axios.delete("http://localhost:8800/computers/"+obj.Name)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }
        if(obj.Brand==='samsung' || obj.Brand==='oppo' || obj.Brand==='vivo' || obj.Brand==='redmi' || obj.Brand==='huawei'){
            try{
                await axios.delete("http://localhost:8800/phones/"+obj.Name)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }
        if(obj.Brand==='canon' || obj.Brand==='sony' || obj.Brand==='fujifilm'){
            try{
                await axios.delete("http://localhost:8800/cameras/"+obj.Name)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }
        if(obj.Brand==='lg' || obj.Brand==='samsung'){
            try{
                await axios.delete("http://localhost:8800/tvs/"+obj.Name)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }
    }

  return (
    <div>
        <div className='search_cus_bar'>
            <input
                type='text'
                name='name'
                placeholder="Enter product name..."
                onChange={(e) => setName(e.target.value)}
                className='prosearch_input'
            />
            <div>
                <button type='button' className='btn btn-danger prosearch_btn' onClick={searchclick}>SEARCH</button>
                {showbtn && 
                    <button type='button' className='btn btn-danger prosearch_btn' onClick={backclick}>BACK</button>
                } 
            </div>   
        </div>
        {isSearch ? 
            <div className='prods_container'>
                {results.map(pro => (
                    <div>
                        <hr/>
                        <div className='prods'>
                            <p className='prods_text1'>{pro.Name}</p>
                            <p className='prods_text3'>{pro.Model}</p>
                            <p className='prods_text2'>{pro.Price}</p>
                            <img src='/images/trash_96px.png' className='prods_img' onClick={() => deleteclick(pro)} />
                            <Link to={`/update/${pro.Pid}`}><img src='/images/pencil_208px.png' className='prods_img' style={{width:20,height:20}} /></Link> 
                        </div>
                    </div>
                ))}
            </div> :
            <div className='prods_container'>
                {products.map(pro => (
                    <div>
                        <hr/>
                        <div className='prods'>
                            <p className='prods_text1'>{pro.Name}</p>
                            <p className='prods_text3'>{pro.Model}</p>
                            <p className='prods_text2'>{pro.Price}</p>
                            <img src='/images/trash_96px.png' className='prods_img' onClick={() => deleteclick(pro)} />
                            <Link to={`/update/${pro.Pid}`}><img src='/images/pencil_208px.png' className='prods_img' style={{width:20,height:20}} /> </Link>
                        </div>
                    </div>
                ))}
            </div>
        }
    </div>
  )
}

export default Products