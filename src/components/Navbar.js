import React from "react";
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import SearchBar from "./SearchBar"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from "../images/logo.png";
import "../index.css"

function NavBar(props) {
  return (
    
    <Navbar>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt=""  className="logo"/></Navbar.Brand>
      <Navbar.Toggle />
    <SearchBar/>
   
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Create account.<a style={{color:"blue"}} href="#login" > It’s free!</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  );
}

export default NavBar;