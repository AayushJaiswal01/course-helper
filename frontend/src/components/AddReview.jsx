import React from 'react';
import "./AddReview.css";
import Header from './Header';
import {reviews,coursereviews }from '../data/coursereviews';
import { useState,useEffect } from 'react';
import Axios from 'axios';

function AddReview() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  return (
    <div className='body' >
    <Header/>
 
    <form className='form'>      
  <input
   onChange={(e) => setName(e.target.value)}
   type="text" className="feedback-input" placeholder="Student Name" />   
  <input type="text" 
   onChange={(e) => setTitle(e.target.value)}
  className="feedback-input" placeholder="Course Title" />
  <textarea 
   onChange={(e) => setContent(e.target.value)}
   className="feedback-input" placeholder="Course Feedback"></textarea>
  <input type="submit" 
  onClick={()=>{
    Axios.post('http://localhost:3001/api/insert',{title:title,student_name:name,description:content}).then(() =>{alert('success')});

    }}
  value="SUBMIT"/>
</form>
 
 
    </div>
  )
}

export default AddReview