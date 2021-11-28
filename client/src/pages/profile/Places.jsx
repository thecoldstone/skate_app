import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Places({userInfo, userId}) {
    const navigate = useNavigate();

    function open_spot(spotId) {
        navigate("/spot?id=" + spotId);
    }

    return (
        <Container fluid="md">
            {userInfo.my_spots.map((spot, spot_id) =>
                <Row key={spot_id}>
                    <Row xl="auto" className="place_row">
                        <Col xl="auto" className="place_icon">
                            <Image className="group_img" src={userInfo.my_spots_info[spot].image} roundedCircle />
                        </Col>
                        <Col xl="auto" className="place_info">
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
                        <Col xl="auto" className="place_videos">
                            <Container className="horizontal-scrollable">
                            {userInfo.my_spots_info[spot]["videos"].map((video, video_id) =>
                                <Col className="col-xs-4 text-center" key={video_id}>
                                    <iframe
                                        className = "video_img" 
                                        src="https://www.youtube.com/embed/z-99see1eKw">
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