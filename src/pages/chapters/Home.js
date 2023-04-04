import { useEffect, useState } from "react";
 import { Link  } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    // eslint-disable-next-line
    const [books,setBooks] = useState([]);


    const getData = async () => {
        try{
          const {data} = await axios.get("http://localhost:4000/chapters");
          setBooks(data)
        }
        catch(err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getData();
    }, []);

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
                books.map((data,i)=>(
                  <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.Title}</td>
                  <td>{data.Description}</td>
                  <td>
                  <button className='btn btn-primary'>Update</button>
                  <button className='btn btn-danger ms-2'>Delete</button>
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