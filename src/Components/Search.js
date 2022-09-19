import React from 'react';
import {BsSearch}  from "react-icons/bs";


const Search = ({setSearchName}) => {
  return (
    <div>
    <BsSearch style={{ color:"white", marginRight:"20px" }}></BsSearch>
      <input style={{ backgroundColor:"lightGrey" ,padding :"10px 200px"  ,borderRadius:"10px"}}  placeholder='search for movie' onChange={(e)=>setSearchName(e.target.value)}/>
    </div>
  )
}

export default Search
