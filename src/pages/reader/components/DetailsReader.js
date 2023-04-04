import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function DetailsReader() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [phone, setPhone] = useState('')
    // const navigate = useNavigate();
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
        <>
            <div >
                <h4 >Reader Details</h4>
                <hr />
                <dl className="row">
                    <dt className="col-sm-2">
                        email
                    </dt>
                    <dd className="col-sm-10">
                        password
                    </dd>
                </dl>
            </div>

            <div>
                <Link to="/UpdateReader" className="btn btn-primary mt-2">Edit</Link> |
                <Link to="/reader" className="btn btn-dark mt-2">Back to List</Link>
            </div>


        </>



    )
}
export default DetailsReader;