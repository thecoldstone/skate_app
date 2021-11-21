import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import Image from 'react-bootstrap/Image'

import place_1_image from '../../pictures/spots/spot2.jpg';
import './Spot.css';

import Chat from './Chat';

function Spot() {

    const [spot, setSpot] = useState({});
    let [searchParams, setSearchParams] = useSearchParams();
    let spotId = searchParams.get("id");

    useEffect(() => {
        const fetchSpotData = async () => {
            try {
                let response = await axios.post('/spot', JSON.stringify({'id': spotId}));
                let data = await response.data;
                setSpot(data);
                console.log(data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
    }, [])

    return (
        <Container fluid>
            <Row>
                <Image resizeMode="cover" src={place_1_image}/>
            </Row>
            <Row className="header">
                <h1>{spot.name}</h1>
            </Row>
            <Chat className="chat" spot={spot}/> 
        </Container>
    )
}

export default Spot;
