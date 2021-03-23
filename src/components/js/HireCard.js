import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, CardGroup } from 'react-bootstrap';
import image16 from '../../image/16.png'
import image17 from '../../image/17.png'
import '../css/HireCard.css';
const CardComponent3 = () =>
(
    <CardGroup style={{ marginTop: "190px" }}>
        <Card style={{ width: '18rem', marginLeft: "400px", marginRight: "10px" }}>
            <Card.Img class="img-17" variant="top" src={image16} />
            <Card.Body>
                <Card.Title style={{ marginLeft: "90px" }}>Contract</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup style={{ marginLeft: "20px" }} className="list-group-flush">
                    <ListGroupItem >Add to your time as needed</ListGroupItem>
                    <ListGroupItem >Convert to full-time anytime</ListGroupItem>
                    <ListGroupItem >Convenient payment options</ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Body>
                <Button style={{ marginLeft: "60px" }} variant="primary ">Post a Contract Role</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginLeft: "10px", marginRight: "400px" }}>
            <Card.Img class="img-16" variant="top" src={image17} />
            <Card.Body>
                <Card.Title style={{ marginLeft: "90px" }}>Full Time</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup style={{ marginLeft: "20px" }} className="list-group-flush">
                    <ListGroupItem>Add best local professionals</ListGroupItem>
                    <ListGroupItem>90 day money back gauarantee</ListGroupItem>
                    <ListGroupItem>50% less than traditional staffing agency</ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Body>
                <Button style={{ marginLeft: "60px" }} variant="primary ">Post a Full-Time Role</Button>
            </Card.Body>
        </Card>
    </CardGroup>


)

export default CardComponent3;