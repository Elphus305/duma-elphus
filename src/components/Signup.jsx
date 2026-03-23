import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


  const Signup = () => {
    // adding state for all the inputs 
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [tel, setTel] = useState("")
    const [success, setSuccess] = useState("")
    const [ error, setError] = useState("")
    const [loading, setLoading] = useState("")

    // the function to post data on the database
    const submit = async(e) => { 
        // preventing the default behaviour of the form loading
        e.preventDefault()
        // updating the loading state with a message
        setLoading("please wait as we upload your data")


        // updating user input into the database
        try {
            // storing user inputs into a data variable
            const data = new FormData()
            data.append("username", username)
            data.append("email", email)
            data.append("password", password)
            data.append("phone", tel)
            // connecting to the flask api using axios
            const response = await axios.post("http://dumaelphus.alwaysdata.net/api/signup", data)
            //  Removing the loading message
            setLoading("")
            // adding a success message 
            setSuccess(response.data.success)

            // clearing the inputs
            setUsername("")
            setEmail("")
            setPassword("")
            setTel("")

        } catch (error) {
            setLoading("")
            // updating the error message
            setError(error.message)
        }
    }


    return(
        <div className="row mt-4 justify-content-center ">
            <div className="col-md-6 card shadow p-4 bg-warning">
                <form onSubmit={submit}>
                    {loading} 
                    {success}
                    {error}
                <h2>ⓢⓘⓖⓝ ⓤⓟ</h2>
                <fieldset>
                    <input type="text" placeholder="Enter Username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required/><br />
                     


                    <input type="email " placeholder="Enter Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
                    


                    <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}required/><br />
                    

                    <input type="tel" placeholder="Enter your Phone number" className="form-control" value={tel} onChange={(e) => setTel(e.target.value)} required/><br />
                    

                    <button className="btn btn-primary bg-success " type="submit">
                        Sign Up
                    </button><br />


                    <p>Already have an account? <Link to = "/Signin" className="text-danger" >Sign In</Link></p>


                </fieldset>
                </form>
            </div>
        </div> 
    )
}

export default Signup