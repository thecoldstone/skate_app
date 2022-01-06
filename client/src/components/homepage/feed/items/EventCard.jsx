/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Row, Col, Image, Button } from 'react-bootstrap';
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im';
import { MdFreeCancellation } from 'react-icons/md';
import fontStyles from '../FeedItemCard.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlertContext, useApiContext, useAuthState } from '../../../AppContext';

/**
 * Event Card Component
 * 
 * @param {*} props 
 * @returns {React.FC}
 */
function EventCard(props) {

    const navigate = useNavigate();

    const { setAlertContent, setVisible } = useAlertContext();
    const api = useApiContext();
    const user = useAuthState(); //  current user is in local storage

    const [participants, setParticipants] = React.useState(0);
    const [joined, setJoined] = React.useState(false);

    React.useEffect(() => {
        let participants = props.feature.properties.participants;

        if (participants && participants.includes(user.id)) {
            setJoined(true);
        } else {
            setJoined(false);
        }
        setParticipants(props.feature.properties.members);
    }, [props.feature.properties.participants]);


    /**
     * Handles Join button
     * 
     * @param {React.MouseEvent} e 
     * @param {String} eventId - event id as a string
     */
    const handleJoinButton = (e, eventId) => {
        // [TODO] We need to know which event exactly it is
        e.preventDefault();

        if (!isEnabled()) {
            navigate('/login');
            return;
        }

        api.post(
            '/joinEvent',
            JSON.stringify({
                'userId': user.id,
                'eventId': eventId
            })
        )
            .then((res) => {
                setParticipants(participants + 1);
                setJoined(true);

                // Prepare Alert 
                setAlertContent("Joined successfully!", "success");
                setVisible(true);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    /**
     * Handles Leave button
     * 
     * @param {React.MouseEvent} e 
     * @param {String} eventId - event id as a string
     */
    const handleLeaveButton = (e, eventId) => {
        e.preventDefault();

        api.post(
            '/leaveEvent',
            JSON.stringify({
                'userId': user.id,
                'eventId': eventId
            })
        )
            .then((res) => {
                setParticipants(participants - 1);
                setJoined(false);

                // Prepare Alert 
                setAlertContent("Leaved successfully!", "success");
                setVisible(true);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const isEnabled = () => {
        if (user.id == undefined || user.id === "") {
            return false;
        }

        return true;
    };

    return (
        <>
            <Col sm={9}>
                <Row className="mt-3"><h4 className={fontStyles.forma_djr_medium}><BsFillCalendarEventFill size="1em" /> {props.title}</h4></Row>
                <Row className="mx-1">
                    <Col>
                        <Row className="mt-2">{props.description}</Row>
                        <Row className="mt-2">
                            <Col>
                                <Row>
                                    <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <BsFillPeopleFill size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>{participants} participants</p>
                                        <ImLocation2 size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>{props.feature.properties.address}</p>
                                        {joined
                                            ? (<Button
                                                style={{ borderRadius: "11px" }}
                                                variant='danger'
                                                onClick={(e) => handleLeaveButton(e, props.id)}
                                            ><MdFreeCancellation /></Button>)
                                            : (<Button
                                                style={
                                                    !isEnabled()
                                                        ? { backgroundColor: "#b0c1f8", borderRadius: "11px", border: "none" }
                                                        : { backgroundColor: "#223A88", borderRadius: "11px" }
                                                }
                                                onClick={(e) => handleJoinButton(e, props.id)}
                                            >Join</Button>)}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
                <Image fluid src={props.feature.properties.image} style={{
                    objectFit: "cover",
                    borderRadius: "0 10px 10px 0",
                    height: "100%"
                }} />
            </Col>
        </>
    )
}

export default EventCard;