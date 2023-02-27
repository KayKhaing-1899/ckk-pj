import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Results = ({searchTerm}) => {

  const [results,setResults] = useState([])
  useEffect(() => {
    const fetchpros = async () => {
      try{
        const res = await axios.get("http://localhost:8800/products/"+searchTerm)
        setResults(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchpros()
  })

  const navigate = useNavigate()

  const click = (obj) => {
    const text = obj.name.split(" ")
    if(text[0] === 'Samsung') navigate(`/phones/samsungs/${obj.id}`)
    if(text[0] === 'Oppo') navigate(`/phones/oppos/${obj.id}`)
    if(text[0] === 'Vivo') navigate(`/phones/vivos/${obj.id}`)
    if(text[0] === 'Dell') navigate(`/computers/dell/${obj.id}`)
    if(text[0] === 'Acer') navigate(`/computers/acer/${obj.id}`)
    if(text[0] === 'Asus') navigate(`/computers/asus/${obj.id}`)
    if(text[0] === 'HP') navigate(`/computers/hp/${obj.id}`)
    if(text[0] === 'Msi') navigate(`/computers/msi/${obj.id}`)
    if(text[0] === 'Canon') navigate(`/cameras/canon/${obj.id}`)
    if(text[0] === 'Sony') navigate(`/cameras/sony/${obj.id}`)
    if(text[0] === 'Fujifilm') navigate(`/cameras/fuji/${obj.id}`)
    if(obj.name.includes('TV')) {
      navigate(`/tvs/${obj.id}`)
    } 
  }

  return (
    <div className='products-container'>
      {results.map(re => (
        <div className='products-show' key={re.id}>
          <img 
            src={`/images/${re.url}`} 
            alt="" 
            className={
              (re.name.includes('Dell')&&'comimg') || 
              (re.name.includes('Acer')&&'comimg') ||
              (re.name.includes('Asus')&&'comimg') ||
              (re.name.includes('HP')&&'comimg') ||
              (re.name.includes('Msi')&&'comimg') ||
              (re.name.includes('Samsung')&&'phimg') || 
              (re.name.includes('Oppo')&&'phimg') ||
              (re.name.includes('Vivo')&&'phimg') ||
              (re.name.includes('Huawei')&&'phimg') ||
              (re.name.includes('Redmi')&&'phimg') || 
              (re.name.includes('Sony')&&'camimg') ||
              (re.name.includes('Canon')&&'camimg') ||
              (re.name.includes('Fujifilm')&&'camimg') ||
              (re.name.includes('TV')&&'tv_img')
            }
            onClick={() => click(re)} 
          />
          <p className='products-text'>{re.name} {re.model}</p>
        </div>
      ))}
    </div>
  )
}

export default Results