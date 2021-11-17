import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


import profile_image from '../pictures/profile/profile_main.png';
import place_1_image from '../pictures/profile/place_1.png';
import place_2_image from '../pictures/profile/place_2.png';

import video_1_image from '../pictures/profile/video_1.png';
import video_2_image from '../pictures/profile/video_2.png';
import video_3_image from '../pictures/profile/video_3.png';

import instagram_icon_image from "../pictures/icons/instagram.png";
import facebook_icon_image from "../pictures/icons/facebook_1.png";
import tiktok_icon_image from "../pictures/icons/tiktok.png";


import './Profile.css'

function Profile () {

    // const [user, setUser] = useState({});

    const navigate = useNavigate();

    // const userAuth = useAuthState();

    useEffect(() => {
        const fetchUserData = async () => {
            // const response = await fetchProfile({'id': userAuth.uid}, true);
            const response = await axios.get('/profile');
            // if (!response) history.push('/');
            // setUser(response);
        };
        fetchUserData();
    }, []);
    const [userName, setUserName] = useState("James Bond");

    function edit_prof_button_click() {
        navigate("/editProfile");
    }

    return (
       <Container fluid="md">
            <Row>
                <Col md="auto">
                    <Image src={profile_image} roundedCircle />
                </Col>
                <Col md="auto">
                    <Row className="text">
                        <h1>{userName}</h1>
                    </Row>
                    <Row md={2}>
                        {/* <Link to="/Edit_profile"> SOME TEXt </Link> */}
                        <Button variant="light" className="button" as="input" type="button" value="Change profile data" onClick={edit_prof_button_click}/>
                    </Row>
                </Col>
                <Col md="auto" className="text">
                    <Row className="links">
                        <Col md="auto">
                            <a href="https://www.instagram.com/">
                                <Image src={instagram_icon_image}/>
                            </a>
                        </Col>
                        <Col md="auto">
                            #someinstagram
                        </Col>
                    </Row>
                    <Row className="links">
                        <Col md="auto">
                            <a href="https://www.facebook.com/">
                                <Image className="rounded_image" src={facebook_icon_image}/>
                            </a>
                        </Col>
                        <Col md="auto">
                            #somefacebook
                        </Col>
                    </Row>
                    <Row className="links">
                        <Col md="auto">
                            <a href="https://www.tiktok.com/">
                                <Image src={tiktok_icon_image}/>
                            </a>
                        </Col>
                        <Col md="auto">
                            #sometiktok
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="limiter">
                <Col>
                    Places
                </Col>
            </Row>

            <Row>
                <Row xl="auto" className="place_row">
                    <Col xl="auto" className="place_icon">
                        <Image className="group_img" src={place_1_image} roundedCircle />
                    </Col>
                    <Col xl="auto" className="place_info">
                        <Row className="text">
                            Venice Beach
                        </Row>
                        <Row className="text">
                            Rank: 71
                        </Row>
                        <Row>
                            <Button variant="light" className="place_button" as="input" type="button" value="Open group page" />{' '}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl="auto" className="place_videos">
                        <Container className="horizontal-scrollable">
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_3_image}/>
                                </a>
                            </Col>
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_2_image}/>
                                </a>
                            </Col>
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_1_image}/>
                                </a>
                            </Col>
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_2_image}/>
                                </a>
                            </Col>
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_3_image}/>
                                </a>
                            </Col>
                            <Col className="col-xs-4 text-center">
                                <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                    <Image className="video_img" src={video_1_image}/>
                                </a>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
export default Profile;