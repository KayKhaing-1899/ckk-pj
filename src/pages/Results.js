import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Results = ({searchTerm}) => {

  const [results,setResults] = useState([])
  useEffect(() => {
    const fetchpros = async () => {
      try{
        const res = await axios.get("http://localhost:8800/"+searchTerm)
        setResults(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchpros()
  })

  // const [brand,setBrand] = useState([])
  // useEffect(() => {
  //   const fetchpros = async () => {
  //     try{
  //       const res = await axios.get("http://localhost:8800/prods/"+searchTerm)
  //       setBrand(res.data)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchpros()
  // })

  const navigate = useNavigate()

  const click = (obj) => {
    if(obj.Name.includes('TV')) {
      navigate(`/tvs/${obj.Pid}`)
    }
    if(obj.Name.includes('Galaxy')) {
      navigate(`/phones/samsungs/${obj.Pid}`)
    }
    const text = obj.Name.split(" ")
    if(text[0] === 'Oppo') navigate(`/phones/oppos/${obj.Pid}`)
    if(text[0] === 'Vivo') navigate(`/phones/vivos/${obj.Pid}`)
    if(text[0] === 'Dell') navigate(`/computers/dell/${obj.Pid}`)
    if(text[0] === 'Acer') navigate(`/computers/acer/${obj.Pid}`)
    if(text[0] === 'Asus') navigate(`/computers/asus/${obj.Pid}`)
    if(text[0] === 'HP') navigate(`/computers/hp/${obj.Pid}`)
    if(text[0] === 'Msi') navigate(`/computers/msi/${obj.Pid}`)
    if(text[0] === 'Canon') navigate(`/cameras/canon/${obj.Pid}`)
    if(text[0] === 'Sony') navigate(`/cameras/sony/${obj.Pid}`)
    if(text[0] === 'Fujifilm') navigate(`/cameras/fuji/${obj.Pid}`)
    // if(text[0] === 'Samsung') navigate(`/phones/samsungs/${obj.Pid}`)
  }

  return (
    <div>
      {results.length!==0 ?
        <div className='products-container'>
          {results.map(re => (
            <div className='products-show' key={re.Pid}>
              <img 
                src={`/images/${re.Url}`} 
                alt="" 
                className={
                  (re.Name.includes('Dell')&&'comimg') || 
                  (re.Name.includes('Acer')&&'comimg') ||
                  (re.Name.includes('Asus')&&'comimg') ||
                  (re.Name.includes('HP')&&'comimg') ||
                  (re.Name.includes('Msi')&&'comimg') ||
                  (re.Name.includes('Oppo')&&'phimg') ||
                  (re.Name.includes('Vivo')&&'phimg') ||
                  (re.Name.includes('Huawei')&&'phimg') ||
                  (re.Name.includes('Redmi')&&'phimg') || 
                  (re.Name.includes('Sony')&&'camimg') ||
                  (re.Name.includes('Canon')&&'camimg') ||
                  (re.Name.includes('Fujifilm')&&'camimg') ||
                  (re.Name.includes('TV')&&'tv_img') ||
                  (re.Name.includes('Samsung')&&'phimg')
                }
                onClick={() => click(re)} 
              />
              <p className='products-text'>{re.Name} {re.Model}</p>
            </div>
          ))}  
        </div> :
        // <div className='products-container'>
        //   {brand.map(re => (
        //     <div className='products-show' key={re.Pid}>
        //       <img 
        //         src={`/images/${re.Url}`} 
        //         alt="" 
        //         className={
        //           (re.Name.includes('Dell')&&'comimg') || 
        //           (re.Name.includes('Acer')&&'comimg') ||
        //           (re.Name.includes('Asus')&&'comimg') ||
        //           (re.Name.includes('HP')&&'comimg') ||
        //           (re.Name.includes('Msi')&&'comimg') ||
        //           (re.Name.includes('Samsung')&&'phimg') || 
        //           (re.Name.includes('Oppo')&&'phimg') ||
        //           (re.Name.includes('Vivo')&&'phimg') ||
        //           (re.Name.includes('Huawei')&&'phimg') ||
        //           (re.Name.includes('Redmi')&&'phimg') || 
        //           (re.Name.includes('Sony')&&'camimg') ||
        //           (re.Name.includes('Canon')&&'camimg') ||
        //           (re.Name.includes('Fujifilm')&&'camimg') ||
        //           (re.Name.includes('TV')&&'tv_img')
        //         }
        //         onClick={() => click(re)} 
        //       />
        //       <p className='products-text'>{re.Name} {re.Model}</p>
        //     </div>
        //   ))}
        // </div>
        <div>
          <h2>Product Not Found!</h2>
        </div>
      }
    </div>
  )
}

export default Results