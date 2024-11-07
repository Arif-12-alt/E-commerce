import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'

const Cart = ({cart,setCart}) => {
    const incqty=(product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((value)=>{
            return value.id === product.id ? {...exist,qty : exist.qty +1}:value
        }))
    }
    const decqty=(product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((value)=>{
            return value.id === product.id ? {...exist,qty : exist.qty -1}:value
        }))
    }
    const removeproduct=(product)=>{
        const exist= cart.find((x)=>{
            return x.id=== product.id
        })
        if(exist.qty >0){
            setCart(cart.filter((value)=>{
               return value.id !== product.id
            }))
        }
    }
    const total= cart.reduce((price,item)=>price+item.qty *item.price,0)
  return (
    <>
    <div className='cart'>
    <h3># Cart</h3>
    {
        cart.length===0 && <>
        <div className='empty-cart'>
            <h2>Your Shopping Cart is Empty</h2>
            <Link to='/shop'>
            <button>Shop Now</button>
            </Link>         
        </div>
        </>
    }
        <div className='container'>
            {
                cart.map((value)=>{
                    return(
                        <>
                        <div className='box'>
                            <div className='img-box'>
                                <img src={value.img} alt='Cart'/>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{value.cat}</h4>
                                <h3>{value.Name}</h3>
                                <p>Price: ${value.price}</p>
                                <p>Total: ${value.price * value.qty}</p>
                                </div>
                                <div className='quantity'>
                                    <button onClick={()=>incqty(value)}>+</button>
                                    <input type='text' value={value.qty}/>
                                    <button onClick={()=>decqty(value)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={()=>removeproduct(value)}><MdDelete/></li>
                                    </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='button'>
            {
                cart.length > 0 && 
                <>
                <div className='total'>
                    <h4>Sub Total: ${total}</h4>
                </div>
                <button>checkout</button>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Cart
