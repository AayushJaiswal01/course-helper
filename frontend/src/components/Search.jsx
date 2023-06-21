import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .course_title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {

    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredPersons={filteredPersons} />
	  		</Scroll>
	  	);
	  }
  }

  return (
    <section className="garamond">
			
      <div className="pa2">
      <h2 className='start_title'>
        Search your Courses!
      </h2>
     
    <form name="search">
        <input 
        className="searchbar"
        type = "search" 
        class="input" 

         onmouseout="this.value = ''; this.blur();"
         onChange = {handleChange}


         
        />
      <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} />

    </form>
   

</div>
			{searchList()}
		</section>
  );
}

export default Search;