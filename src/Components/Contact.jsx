import React, { useState } from 'react'
import './Contact.css'
import { toast, ToastContainer } from 'react-toastify'


const Contact = () => {

    const [user,setUser]= useState(
        {
            Name:'', email:'', subject:'', Message:''
        }
    )
    let values,names
    const data= (e)=>{
        values=e.target.value
        names=e.target.name
        setUser({...user,[names]:values})
    }
    const send=async(e)=>{
        const{Name,email,subject,Message}=user
        e.preventDefault()
        const option = {
            method:"POST",
            headers: {
            'Contant-Type' : 'aplication/json'
        },
        body:JSON.stringify({
            Name,email,subject,Message
        })
    }
    const send=await fetch('https://react-e-commerce-contact-default-rtdb.firebaseio.com/Message.json',option)
    if(Name,send,email){

        toast.success("Message Sent")
    }
    else{
        toast.error("Something is Missing !")
    }
}


  return (
    <>
      <div className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>#Contact us</h2>
                <form method='POST'>
                    <div className='box'>
                    <div className='lable'>
                        <h4>Name</h4>
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Name' name='Name' value={user.Name} onChange={data} required/>
                    </div>
                    </div>
                    <div className='box'>
                    <div className='lable'>
                        <h4>E-Mail</h4>
                    </div>
                    <div className='input'>
                        <input type='email' placeholder='Email' name='email' value={user.email} onChange={data} required/>
                    </div>
                    </div>
                    <div className='box'>
                    <div className='lable'>
                        <h4>Subject</h4>
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Subject' name='subject' value={user.subject} onChange={data} required/>
                    </div>
                    </div>
                    <div className='box'>
                    <div className='lable'>
                        <h4>Message</h4>
                    </div>
                    <div className='input'>
                       <textarea placeholder='Message !'  name='Message' value={user.Message} onChange={data}></textarea>
                    </div>
                    </div>
                    <button type='submit' onClick={send}>Send</button>
                </form>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Contact
