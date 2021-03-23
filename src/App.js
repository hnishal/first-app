import React from 'react';

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import NavbarComponent from './components/js/Navbar';
import CarouselComponent from './components/js/Carousel';
import CardComponent from './components/js/Card';
import CardComponent2 from './components/js/DisableCard';
import ListComponent from './components/js/TopSkills';
import CardComponent3 from './components/js/HireCard';
import ButtonComponent from './components/js/Button';
import Footer from './components/js/Footer';
// import modelCompoenent from './components/js/modalLogin';

//import { render } from '@testing-library/react';
// App function is created which contains the html 
// code that is displayed in the webpage 
const myStyle = {
  textAlign: "center",
  marginTop: "130px"
}
const App = () => (
  <div>
    <NavbarComponent />
    {/* <modelCompoenent/> */}
    <CarouselComponent />
    <h1 style={myStyle}>TOP CATEGORIES</h1>
    <CardComponent />
    <h1 style={myStyle}>How it Works</h1>
    <CardComponent2 />
    <h1 style={myStyle}>Browse Top Skills</h1>
    <ListComponent />
    <h1 style={myStyle}>Hire Flexibly</h1>
    <CardComponent3 />
    <h1 style={{ marginTop: "90px", textAlign: "center", marginBottom: "90px" }}>Join Our Community</h1>
    <ButtonComponent />
    <Footer />
  </div>
);
export default App;
