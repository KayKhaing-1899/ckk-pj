import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Popularshow = ({id,url,model}) => {

    const navigate = useNavigate()
    const [itemModel,setItemModel] = useState({itemid:"",name:""})
    // console.log(count)

    useEffect(() => {
        if(itemModel.name.includes('Galaxy')) {
            navigate(`/phones/samsungs/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Oppo')) {
            navigate(`/phones/oppos/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Vivo')) {
            navigate(`/phones/vivos/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Redmi')) {
            navigate(`/phones/redmis/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Huawei')) {
            navigate(`/phones/huaweis/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Canon')) {
            navigate(`/cameras/canon/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Sony')) {
            navigate(`/cameras/sony/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Fujifilm')) {
            navigate(`/cameras/fuji/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Acer')) {
            navigate(`/computers/acer/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Asus')) {
            navigate(`/computers/asus/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('Dell')) {
            navigate(`/computers/dell/${itemModel.itemid}`)
        }
        if(itemModel.name.includes('HP')) {
            navigate(`/computers/hp/${itemModel.id}`)
        }
        if(itemModel.name.includes('Msi')) {
            navigate(`/computers/msi/${itemModel.itemid}`)
        }
    },[itemModel])

  return (
    <div className='popular_items'>
        <div className='popular_container'>
            <img style={{width:120,height:120}} src={`/images/${url}`} alt='' onClick={() => setItemModel((i) => ({...i,itemid:id,name:model}))} />
            <p style={{fontSize:14,marginTop:10}}>{model.includes('Galaxy') ? `Samsung ${model}` : model}</p>
        </div>
    </div>
  )
}

export default Popularshow