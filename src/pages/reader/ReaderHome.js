import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const ReaderHome = () => {

    // get and set data
    const [reader, setReader] = useState([]);
    const [deleted, setDeleted] = useState([]);

    // header for admin auth
    const headers = {
        'admin': '1'
    };


    useEffect(() => {
        axios.get("http://localhost:4000/reader", { headers })
            .then(response => {
                setReader(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this reader?");
        if (confirmDelete) {
            axios.delete(`http://localhost:4000/reader/${id}`, { headers })
                .then(response => {
                    setDeleted(!deleted);
                    alert("Reader successfully deleted.");
                    window.location.reload()
                })
                .catch(error => console.error(error));
        }
    }


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
                                    <Link to={`/UpdateReader/${data.id}`} className="btn btn-primary"> Update</Link > |
                                    <Link className="btn btn-danger ms-2" onClick={e => handleDelete(data.id)}> Delete</Link > |
                                    <Link to={`/DetailsReader/${data.id}`} className="btn btn-success ms-2"> Details</Link >
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