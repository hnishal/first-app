import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import '../css/DisableCard.css'
import image11 from '../../image/11.png'
import image12 from '../../image/12.png'
import image13 from '../../image/13.png'
import image14 from '../../image/14.jpg'
const CardComponent2 = () =>
(
  <div style={{ marginLeft: "150px", marginRight: "150px" }}>
    <CardDeck style={{ marginTop: "190px" }}>
      <Card style={{ borderStyle: "none" }}>
        <Card.Img class="img" variant="top" src={image11} />
        <Card.Body>
          <Card.Title style={{ marginLeft: "90px" }}>Find</Card.Title>
          <Card.Text>
            Post your role for free, let us know what you need and we'll match you with the best available professional for your team.
      </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ borderStyle: "none" }}>
        <Card.Img class="img" variant="top" src={image12} />
        <Card.Body>
          <Card.Title style={{ marginLeft: "90px" }}>Hire</Card.Title>
          <Card.Text>
            Search our curated community of professsionals now or let our talent managers find you the perfect addition to your team.
      </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ borderStyle: "none" }}>
        <Card.Img class="img" variant="top" src={image13} />
        <Card.Body>
          <Card.Title style={{ marginLeft: "90px" }}>Work</Card.Title>
          <Card.Text>
            Leave the negotiations up to us. Whether you hire contract or dull-time, choose from our flexible payment options.
      </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ borderStyle: "none" }}>
        <Card.Img class="img" variant="top" src={image14} />
        <Card.Body>
          <Card.Title style={{ marginLeft: "90px" }}>Pay</Card.Title>
          <Card.Text>
            Invoicing and payments occur through CTM Connects. Payments are protected through our secure site.
      </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
)

export default CardComponent2;