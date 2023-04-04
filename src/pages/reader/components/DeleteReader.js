import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function DeleteReader() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event) {


        event.preventDefault();
        axios.post("http://localhost:4000/reader", { email, password, phone })
            .then(res => {
                console.log("blaalal");
                navigate('/reader');


            })
            .catch(err => console.log("error"));
    }

    return (
        <>
            <h3 style={{ color: 'darkred' }} >Are you sure you want to delete this reader?</h3>
            <hr />
            <dl className="row">
                <dt className="col-sm-2">
                    email
                </dt>
                <dd className="col-sm-10">
                    password
                </dd>
            </dl>
            <form >
                <input type="hidden" />
                <input type="submit" value="Delete" className="btn btn-danger" /> |
                <Link to="/reader" className="btn btn-dark">Back to Home</Link>
            </form>

        </>

    )
}
export default DeleteReader;





