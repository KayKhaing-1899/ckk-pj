import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Feedbacks = () => {

    const [feeds,setFeeds] = useState([])

    useEffect(() => {
        const fetchFeedbacks = async (e) => {
            try{
                const res = await axios.get("http://localhost:8800/ms/feedbacks")
                setFeeds(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchFeedbacks()
    })

    const navigate = useNavigate()
    const back = () => {
        navigate('/ad_home')
    }

  return (
    <div style={{marginTop:20}} >
        {feeds.map((feed) => (
            <div>
                <div style={{marginLeft:30,display:'flex',alignItems:'center'}}>
                    <img style={{width:40,height:40}} src={`../images/acc.png`} alt="" />
                    <h5 style={{marginTop:5,fontStyle:'italic'}} >{feed.Uname}</h5>
                </div>
                <p style={{marginLeft:50}}>{feed.Fback}</p>
                <hr />
            </div>
        ))}
        <button className='btn btn-danger' style={{marginLeft:50,width:100}} onClick={back} >BACK</button>
    </div>
  )
}

export default Feedbacks