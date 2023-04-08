import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function UpdateReader() {
    // eslint-disable-next-line
    const [reader, setReader] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    const headers = {
        'admin': '1'
    };


    const getData = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/reader/" + id, { headers });
            setReader(data[0])
            setEmail(data[0].email)
            setPassword(data[0].password)
            setPhone(data[0].phone)
            console.log(data);
        }
        catch (err) {
            console.log(err);

        }
    };


    useEffect(() => {
        getData();

    }, []);


    function handleSubmit(event) {


        event.preventDefault();
        axios.put('http://localhost:4000/reader/' + id,
            { 'email': email, 'password': password, 'phone': phone }, { headers }
        )
            .then(res => {
                navigate('/reader');


            })
            .catch(error => console.log("error"));
    }



    return (
        <div className='w-75 m-auto'>
            <form onSubmit={handleSubmit}>
                <h1 className='my-5'>Edit Reader</h1>

                <div className='input-gp my-3'>
                    <label htmlFor=''>Email</label>
                    <input required className='form-control my-2' type='email' onChange={e => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className='input-gp my-3'>
                    <label htmlFor=''>Password</label>
                    <input required className='form-control my-2' type='password' onChange={e => setPassword(e.target.value)} value={password}></input>
                </div>

                <div className='input-gp my-3'>
                    <label htmlFor=''>Phone</label>
                    <input required className='form-control my-2' type='tel' onChange={e => setPhone(e.target.value)} value={phone} ></input>
                </div>
                <button className='btn btn-success  ms-2'>Update</button> |
                <Link to="/reader" className=" ms-2 btn btn-dark">Back to Home</Link>

            </form>
        </div>
    )
}


export default UpdateReader;