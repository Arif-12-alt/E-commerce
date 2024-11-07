import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Rout from './Components/Rout';
import Footer from './Components/Footer';
import HomeProduct from './Components/HomeProduct';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  const[cart,setCart]= useState([])
  //Shop Page
  const[shop, setShop]= useState(HomeProduct)
  const [search,setSearch]= useState('')

  const Filter = (x)=>{
    const catefilter = HomeProduct.filter((product)=>{
      return product.cat === x
    })
    setShop(catefilter)
   }
   const allcatefilter=()=>{
    setShop(HomeProduct)
   }
   //Shop Search Filter//
   const searchlength = (search || []).length===0;
   const searchproduct= ()=>
   {
   if(searchlength){
    alert('Please Search Something')
    setShop(HomeProduct)
   }
   else{
      const searchfilter=HomeProduct.filter((x)=>{
        return x.cat===search
      })
      setShop(searchfilter)
   }
  }
  //Add to Cart //
  const addtocart =(product)=>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    if (exist){
      toast.error("Already in cart")
    }
    else{
      setCart([...cart,{...product,qty:1}])
      toast.success('Added To Cart')
    }
  }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
      <Navbar search = {search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer/>
      <ToastContainer />
    </BrowserRouter>
    </>
  );
}

export default App;
