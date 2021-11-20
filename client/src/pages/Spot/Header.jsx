import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import place_1_image from '../../pictures/spots/spot1.jpg';
import './Header.css';

function Header({spot}) {
    return (
        <Row >
            <Col className="main-image">
                <Row >
                    <Image src={place_1_image}/>
                </Row>
                <Row className="header">
                    <h1>{spot.name}</h1>
                </Row>
            </Col>
        </Row> 
    )
}

export default Header;
