import React from 'react'
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { FaBeer } from 'react-icons/fa';
// import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { Paper, IconButton } from '@mui/material';
import '../index.css';

// import { useNavigate } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
export default function searchbar() {
  
  return (
//     <div class="container">
//   <form class="mx-auto my-3">
//     <div class="input-group">
//       <input type="text" class="form-control" placeholder="Search"/>
//       <div class="input-group-append">
//         <button class="btn btn-outline-secondary" type="button">
//           <i class="fas fa-search"></i>
//         </button>
//       </div>
//     </div>
//   </form>
// </div>
// <div className="searchbar mx-auto">

//  <i class="fas fa-search"></i>
         

// </div>


<Paper className="mx-5" 
      component='form'
      
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pr: 1,
        
      
        boxShadow: 'none',
        mr: { sm: 10 },
        alignItems: "center"
      }}
    >
   
    <IconButton type='submit' sx={{ p: '10px', color: 'grey' }} aria-label='search'>
    <SearchIcon sx={{ display: "flex", }} className="searchlogo"/> Search for your favorite groups in ATG
  </IconButton>
    </Paper>
    // </>

   

  )
}
// <input
//         className='search-bar'
//         placeholder='Search...'
      
        
//       />