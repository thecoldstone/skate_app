/**
 * Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
 */

import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import { useApiContext } from '../../components/AppContext';

function Places({userInfo, userId}) {
    const api = useApiContext();

    function removeVideo(spotId, videoId) {
        api.post('/editSpot', JSON.stringify({
            'spot_id':spotId , 'video_id': videoId, 'user_id': userId
        }));
        window.location.reload();
    }

    function renderVideos(spot) { // videos horizontal scrollable list
        if (userInfo.spot_info[spot]["videos"].length) {
            return (
                <Row>
                    <Col md="auto">
                        <Container className="horizontal-scrollable"> {/*go through all videos and create iframe & delete button for everyone*/}
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
                            <a href={"/spot?id=" + spot}>
                            <Image className="group_img" src={userInfo.spot_info[spot].image} roundedCircle /> {/*spot image*/}
                            </a>
                        </Col>
                        <Col md="auto" className="place_info">
                            <Row className="text">
                                {userInfo.spot_info[spot].name}
                            </Row>
                            <Row className="text">
                                Rank: {userInfo.spot_info[spot].user_ranks[userId]} {/*user`s rank on this spot image*/}
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