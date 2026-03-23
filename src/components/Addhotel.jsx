import axios from 'axios'
import React, {  useState } from 'react'

const Addhotel = () => {
  const [productname, setProductname] = useState("")
  const [ description, setDescription] = useState("")
  const [ cost, setCost] = useState("")
  const [ productphoto, setProductphoto] = useState("")



  const [loading, setLoading] = useState("")
  const [ success, setSuccess] = useState("")
  const [ error, setError] = useState("")

  // creating the function to post data on the database
  const submit = async (e) => {
    // preventing the default behaviour of the from
     e.preventDefault()
    //  updating the loading state of the form
    setLoading("please wait as we add the products ")

    try {
      const data = new FormData()
      data.append("product_name", productname)
      data.append("product_description", description)
      data.append("product_cost", cost)
      data.append("product_photo", productphoto)

      const response = await axios.post("http://dumaelphus.alwaysdata.net/api/add_product", data)

      setLoading("")

      setSuccess(response.data.Message)

      // clearing the user inputs
      setProductname("")
      setDescription("")
      setCost("")
      setProductphoto("")


    } catch (error) {
      setLoading("")
      setError(error.message)

      
    }

  }

  
  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-md-6 p-4 card shadow bg-warning'>

     
        <form onSubmit={submit}>
          {loading}
          {error}
          {success}
          <h1>Ⓐⓓⓓ ⓗⓞⓣⓔⓛ</h1>
          <p className='text-start '>Hð†êl ñåmê</p>
          
          <input type="text" className='form-control' value={productname} onChange={(e) => setProductname(e.target.value)}/> 
          <br />
          <p>тнє υρ∂αтє∂ ναℓυє ιѕ: {productname}</p>



          <p className='text-start'>D̳e̳s̳c̳r̳i̳p̳t̳i̳o̳n̳</p>
          <textarea name="" id="" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></textarea> <br />
          <p> тнє υρ∂αтє∂ ναℓυє ιѕ: {description}</p>



          <p className='text-start'>Cost(kshs)</p>
          <input type="number" className='form-control'value={cost} onChange={(e) => setCost(e.target.value)}/><br />
          <p>тнє υρ∂αтє∂ ναℓυє ιѕ: {cost}</p>



          <p className='text-start'>Hotel Photo</p>
          <input type="file" accept='image/*' className='form-control'  onChange={(e) => setProductphoto(e.target.files[0])}/><br />


          <button className='btn btn-primary bg-success '>
            A̾d̾d̾ ̾p̾r̾o̾d̾u̾c̾t̾s̾
          </button>



        </form>
       </div>
    </div>
  )
}

export default Addhotel