import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import Header from './Header';
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
        <Container fluid="md">
            <Row>
                <Header spot={spot}/>
                <Chat spot={spot}/> 
            </Row> 
        </Container>
    )
}

export default Spot;
