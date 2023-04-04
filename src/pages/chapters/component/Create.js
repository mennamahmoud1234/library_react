import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {

const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [bookId,setBookId]=useState('')
const navigate=useNavigate();

    function handleSubmit(event)
    {


        event.preventDefault();
        axios.post('http://localhost:4000/chapters',{title,description,bookId})
        .then(res=>{console.log("blaalal");
            navigate('/');
        
        
        })
        .catch(error=>console.log("error"));
    }

    return(
        <div className='w-75 m-auto'>
      <form onSubmit={handleSubmit} >
        <h1 className='my-5'>Create Form</h1>
       
        <div className='input-gp my-3'>
          <label htmlFor=''>Title</label>
          <input  className='form-control my-2'  type='text' onChange={e=>setTitle(e.target.value)}></input>
        </div>
        <div className='input-gp my-3'>
          <label htmlFor=''>Description</label>
          <input  className='form-control my-2' type='text'onChange={e=>setDescription(e.target.value)}></input>
        </div>
       
        <div className='input-gp my-3'>
          <label htmlFor='d'>Book_id</label>
          <input  className='form-control my-2'  onChange={e=>setBookId(e.target.value)}></input>
        </div>
        
        <button className='btn btn-success'>Submit</button>

      </form>
    </div>




    )
}
export default Create