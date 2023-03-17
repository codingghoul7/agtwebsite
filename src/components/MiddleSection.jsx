import React from 'react'
import SideBar from './SideBar';
import Cards from "./Cards";
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import LeftPannel from './LeftPannel';
import RightPannel  from './RightPannel';
export default function 
() {
  return (
    <div>
    <Container>
    <SideBar/>
    <LeftPannel/>
   
  <RightPannel/>
    </Container>
    </div>
  )
}
