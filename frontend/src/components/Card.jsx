import React from 'react';
import "./Card.css";
import { useNavigate} from 'react-router-dom';
import { Input } from '@mui/material';

function Card({person}) {
  const navigate=useNavigate();
  const [goToCourse,setGoToCourse]=React.useState(false);
  if(goToCourse) {
    return navigate('/coursepage',{state:{name:person.name,id:person.id}})
  }

	return(
    <div class="row">
    <div class="card" onClick={()=>setGoToCourse(true)}>
        <h2>{person.course_title}</h2>
        <p>{person.name}</p>
        
        
    </div>
</div>
	);
}

export default Card;