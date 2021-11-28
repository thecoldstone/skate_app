import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
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
                setSpot(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
    }, [])

    async function add_spot_in_list() {
        let request = {
            "id" : "actual_user",
            "spot_id" : spotId
        };
        let response = await axios.post('/editProfile', JSON.stringify(request));
        console.log(response.data);
    }

    return (
        <Container fluid>
            <Row>
                <Image resizeMode="cover" src={place_1_image}/>
            </Row>
            <Row className="header">
                <h1>{spot.name}</h1>
                <Button variant="dark" className="button" as="input" type="button" value="+" onClick={add_spot_in_list}/>
            </Row>
            <Chat className="chat" spot={spot} spotId={spotId}/> 
        </Container>
    )
}

export default Spot;
