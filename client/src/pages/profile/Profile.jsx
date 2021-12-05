/**
 * Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
 */

import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import { useNavigate, useSearchParams } from 'react-router-dom';

import instagram_icon_image from "../../pictures/icons/instagram.png";
import facebook_icon_image from "../../pictures/icons/facebook_1.png";
import tiktok_icon_image from "../../pictures/icons/tiktok.png";

import './Profile.css'

import { useApiContext, useAuthState } from '../../components/AppContext';
import Places from './Places';
import Friends from './Friends';


function Profile () {
    const navigate = useNavigate();
    const currentUser = useAuthState();

    const [key, setKey] = useState('places');
    const api = useApiContext();

    let [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("id");

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            let response = await api.post('/profile', JSON.stringify({
                'id': userId, 'user_id': currentUser.id
            }));
            setUserInfo(response.data);
        };
        fetchUserData();
    }, []);

    function editProfButtonClick() {
        navigate("/editProfile?id=" + userId);
    }

    function addFriendButtonClick() {
        api.post('/editProfile', JSON.stringify({'id': currentUser.id, 'friend_id': userId}));
        window.location.reload();
    }

    function setButtonState(){
        if (currentUser.id != undefined){
            if (userId == currentUser.id){
                return (
                    <Row md={2}>
                        <Button
                        variant="light"
                        className="button"
                        type="button"
                        onClick={editProfButtonClick}>
                            Change profile data
                        </Button>
                    </Row>
                );
            } else {
                let button_text = "Add friend +";
                if (userInfo["is_in_friends_list"]) {
                    button_text = "Remove friend -"
                }
                return (
                    <Row md={2}>
                        <Button
                        variant="light"
                        className="button"
                        type="button"
                        onClick={addFriendButtonClick}>
                            {button_text}
                        </Button>
                    </Row>
                );
            }
        }
    }

    if (userInfo && userInfo.spots && userInfo.spot_info) {
        return (
            <Container className="body-profile" fluid="md">
                 <Row>
                     <Col md="auto">
                         <Image src={userInfo.image} roundedCircle className="title-panel" />
                     </Col>
                     <Col md={6}>
                         <Row className="text">
                             <h1>{userInfo.name}</h1>
                         </Row>
                         {setButtonState()}
                     </Col>
                     <Col md="auto" className="text">
                         <Row className="links">
                             <Col md="auto">
                                 <a href={"https://www.instagram.com/" + userInfo.instagram}>
                                     <Image src={instagram_icon_image}/>
                                 </a>
                             </Col>
                             <Col md="auto">
                                 @{userInfo.instagram}
                             </Col>
                         </Row>
                         <Row className="links">
                             <Col md="auto">
                                 <a href={"https://www.facebook.com/" + userInfo.facebook}>
                                     <Image className="rounded_image" src={facebook_icon_image}/>
                                 </a>
                             </Col>
                             <Col md="auto">
                                 @{userInfo.facebook}
                             </Col>
                         </Row>
                         <Row className="links">
                             <Col md="auto">
                                 <a href={"https://www.tiktok.com/@" + userInfo.tiktok}>
                                     <Image src={tiktok_icon_image}/>
                                 </a>
                             </Col>
                             <Col md="auto">
                                 @{userInfo.tiktok}
                             </Col>
                         </Row>
                     </Col>
                 </Row>
                <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                    <Row className="limiter"> 
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#places" eventKey="places">Places</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#friends" eventKey="friends">Friends</Nav.Link>
                            </Nav.Item>
                        </Nav> 
                    </Row>
                    <Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="places" >
                                <Places userInfo={userInfo} userId={userId}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="friends">
                                <Friends userInfo={userInfo}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
             </Container>
         )
    } else {
        return null;
    }
}
export default Profile;