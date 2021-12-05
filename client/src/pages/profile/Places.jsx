import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import { useApiContext } from '../../components/AppContext';

function Places({userInfo, userId}) {
    const navigate = useNavigate();
    const api = useApiContext();

    function openSpot(spotId) {
        navigate("/spot?id=" + spotId);
    }

    function removeVideo(spotId, videoId) {
        api.post('/editSpot', JSON.stringify({
            'spot_id':spotId , 'video_id': videoId, 'user_id': userId
        }));
        window.location.reload();
    }

    function renderVideos(spot) {
        if (userInfo.spot_info[spot]["videos"].length) {
            return (
                <Row>
                    <Col md="auto">
                        <Container className="horizontal-scrollable">
                            {userInfo.spot_info[spot]["videos"].map((video, video_id) =>
                                <Col className="col-xs-4" key={video_id}>
                                    <Col className="text-right">
                                        <FontAwesomeIcon 
                                        icon={faTimes} 
                                        size="1x" cursor='pointer' 
                                        onClick={e => removeVideo(spot, video_id)}
                                        />
                                    </Col>
                                    <iframe
                                        className = "video_img" 
                                        src={video.url}>
                                    </iframe>
                                </Col>
                            )}
                        </Container>
                    </Col>
                </Row>
            )
        }
        else {
            return null;
        }
        
    }

    return (
        <Container fluid="md">
            {userInfo.spots.map((spot, spot_id) =>
                <Row key={spot_id}>
                    <Row md="auto" className="place_row">
                        <Col md="auto">
                            <Image className="group_img" src={userInfo.spot_info[spot].image} roundedCircle />
                        </Col>
                        <Col md="auto" className="place_info">
                            <Row className="text">
                                {userInfo.spot_info[spot].name}
                            </Row>
                            <Row className="text">
                                Rank: {userInfo.spot_info[spot].user_ranks[userId]}
                            </Row>
                            <Row>
                                <Button
                                variant="light"
                                className="place_button"
                                type="button"
                                onClick={() => openSpot(spot)}>
                                    Open group page    
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                   {renderVideos(spot)}
                </Row>
            )}
        </Container>
    )
}

export default Places;