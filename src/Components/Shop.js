import React, { useState } from 'react'
import './Shop.css'
import { FaEye, FaHeart } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io';

const Shop = ({shop,Filter,allcatefilter,addtocart}) => {
  const [showdetail,setShowDetail]=useState(false);

  const [detail,setDetail]= useState([])

  const detailpage = (product)=>{
    const detaildata= ([{product}])
    const productdetail=detaildata[0]['product']
    setDetail(productdetail)
    setShowDetail(true)
  }
  const closedetail = ()=>{
    setShowDetail(false)
  }
  return (
    <>
    {
      showdetail ?
      <>
      <div className='product-detail'>
        <button className='close-btn' onClick={closedetail}><IoMdClose /></button>
        <div className='container'>
          <div className='img-box'>
            <img src={detail.img} alt=''/>
          </div>
          <div className='info'>
            <h4>{detail.cat}</h4>
            <h2>{detail.Name}</h2>
            <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet ab..</p>
            <h3>{detail.price}</h3>
            <button onClick={()=>addtocart(detail)}>Add to Cart</button>
          </div>
        </div>
      </div>
      </>
      :null
    }   
    <div className='shop'>
      <h2># Shop</h2>
      <p>Home . Shop</p>
      <div className='container'>
        <div className='left-box'>
          <div className='category'>
            <div className='header'>
              <h2>All Categories</h2>
            </div>
            <div className='box'>
              <ul>
                <li onClick={()=>allcatefilter()}># All</li>
                <li onClick={()=>Filter ('TV')}># TV</li>
                <li onClick={()=>Filter ('Laptop')}># Laptop</li>
                <li onClick={()=>Filter ('Watch')}># Watch</li>
                <li onClick={()=>Filter ('Speaker')}># Speaker</li>
                <li onClick={()=>Filter ('Electronics')}># Electronics</li>
                <li onClick={()=>Filter ('Headphone')}># Headphone</li>
                <li onClick={()=>Filter ('Phone')}># Phone</li>
              </ul>
            </div>
          </div>
          <div className='banner'>
            <div className='img-box'>
              <img src='image/shop_left.avif' alt='Shop'/>
            </div>
          </div>
        </div>
        <div className='right-box'>
          <div className='banner'>
            <div className='img-box'>
              <img src='image/shop_top.webp' alt='Shop'/>
            </div>
          </div>
          <div className='product-box'>
            <h2>Shop Product</h2>
            <div className='product-container'>
                {
                  shop.map((value)=>{
                    return(
                      <>
                      <div className='box'>
                        <div className='img-box'>
                          <img src={value.img} alt=''/>
                          <div className='icon'>
                          <li><FaHeart /></li>
                          <li onClick={()=>detailpage(value)}><FaEye /></li>
                          </div>
                        </div>
                        <div className='detail'>
                          <h3>{value.Name}</h3>
                          <p>${value.price}</p>
                          <button onClick={()=>addtocart(value)}>Add to Cart</button>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop;
