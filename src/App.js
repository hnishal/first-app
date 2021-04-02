import React from 'react';
import NavbarComponent from './components/js/Navbar';
import CarouselComponent from './components/js/Carousel';
import CardComponent from './components/js/Card';
import CardComponent2 from './components/js/DisableCard';
import ListComponent from './components/js/TopSkills';
import CardComponent3 from './components/js/HireCard';
import ButtonComponent from './components/js/Button';
import LoginComponent from './components/js/Login';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import HomeComponent from './components/js/Home';
import SignupComponent from './components/js/Signup';
import ProfileComponent from './components/js/Profile';
import DashboardComponent from './components/js/Dashboard';
import ProfileformComponent from './components/js/Settings';
import PasswordComponent from './components/js/Password';
const App = () => {
  const login = () => {
    return (
      <LoginComponent />
    )
  } 
  const Signup = () => {
    return (
      <SignupComponent />
    )
  } 
  const profile = () => {
    return(
      <ProfileComponent />
    )
  }
  const Dashboard = () => {
    return(
      <DashboardComponent />
    )
  }
  const Settings = () => {
    return(
      <ProfileformComponent />
    )
  }
  const password = () => {
    return(
      <PasswordComponent />
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
    <Route path='/Signup' component ={Signup}/>
    <Route path='/profile' component ={profile}/>
    <Route path='/Dashboard' component ={Dashboard}/>
    <Route path='/Settings' component ={Settings}/>
    <Route path='/password' component ={password}/>
    <Redirect to = "/home" />
    </Switch>
    </BrowserRouter>
  
    </div>
);}
export default App;