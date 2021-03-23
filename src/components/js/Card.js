import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import image4 from '../../image/4.png'
import image6 from '../../image/6.png'
import image7 from '../../image/7.png'
import image8 from '../../image/8.jpg'
import image9 from '../../image/9.png'
import image10 from '../../image/10.jpg'
import '../css/Card.css';
const CardComponent = () =>
(
    <div >
        <CardDeck className="Card-1 ml-4 mr-5">
            <Card>
                <Card.Img className="img-4" variant="top" src={image4} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "100px" }}>Application Development</Card.Title>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img className="img-6" variant="top" src={image6} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "150px" }}>Communication</Card.Title>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img className="img-7" variant="top" src={image7} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "150px" }}>Creative</Card.Title>

                </Card.Body>

            </Card>

        </CardDeck>
        <CardDeck className="Card-2 mt-5 mr-4 ml-4">
            <Card>
                <Card.Img className="img-8" variant="top" src={image8} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "150px" }}>Big Data</Card.Title>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img className="img-9" variant="top" src={image9} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "150px" }}>Healthcare</Card.Title>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img className="img-10" variant="top" src={image10} />
                <Card.Body>
                    <Card.Title style={{ marginLeft: "150px" }}>ERP Solutions</Card.Title>

                </Card.Body>

            </Card>

        </CardDeck>
    </div>
)

export default CardComponent;