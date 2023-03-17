
import NavBar from './components/Navbar';
import Cards from "./components/Cards";

import './App.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import TopSection from './components/TopSection';
import SideBar from './components/SideBar';
import MiddleSection from './components/MiddleSection';



function App() {
  return (
    <div>
    <NavBar />
    <TopSection/>
   <MiddleSection/>
   
    </div>
    

  );
}

export default App;
