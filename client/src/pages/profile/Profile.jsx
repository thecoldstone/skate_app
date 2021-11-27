import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useNavigate, useSearchParams } from 'react-router-dom';

import instagram_icon_image from "../../pictures/icons/instagram.png";
import facebook_icon_image from "../../pictures/icons/facebook_1.png";
import tiktok_icon_image from "../../pictures/icons/tiktok.png";

import './Profile.css'


function Profile () {
    const navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("id");

    // console.log(userId)

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            let response = await axios.post('/profile', JSON.stringify({'id': userId}));
            setUserInfo(response.data);
        };
        fetchUserData();
    }, []);

    function edit_prof_button_click() {
        navigate("/editProfile?id=" + userId);
    }

    function open_spot(spotId) {
        navigate("/spot?id=" + spotId);
    }

    if (userInfo && userInfo.my_spots && userInfo.my_spots_info && userInfo.my_spots_videos) {
        return (
            <Container className="body-profile" fluid="md">
                 <Row>
                     <Col md="auto">
                         <Image src={userInfo.image} roundedCircle />
                     </Col>
                     <Col md="auto">
                         <Row className="text">
                             <h1>{userInfo.name}</h1>
                         </Row>
                         <Row md={2}>
                             <Button variant="light" className="button" as="input" type="button" value="Change profile data" onClick={edit_prof_button_click}/>
                         </Row>
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
     
                 <Row className="limiter">
                     <Col>
                         Places
                     </Col>
                 </Row>
     
     
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
                                    {userInfo.my_spots_videos[spot].map((video, video_id) =>
                                        <Col className="col-xs-4 text-center" key={video_id}>
                                            <a href={video.url}>
                                                <Image className="video_img" src={video.image}/>
                                            </a>
                                        </Col>
                                    )}
                                 </Container>
                             </Col>
                         </Row>
                     </Row>
                 )}
             </Container>
         )
    } else {
        return null;
    }
}
export default Profile;