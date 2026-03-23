import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
  const {product} =useLocation().state || {}
    const img_url = "http://dumaelphus.alwaysdata.net/static/images/"
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    // function to make payments with Mpesa
    const submit = async (e) => {
        // preventing the default behaviour of a form
        e.preventDefault()
        // set loading message
        setMessage("please wait as we process ")
        // connecting axios to the flask end point 
        try {
            const data = new FormData()
            data.append ("phone", phone)
            data.append("amount", product.product_cost)
            // 
            const response = await axios.post("http://dumaelphus.alwaysdata.net/api/mpesa_payment" , data)
            // updatingthe message
            setMessage("please complete payment on your phone")
            setMessage("")
        } catch (error) {
            setMessage("")
            setError(error.message)
            
        }

    }
  return (
    <div className='bg-warning '>
        <h1 className='text-success'>Ⓜⓐⓚⓔ ⓟⓐⓨⓜⓔⓝⓣ     -⃝ ⓛⓘⓟⓐ ⓝⓐ ⓜⓟⓔⓢⓐ</h1>
        <img src= {img_url + product.product_photo} alt="" />
        <p>{product.product_name}</p>
        <p>{product.product_description}</p>
        <p>{product.product_cost}</p>
        <form onSubmit={submit}>
            {message}
            {error}
            <input className='bg-danger text-info' type="tel" placeholder='Enter phone 254xxx' onChange={(e) => setPhone(e.target.value)} required />
            <button className='bg-danger text-info' type='submit' >Make Payment</button>
        </form>
        
    </div>
  )
}

export default Makepayment