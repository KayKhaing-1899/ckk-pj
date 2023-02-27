import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Feedbacks = () => {

    const [feeds,setFeeds] = useState([])

    useEffect(() => {
        const fetchFeedbacks = async (e) => {
            try{
                const res = await axios.get("http://localhost:8800/feedbacks")
                setFeeds(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchFeedbacks()
    })

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
    </div>
  )
}

export default Feedbacks