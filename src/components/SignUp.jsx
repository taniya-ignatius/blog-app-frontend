import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input, setInput] = new useState(
        {
            name:String,
            age:String,
            mobile:String,
            address:String,
            pin:String,
            email:String,
            password:String
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3003/api/blog/signup ", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                    setInput(
                        {
                            name:String,
                            age:String,
                            mobile:String,
                            address:String,
                            pin:String,
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
        
        <div className="container">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control"  name="name" value={input.name} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">age</label>
                            <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" className="form-control"  name="mobile" value={input.mobile} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-control"  name="address" value={input.address} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">pin</label>
                            <input type="text" className="form-control"  name="pin" value={input.pin} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control"  name="email" value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control"  name="password" value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SIGNUP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SignUp