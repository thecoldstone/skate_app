import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


import profile_image from '../pictures/profile/profile_main.png';
import place_1_image from '../pictures/profile/place_1.png';
import place_2_image from '../pictures/profile/place_2.png';

import video_1_image from '../pictures/profile/video_1.png';
import video_2_image from '../pictures/profile/video_2.png';
import video_3_image from '../pictures/profile/video_3.png';


import './Profile.css'

function Profile () {

    // const [user, setUser] = useState({});

    // let history = useHistory();

    // const userAuth = useAuthState();

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const response = await fetchProfile({'id': userAuth.uid}, true);
    //         if (!response) history.push('/');
    //         setUser(response);
    //     };
    //     fetchUserData();
    // }, []);

    return (
       <Container>
            <Row>
                <Col xl="auto">
                    <Image src={profile_image} roundedCircle />
                </Col>
                <Col>
                    <Row className="text">
                        <h1>Oleksii Korniienko</h1>
                    </Row>
                    <Row xl={2}>
                        <Button variant="light" className="button" as="input" type="button" value="Change profile data" />{' '}
                    </Row>
                </Col>
            </Row>

            <Row className="limiter">
                <Col>
                    Places
                </Col>
            </Row>

            <Row className="place_row">
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
            <Row className="place_row">
                <Col xl="auto" className="place_icon">
                    <Image className="group_img" src={place_2_image} roundedCircle />
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
                <Col xl="auto" className="place_videos">
                    <Container className="horizontal-scrollable">
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
                                <Image className="video_img" src={video_2_image}/>
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
                                <Image className="video_img" src={video_2_image}/>
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
            <Row className="place_row">
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
                <Col xl="auto" className="place_videos">
                    <Container className="horizontal-scrollable">
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
                                <Image className="video_img" src={video_2_image}/>
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
            <Row className="place_row">
                <Col xl="auto" className="place_icon">
                    <Image className="group_img" src={place_2_image} roundedCircle />
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
                <Col xl="auto" className="place_videos">
                    <Container className="horizontal-scrollable">
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
                                <Image className="video_img" src={video_1_image}/>
                            </a>
                        </Col>
                    </Container>
                </Col>
            </Row>
            <Row className="place_row">
                <Col xl="auto" className="place_icon">
                    <Image className="group_img" src={place_2_image} roundedCircle />
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
                                <Image className="video_img" src={video_2_image}/>
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
            <Row className="place_row">
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
                <Col xl="auto" className="place_videos">
                    <Container className="horizontal-scrollable">
                        <Col className="col-xs-4 text-center">
                            <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                <Image className="video_img" src={video_1_image}/>
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
                                <Image className="video_img" src={video_2_image}/>
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
            <Row className="place_row">
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
                <Col xl="auto" className="place_videos">
                    <Container className="horizontal-scrollable">
                        <Col className="col-xs-4 text-center">
                            <a href="https://www.youtube.com/watch?v=MlcRss1uzS0">
                                <Image className="video_img" src={video_1_image}/>
                            </a>
                        </Col>
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
                                <Image className="video_img" src={video_2_image}/>
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
            
        </Container>
    )
}
export default Profile;