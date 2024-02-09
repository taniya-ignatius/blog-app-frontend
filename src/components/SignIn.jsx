import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../NavBar'

const SignIn = () => {
    const [input, setInput] = new useState(
        {   
            email:String,
            password:String
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3003/api/blog/signin", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Signed In")
                    setInput(
                        {   
                            email:String,
                            password:String
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
        }
return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="text" className="form-control"  name="password" value={input.password} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SIGNIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SignIn