import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Gethotel = () => {
  const [loading, setLoading ] = useState("")
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])
  const img_url ="http://dumaelphus.alwaysdata.net/static/images/"
  const navigate = useNavigate()
  // the function to fetch data from the database
  const getproducts = async () =>{
    // adding loading message
    setLoading("please wait as we retrieve products...")
    // connecting axios to the flask endpoint
    try {
      // fetching data from the database
      const response = await axios.get("http://dumaelphus.alwaysdata.net/api/get_product_details")
      setLoading("")
      setProducts(response.data)
      console.log(response)
      
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  // adding use effect to ensure our website renders only once
  useEffect(() => {
    getproducts()
  },[]
)
  return (
    <div className='row '>
       <h2 className='text-success'>𝔸𝕧𝕒𝕚𝕝𝕒𝕓𝕝𝕖 𝕙𝕠𝕥𝕖𝕝𝕤 𝕗𝕠𝕣 𝕓𝕠𝕠𝕜𝕚𝕟𝕘𝕤</h2> 
       {loading}
       {error}

       {/* maping all the products to a card */}
       {products.map((product) => (
        <div className='col-md-3 justify-content-center mb-4 bg-warning'>
          <div className="card shadow w-100 h-100 bg-secondary">
          <img src={img_url + product.product_photo} alt="" className='product_img' />
          <div className="card-body">
            <h5>{product.product_name}</h5>
            <p>{product.product_description}</p>
            <p>{product.product_cost}</p>
            <button className='btn btn-dark mt-2 w-100' onClick={() => navigate("/makepayment", {state: {product}})}>Purchase now</button>
          </div>
          </div>
        </div>
       ))}
    </div>
  )
}

export default Gethotel