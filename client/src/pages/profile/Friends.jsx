import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import instagram_icon_image from "../../pictures/icons/instagram.png";
import facebook_icon_image from "../../pictures/icons/facebook_1.png";
import tiktok_icon_image from "../../pictures/icons/tiktok.png";

function Friends({userInfo}) {
    const navigate = useNavigate();

    function open_friend(friendId) {
        navigate("/profile?id=" + friendId);
        window.location.reload();
    }

    return (
        <Container fluid="md">
            {userInfo.my_friends.map((friend, friend_id) =>
                <Row key={friend_id}>
                    <Row md="auto" className="place_row">
                        <Col md="auto" className="place_icon">
                            <Image className="group_img" src={userInfo.my_friends_info[friend].image} roundedCircle />
                        </Col>
                        <Col md="auto" className="place_info">
                            <Row className="text">
                                {userInfo.my_friends_info[friend].name}
                            </Row>
                            <Row className="profile_spot_button">
                                <Button variant="light" className="place_button" as="input" type="button" value="Open friend profile" onClick={() => open_friend(friend)}/>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="friends_contacts">
                                <Col md="auto">
                                    <a href={"https://www.instagram.com/" + userInfo.my_friends_info[friend].instagram}>
                                        <Image src={instagram_icon_image}/>
                                    </a>
                                </Col>
                                <Col md="auto" className="text">
                                    @{userInfo.my_friends_info[friend].instagram}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="friends_contacts">
                                <Col md="auto">
                                    <a href={"https://www.facebook.com/" + userInfo.facebook}>
                                        <Image className="rounded_image" src={facebook_icon_image}/>
                                    </a>
                                </Col>
                                <Col md="auto" className="text">
                                    @{userInfo.my_friends_info[friend].facebook}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="friends_contacts">
                                <Col md="auto">
                                    <a href={"https://www.tiktok.com/@" + userInfo.tiktok}>
                                        <Image src={tiktok_icon_image}/>
                                    </a>
                                </Col>
                                <Col md="auto" className="text">
                                    @{userInfo.my_friends_info[friend].tiktok}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            )}
        </Container>
    )
}

export default Friends;