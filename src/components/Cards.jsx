import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
export default function Cards(props) {
  return (
    <div>
    <Card style={{ width: '48rem' }}>
    <Card.Img variant="top" src={props.img}  style={{ width: '48rem' ,height:"20rem" }} />
    <Card.Body>

      <Card.Title>{props.title}</Card.Title>
      <Card.Text>

      
      <Container>
     
      <div className="text">
       {props.text}
       </div>
       
      
       
     <div className="d-flex flex-row-reverse">
     <Dropdown className="dropdown">
     <Dropdown.Toggle variant="secondary" id="dropdown-basic">
       ...
     </Dropdown.Toggle>
 
     <Dropdown.Menu>
       <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
      </div>

    
     
       </Container>
       
      </Card.Text>
    <p>{props.p}</p>
    <br />
    
    
    <div className="d-flex flex-row mb-3 ">
    <img src={props.img2} alt=""  className='Cardimg2'/>
    <div className="text">
    {props.name}
    </div>
    </div>
      
       
    <div className="d-flex flex-row-reverse">
    <button className='small btn btn-light' > share</button>
    <button className='small btn btn-light' > views</button>
    
     </div>
     
    
    </Card.Body>
  </Card>
  
    </div>
  )
}
