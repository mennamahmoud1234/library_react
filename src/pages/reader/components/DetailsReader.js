import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function DetailsReader() {
    // eslint-disable-next-line
    // const [reader, setReader] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [Id, setId] = useState('')
    const [Status, setStatus] = useState('')
    const [Type, setType] = useState('')
    const { id } = useParams();


    const headers = {
        'admin': '1'
    };

    const getData = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/reader/" + id, { headers });
            // setReader(data[0])
            setEmail(data[0].email)
            setPassword(data[0].password)
            setPhone(data[0].phone)
            setId(data[0].id)
            setStatus(data[0].Status)
            setType(data[0].Type)
            console.log(data);
        }
        catch (err) {
            console.log(err);

        }
    };


    useEffect(() => {
        getData();

    }, []);


    return (
        <>
            <div className="container ">
                <h3 >Reader Details</h3>
                <hr />

                <dl className="row">

                    <dt className="col-sm-2">
                        ID
                    </dt>
                    <dd className="col-sm-10" >
                        {Id}
                    </dd>

                    <dt className="col-sm-2">
                        Email
                    </dt>
                    <dd className="col-sm-10">
                        {email}
                    </dd>

                    <dt className="col-sm-2" >
                        Password
                    </dt>
                    <dd className="col-sm-10">
                        {password}
                    </dd>

                    <dt className="col-sm-2">
                        Phone
                    </dt>
                    <dd className="col-sm-10" >
                        {phone}
                    </dd>

                    <dt className="col-sm-2">
                        Status
                    </dt>
                    <dd className="col-sm-10" >
                        {Status}
                    </dd>

                    <dt className="col-sm-2">
                        Type
                    </dt>
                    <dd className="col-sm-10" >
                        {Type}
                    </dd>

                </dl>

            </div>

            <div className="container ">
                <Link to={`/UpdateReader/${Id}`} className="btn btn-primary mt-2 ms-2">Edit</Link> |
                <Link to="/reader" className="mt-2 ms-2 btn btn-dark ">Back to List</Link>
            </div>


        </>



    )
}
export default DetailsReader;