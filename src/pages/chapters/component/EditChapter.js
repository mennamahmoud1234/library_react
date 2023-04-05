import React, { useState,useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditChapter() {
  const [chapter,setChapter] = useState({});
const [Title,setTitle]=useState('');
const [Description,setDescription]=useState('');
const {id}=useParams(); 
const navigate=useNavigate();




const getData = async () => {
  try{
    const {data} = await axios.get("http://localhost:4000/chapters/onechapter/"+id);
    setChapter(data[0])
    setTitle(data[0].Title)
    setDescription(data[0].Description)
    console.log(data);
  }
  catch(err) {
    console.log(err);

  }
};

// eslint-disable-next-line
useEffect(() => {
  getData();
 
}, []);



    function handleSubmit(event)
    {


        event.preventDefault();
        axios.put('http://localhost:4000/chapters/'+id,
        {'Title': Title,'Description': Description},
        )
        .then(res=>{console.log("blaalal");
            navigate('/');
        
        
        })
        .catch(error=>console.log("error"));
    }

    return(
        <div className='w-75 m-auto'>
      <form onSubmit={handleSubmit} >
        <h1 className='my-5'>Update Chapter</h1>
       
        <div className='input-gp my-3'>
          <label htmlFor=''>Title</label>
          <input  className='form-control my-2'  type='text' onChange={e=>setTitle(e.target.value)}  value={Title}></input>
        </div>
        <div className='input-gp my-3'>
          <label htmlFor=''>Description</label>
          <input  className='form-control my-2' type='text'onChange={e=>setDescription(e.target.value)} value={Description}></input>
        </div>
       
     
        
        <button className='btn btn-success'>Update</button>

      </form>
    </div>




    )
}
export default EditChapter