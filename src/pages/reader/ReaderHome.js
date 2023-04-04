import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const ReaderHome = () => {

    // get and set data
    const [reader, setReader] = useState([]);

    // header for admin auth
    const headers = {
        'admin': '1'
    };

    //function to pass in useeffect to fetch data from api
    // const getData = () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:4000/reader", { headers });
    //         setReader(data) // data that take from api pass it to func setReader in usestate
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    //     axios.get("http://localhost:4000/reader", { headers });
    //     .then(response => {
    //         setReader(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    // };

    useEffect(() => {
        axios.get("http://localhost:4000/reader", { headers })
            .then(response => {
                setReader(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    //fetch data from api
    // useEffect(() => {
    //     getData();
    // }, []);


    return (
        <div className="container ">
            <h1 className="text-center">Welcome to manage reader!</h1>
            <p>
                <Link to="/AddReader" className="btn btn-success"> Add New Reader</Link >
            </p>
            <table className="table table-bordered table-striped table-hover ">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reader.map((data, i) => (
                            <tr key={i}>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.Status}</td>
                                <td>
                                    <Link to="/UpdateReader" className="btn btn-primary"> Update</Link > |
                                    <Link to="/DeleteReader" className="btn btn-danger ms-2"> Delete</Link > |
                                    <Link to="/DetailsReader" className="btn btn-success ms-2"> Details</Link >
                                </td>
                            </tr>
                        ))
                    }
                    <br />
                    <Link to="/reader" className="btn btn-dark">Back to Home</Link>
                </tbody>
            </table>
        </div >
    );
};
export default ReaderHome;