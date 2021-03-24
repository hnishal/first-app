import React from 'react';

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import NavbarComponent from './Navbar';
import CarouselComponent from './Carousel';
import CardComponent from './Card';
import CardComponent2 from './DisableCard';
import ListComponent from './TopSkills';
import CardComponent3 from './HireCard';
import ButtonComponent from './Button';
import Footer from './Footer';

const myStyle = {
    textAlign: "center",
    marginTop: "130px"
  }
const HomeComponent = () => {
    return(
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
    <div style={{backgroundColor:"black"}}>
      <div><Footer /></div>
    </div>
    </div>
    )
}
export default HomeComponent;