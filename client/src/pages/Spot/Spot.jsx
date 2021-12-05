/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useApiContext, useAuthState } from '../../components/AppContext';

import "./Spot.css"
import SpotContent from './SpotContent';
import SpotImage from './SpotImage';

function Spot() {
    const [spot, setSpot] = useState({});
    const api = useApiContext();
    const currentUser = useAuthState();

    let [searchParams, setSearchParams] = useSearchParams();
    let spotId = searchParams.get("id");

    useEffect(() => {
        const fetchSpotData = async () => {
            try {
                let response = await api.post('/spot', JSON.stringify({
                    'id': spotId, 'user_id': currentUser.id
                }));
                setSpot(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchSpotData();
    }, [])

    const renderSpotImage = () => {
        if (spot.image)
        {
            return (
                <Row className="image-container" style={{ 
                    backgroundImage: `url(${spot.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div
                    className="text-white text-center d-flex align-items-center py-5 justify-content-center"
                    style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
                        <div>
                            <h3 className="pink-text">
                                {spot.name}
                            </h3>
                            <p>
                                {spot.description}
                            </p>
                            <p><FontAwesomeIcon icon={faVideo}/> {spot.videos.length} 
                               <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faUserFriends}/> {spot.comments.length}</p>
                        </div>
                    </div>
                </Row>
            )
        }
        else
        {
            return null;
        }
    }

    return (       
        <Container className="container">
            <Row>
                <Col sm={6}>
                    <Row>
                        <SpotContent spot={spot} spotId={spotId}/>
                    </Row>
                </Col>
                <Col>
                    <SpotImage spot={spot} spotId={spotId}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Spot;

