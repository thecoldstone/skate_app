import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
                    <Row xl="auto" className="place_row">
                        <Col xl="auto" className="place_icon">
                            <Image className="group_img" src={userInfo.my_friends_info[friend].image} roundedCircle />
                        </Col>
                        <Col xl="auto" className="place_info">
                            <Row className="text">
                                {userInfo.my_friends_info[friend].name}
                            </Row>
                            <Row>
                                <Button variant="light" className="place_button" as="input" type="button" value="Open friend profile" onClick={() => open_friend(friend)}/>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            )}
        </Container>
    )
}

export default Friends;