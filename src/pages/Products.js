import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    const searchclick = async() => {
        if(!name) return
        setIsSearch(true)
        try{
            const res = await axios.get("http://localhost:8800/" + name)
            setResults(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    const backclick = () => {
        setIsSearch(false)
    }

    const back = () => {
        navigate("/ad_home")
    }

    const deleteclick = async(obj) => {
        try{
            await axios.delete("http://localhost:8800/" + obj.Pid)
            window.location.reload()
        }catch(err){
            console.log(err)
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
                {isSearch ?
                    <button type='button' className='btn btn-danger prosearch_btn' onClick={backclick}>BACK</button> :
                    <button type='button' className='btn btn-danger prosearch_btn' onClick={back}>BACK</button> 
                } 
            </div>   
        </div>
        {isSearch ? 
            <div className='prods_container'>
                <div className='prods'>
                    <p className='prods_text1'>Name</p>
                    <p className='prods_text2'>Price</p>
                    <p className='prods_text3'>Delete</p>
                    <p className='prods_text3'>Edit</p>
                </div>
                {results.map(pro => (
                    <div>
                        <hr/>
                        <div className='prods'>
                            <p className='prods_text1'>{pro.Name}</p>
                            <p className='prods_text2'>{pro.Price}</p>
                            <div className='prods_text4'>
                                <img src='/images/trash_96px.png' className='prods_img' onClick={() => deleteclick(pro)} />
                            </div>
                            <div className='prods_text4'>
                                <Link to={`/update/${pro.Pid}`}><img src='/images/pencil_208px.png' className='prods_img' style={{width:20,height:20}} /> </Link>
                            </div> 
                        </div>
                    </div>
                ))}
            </div> :
            <div className='prods_container'>
                <div className='prods'>
                    <p className='prods_text1'>Name</p>
                    <p className='prods_text2'>Price</p>
                    <p className='prods_text3'>Delete</p>
                    <p className='prods_text3'>Edit</p>
                </div>
                {products.map(pro => (
                    <div>
                        <hr/>
                        <div className='prods'>
                            <p className='prods_text1'>{pro.Name}</p>
                            <p className='prods_text2'>{pro.Price}</p>
                            <div className='prods_text4'>
                                <img src='/images/trash_96px.png' className='prods_img' onClick={() => deleteclick(pro)} />
                            </div>
                            <div className='prods_text4'>
                                <Link to={`/update/${pro.Pid}`}><img src='/images/pencil_208px.png' className='prods_img' style={{width:20,height:20}} /> </Link>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        }
    </div>
  )
}

export default Products