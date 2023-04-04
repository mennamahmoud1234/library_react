import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {
const [Title,setTitle]=useState('')
const [Description,setDescription]=useState('')
const [BookId,setBookId]=useState('')
const navigate=useNavigate();
    function handleSubmit(event)
    {


        event.preventDefault();
        axios.post("http://localhost:4000/chapters",{Title,Description,BookId})
        .then(res=>{console.log("blaalal");
            navigate('/');
        
        
        })
        .catch(err=>console.log("error"));
    }

    return(
        <div className='w-75 m-auto'>
      <form onSubmit={handleSubmit} >
        <h1 className='my-5'>Create Form</h1>
       
        <div className='input-gp my-3'>
          <label htmlFor='first_name'>Title</label>
          <input  className='form-control my-2' name='first_name' type='text' onChange={e=>setTitle(e.target.value)}></input>
        </div>
        <div className='input-gp my-3'>
          <label htmlFor='last_name'>Description</label>
          <input  className='form-control my-2' name='last_name' type='text'onChange={e=>setDescription(e.target.value)}></input>
        </div>
       
        <div className='input-gp my-3'>
          <label htmlFor='first_name'>Book_id</label>
          <input  className='form-control my-2' name='first_name'  onChange={e=>setBookId(e.target.value)}></input>
        </div>
        <button className='btn btn-success'>Add</button>

      </form>
    </div>




    )
}
export default Create