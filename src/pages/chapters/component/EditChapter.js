import React, { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditChapter() {

const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const {id}=useParams(); 
const navigate=useNavigate();

    function handleSubmit(event)
    {


        event.preventDefault();
        axios.put('http://localhost:4000/chapters/'+id,{title,description})
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
          <input  className='form-control my-2'  type='text' onChange={e=>setTitle(e.target.value)}></input>
        </div>
        <div className='input-gp my-3'>
          <label htmlFor=''>Description</label>
          <input  className='form-control my-2' type='text'onChange={e=>setDescription(e.target.value)}></input>
        </div>
       
     
        
        <button className='btn btn-success'>Update</button>

      </form>
    </div>




    )
}
export default EditChapter