
import React from 'react'
var reviews = [
    {
      id: 1,
      course_title: "PHY524",
      name: "Kanav Singh Chauhan",
      content:"The course taught us about various aspects of physics..........................",
      year:"Y2022"

    },
    {
      id: 2,
      course_title: "MSE302",
      name: "Kanav Singh Chauhan",
      content:"The course taught us about various aspects of physics..........................",
      year:"Y2022"
    },
    {
      id: 3,
      course_title: "MSE301",
      name: "Kanav Singh Chauhan",
      content:"The course taught us about various aspects of physics..........................",
      year:"Y2022"
    },
    {
      id: 4,
      course_title: "MSE201",
      name: "Kanav Singh Chauhan",
      content:"The course taught us about various aspects of physics..........................",
      year:"Y2022"
    },
    {
      id: 5,
      course_title: "CS201A",
      name: "Kanav Singh Chauhan",
      content:"The course taught us about various aspects of physics..........................",
      year:"Y2022",
    },
  ];
  


  
  function coursereviews(props) {
    reviews.concat({
      name:props.name,
      course_title:props.course_title,
      content:props.content,
    })
    return (
      <div> 

      </div>
    )
  }
  
  export {coursereviews,reviews}