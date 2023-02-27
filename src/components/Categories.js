import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div>
        <h2 className='cate_title'>Categories</h2>
        <div className='cate_container'>
            <div className='cate_div'>
                <img src="/images/sam1.jpg" className='cate_img' alt=''/>
                <p className='cate_brand'>Samsung</p>
                <Link to='/phones/samsungs'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/oppo1.png" style={{height:140,marginBottom:0}} className='cate_img' alt=''/>
                <p className='cate_brand'>Oppo</p>
                <Link to='/phones/oppos'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/vivo1.png" className='cate_img' alt=''/>
                <p className='cate_brand'>Vivo</p>
                <Link to='/phones/vivos'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/redmi1.png" className='cate_img' alt=''/>
                <p className='cate_brand'>Redmi</p>
                <Link to='/phones/redmis'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/huawei2.jpg" style={{width:150,height:140,marginBottom:0}} className='cate_img' alt=''/>
                <p className='cate_brand'>Huawei</p>
                <Link to='/phones/huaweis'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/msi1.webp" style={{width:150,height:140,marginBottom:0}} className='cate_img' alt=''/>
                <p className='cate_brand'>MSI</p>
                <Link to='/computers/msi'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/asus1.png" style={{width:150,height:140,marginBottom:0}} className='cate_img' alt=''/>
                <p className='cate_brand'>Asus</p>
                <Link to='/computers/asus'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/dell1.webp" style={{width:150,height:135,marginBottom:0,marginTop:5}} className='cate_img' alt=''/>
                <p className='cate_brand'>Dell</p>
                <Link to='/computers/dell'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/acer1.jpg" style={{width:155,height:110,marginTop:20}} className='cate_img' alt=''/>
                <p className='cate_brand'>Acer</p>
                <Link to='/computers/acer'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/hp1.webp" style={{height:110,marginTop:20}} className='cate_img' alt=''/>
                <p className='cate_brand'>HP</p>
                <Link to='/computers/hp'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/canon1.png" style={{width:130,marginBottom:0,marginTop:10}} className='cate_img' alt=''/>
                <p className='cate_brand'>Canon</p>
                <Link to='/cameras/canon'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/sony1.jpeg" className='cate_img' alt=''/>
                <p className='cate_brand'>Sony</p>
                <Link to='/cameras/sony'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/fuji1.jpg" style={{width:150,height:120,marginBottom:20,marginTop:10}} className='cate_img' alt=''/>
                <p className='cate_brand'>Fujifilm</p>
                <Link to='/cameras/fuji'><span>Show More!</span></Link>
            </div>
            <div className='cate_div'>
                <img src="/images/tv4.avif" style={{marginTop:10}} className='cate_img' alt=''/>
                <p className='cate_brand'>Televisions</p>
                <Link to='/tvs'><span>Show More!</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Categories