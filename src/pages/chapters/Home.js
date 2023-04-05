import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    // eslint-disable-next-line
    const [chapter, setChapter] = useState([]);


    const getData = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/chapters/7");
            setChapter(data)
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    const handleDelete = async (id) => {
        try {

            await axios.delete("http://localhost:4000/chapters/" + id)
            window.location.reload()

        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/Create" className="btn btn-success"> Add +</Link >
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Description
                            </th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            chapter.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.Title}</td>
                                    <td>{data.Description}</td>
                                    <td>
                                        <Link to={`EditChapter/${data.id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }



                    </tbody>
                </table>

            </div>
        </div>
    );
};
export default Home;