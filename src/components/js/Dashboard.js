import React from 'react';
import { Navbar, Nav, Card, Button, ProgressBar } from 'react-bootstrap';
import '../css/Dashboard.css';
import image19 from '../../image/19.jpg';
import Footer from './Footer';
const DashboardComponent = () => {
  return (
    <div className="mt-2 ">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-5" >
            <Nav.Link href="#myprojects">My Projects</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#inbox">Inbox</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
            <Nav.Link href="#freecredit">Free Credit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="row mr-auto ml-auto ml-5 pl-5 mt-5 pt-2 md-5 overflow-hidden" >
        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-2 ">
          <Card>
            <Card.Header as="h5">Recent Projects</Card.Header>
            <Card.Body>
              <img class="img-responsive center-block d-block mx-auto " src={image19} />
              <Card.Text >
                <p className="mt-5 text-center">Start bidding on projects that meet your skills. </p>
              </Card.Text>
              <div class="text-center">
                <Button variant="primary" className="m-auto" >Browse Projects</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="  mr-3 col-lg-3 col-sm-3 col-md-3 little-card">
          <Card style={{ width: '14rem' }}>
            <Card.Body>
              <h6>Welcome back,</h6>
              <Card.Title>Name</Card.Title>
              <p>@username</p>
              <Card.Text>
                Set up your account
              </Card.Text>
              <div>
                <ProgressBar animated now={45} />
              </div>
              <Button className="mt-3" variant="primary" >Add your address</Button>
              <hr />
              <h8>Account Balance</h8>
              <p className="mt-2">₹0.00</p>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="mt-5 pt-5">
      <Footer  />
      </div>
    </div>

  )
}
export default DashboardComponent;