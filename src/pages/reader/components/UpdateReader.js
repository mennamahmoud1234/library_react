import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function UpdateReader() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();
    // function handleSubmit(event) {


    //     event.preventDefault();
    //     axios.post("http://localhost:4000/reader", { email, password, phone })
    //         .then(res => {
    //             console.log("blaalal");
    //             navigate('/reader');


    //         })
    //         .catch(err => console.log("error"));
    // }

    return (
        <div className='w-75 m-auto'>
            <form>
                <h1 className='my-5'>Add New Reader Form</h1>

                <div className='input-gp my-3'>
                    <label htmlFor='first_name'>Email</label>
                    <input className='form-control my-2' name='first_name' type='text' onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className='input-gp my-3'>
                    <label htmlFor='last_name'>Password</label>
                    <input className='form-control my-2' name='last_name' type='text' onChange={e => setPassword(e.target.value)}></input>
                </div>

                <div className='input-gp my-3'>
                    <label htmlFor='first_name'>Phone</label>
                    <input className='form-control my-2' name='first_name' onChange={e => setPhone(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Add</button>
                <Link to="/reader" className="btn btn-dark">Back to Home</Link>

            </form>
        </div>




    )
}


export default UpdateReader;