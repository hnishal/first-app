import React from "react";
import image1 from '../../image/1.jpg'
import image2 from '../../image/2.jpg'
import image3 from '../../image/3.jpg'
import { Carousel } from "react-bootstrap";
import '../css/Carousel.css';
const NavbarComponent = () =>
(
  <Carousel>
    <Carousel.Item>
      <img
        className="img-1 d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="caption">Your Work, Your Choice</h3>
        <p>Hire the most in demand professionals</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-2 d-block w-100"
        src={image2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Hire or Work, your choice</h3>
        <p>Take your project from top professionals</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-3 d-block w-100"
        src={image3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Concept to Completion</h3>
        <p>A path for your own success or opportunities for others.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
export default NavbarComponent;
