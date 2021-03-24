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
import LoginComponent from './components/js/Login';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import HomeComponent from './components/js/Home';
// import modelCompoenent from './components/js/modalLogin';

//import { render } from '@testing-library/react';
// App function is created which contains the html 
// code that is displayed in the webpage 

const App = () => {
  const login = () => {
    return (
      <LoginComponent />
    )
  } 
  const home = () => {
    return(
      <HomeComponent />
    )
  }
  return(

    <div>
      
    <BrowserRouter >
    <Switch> 
    <Route path = "/home" component = {home} />
    <Route path = "/login" component = {login} />
    <Redirect to = "/home" />
    </Switch>
    </BrowserRouter>
    </div>
);}
export default App;