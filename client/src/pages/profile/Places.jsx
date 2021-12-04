import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useApiContext } from '../../components/AppContext';

function Places({userInfo, userId}) {
    const navigate = useNavigate();
    const api = useApiContext();

    function open_spot(spotId) {
        navigate("/spot?id=" + spotId);
    }

    function remove_video(spotId, videoId) {
        api.post('/edit_spot', JSON.stringify({'spot_id':spotId , 'video_id': videoId, 'user_id': userId}));
        window.location.reload();
    }

    return (
        <Container fluid="md">
            {userInfo.my_spots.map((spot, spot_id) =>
                <Row key={spot_id}>
                    <Row md="auto" className="place_row">
                        <Col md="auto">
                            <Image className="group_img" src={userInfo.my_spots_info[spot].image} roundedCircle />
                        </Col>
                        <Col md="auto" className="place_info">
                            <Row className="text">
                                {userInfo.my_spots_info[spot].name}
                            </Row>
                            <Row className="text">
                                {userInfo.my_spots_info[spot].user_ranks[userId]}
                            </Row>
                            <Row>
                                <Button variant="light" className="place_button" as="input" type="button" value="Open group page" onClick={() => open_spot(spot)}/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="auto">
                            <Container className="horizontal-scrollable">
                                {userInfo.my_spots_info[spot]["videos"].map((video, video_id) =>
                                    <Col className="col-xs-4" key={video_id}>
                                        <Col className="text-right">
                                            <Button variant="light" className="remove_video_button" as="input" value="x" onClick={() => remove_video(spot, video_id)}/>
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
                </Row>
            )}
        </Container>
    )
}

export default Places;