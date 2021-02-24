import React from 'react'; 

import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container'; 
import Button from 'react-bootstrap/Button'; 
import NavbarComponent from './components/Navbar';

// App function is created which contains the html 
// code that is displayed in the webpage 
const App = () => ( 
  <div>
    <NavbarComponent/>
  
  
    
    <Jumbotron> 
      <h1 className="header">Welcome To React-Bootstrap</h1> 
      <Button variant="danger">Click here</Button> 
    </Jumbotron> 
  
  </div>
); 
  
export default App; 
