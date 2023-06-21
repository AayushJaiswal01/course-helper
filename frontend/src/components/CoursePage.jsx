import React from 'react'
import Header from './Header';
import { useLocation } from 'react-router-dom';
import "./CoursePage.css";
import initialDetails from "../data/courseinfo";
import ReviewCard from './ReviewCard';
import { Margin } from '@mui/icons-material';
import {reviews} from '../data/coursereviews';
import { useState,useEffect } from 'react';
import Axios from 'axios';


function CoursePage() {
    const {state} = useLocation();
    const {name,id} = state;
    const [reviewList,setReviewList]=useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setReviewList(response.data);
        })
    })

  return (
    
<div className='course_info'>
<Header/>
<div className='title'>
<h1 >
    {initialDetails[id-1].course_title} 
    </h1>
</div>

    <h3 className='heading'>
      {name}
    </h3>
    <h3>
        Contents:
    </h3>
    <p className='details'>
        {initialDetails[id-1].content}
    </p>
    <h3 className='inst_head'>
        Course Instructors:
    </h3>
    <h2 className='inst'>
    Nilesh Bhadve (2020-21)
    </h2>
    <h2 className='inst'>
    Kantesh Balani(2019-20)
    </h2>
    <h2 className='inst'>
    Somnath Bhowmick(2018-19)
    </h2>
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        Assignments
    </button>

    </a>
   
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        PYQ's
    </button>

    </a>
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        TextBooks
    </button>

    </a>
    
    <h3 className='txt'>
        Course Reviews-
    </h3>
    <div className='reviewcard'>
    
  {
    reviewList.map((review) =>
   {
    return review.title== initialDetails[id-1].course_title?
    <ReviewCard name={review.student_name} content={review.description } year="2022" course_title={review.title}/>
    :
    console.log("..");
  })
    
  }
        
    
    
    

    </div>
    
   

</div>
   

    
  )
}

export default CoursePage