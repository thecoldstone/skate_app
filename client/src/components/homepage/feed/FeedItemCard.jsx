/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { BsFillCalendarEventFill, BsFillHeartFill, BsCameraVideoFill, BsFillPeopleFill } from 'react-icons/bs';
import { MdInsertPhoto, MdSkateboarding, MdLocationOn, MdFreeCancellation } from 'react-icons/md';
import mapboxgl from '!mapbox-gl';
import { useAuthState, useApiContext, useAlertContext } from '../../AppContext';
import MapContext from '../map/MapContext';
import styles from './FeedItemCard.module.css';

/**
 * Feed Item Card Component
 * 
 * @param {Object} props 
 * @returns {React.FC}
 */
function FeedItemCard(props) {

    const navigate = useNavigate();

    const { map, currentState } = useContext(MapContext);

    const { setAlertContent, setVisible } = useAlertContext();
    const api = useApiContext();
    const user = useAuthState(); //  current user is in local storage

    const [participants, setParticipants] = useState(0);
    const [joined, setJoined] = useState(false);
    const [likeButton, setLikeButton] = useState("like");

    React.useEffect(() => {
        let participants = props.feature.properties.participants;

        if (participants && participants.includes(user.id)) {
            setJoined(true);
        } else {
            setJoined(false);
        }
        setParticipants(props.feature.properties.members);
    }, [props.feature.properties.participants]);

    React.useEffect(() => {
        if (props.feature.isFavourite) {
            setLikeButton("dislike")
        } else {
            setLikeButton("like")
        }
    }, [props.feature.isFavourite]);

    /**
     * Creates Pop up for Tab Feed item and flies to it
     * 
     * @param {React.MouseEvent} e 
     */
    const onClickItem = (e) => {
        e.preventDefault();
        flyToPlace(props.feature)
        createPopUp(props.feature)
    };

    /**
     * Flies to place
     * 
     * @param {*} feature geojson object
     * @returns {void}
     */
    const flyToPlace = (feature) => {
        // Assure that map does exist in the App Context
        if (map.current != null) {
            map.current.flyTo({
                center: feature.geometry.coordinates,
                zoom: 15
            });
        };
    };

    /**
     * Creates pop ups
     * 
     * @param {*} feature geojson object
     * @returns {void}
     */
    const createPopUp = (feature) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        const popUp = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
                `<div><h3>${feature.properties.title}</h3><p>${feature.properties.description}</p></div>`
            )
            .addTo(map.current)
    };

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
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
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
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
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

    const renderIcon = () => {
        if (props.type === "spot") {
            return <MdSkateboarding size="0.7em" />
        } else if (props.type === "video") {
            return <BsCameraVideoFill size="0.7em" />
        } else if (props.type === "event") {
            return <BsFillCalendarEventFill size="0.5em" />
        } else if (props.type === "photo") {
            return <MdInsertPhoto size="0.7em" />
        }
    }

    /**
     * Handles button
     * 
     * @param {React.MouseEvent} e 
     */
    const handleSpotButton = (e) => {
        e.preventDefault();

        // Navigate to specific spot
        navigate(`/spot?id=${props.id}`);
    }

    const getButtonText = () => {
        if (props.type === "spot") {
            return "Explore"
        } else if (props.type === "video") {
            return "Watch"
        } else if (props.type === "event") {
            return "Join"
        } else if (props.type === "photo") {
            return "Watch"
        }
    }

    const getHandler = () => {
        if (props.type === "spot") {
            return (e) => handleSpotButton(e)
        } else if (props.type === "video") {
            return (e) => handleSpotButton(e)
        } else if (props.type === "photo") {
            return (e) => handleSpotButton(e)
        }
    }

    const renderButton = () => {
        let text = getButtonText();
        let handler = getHandler();
        if (props.type === "event") {
            return (
                <>
                    {joined
                        ? (<Button
                            style={{ borderRadius: "11px" }}
                            variant='danger'
                            onClick={(e) => handleLeaveButton(e, props.id)}
                        ><MdFreeCancellation /></Button>)
                        : (<Button
                            onClick={(e) => handleJoinButton(e, props.id)}
                        >{text}</Button>)}
                </>
            )
        } else {
            return (
                <Button
                    onClick={e => handler(e)}
                >{text}</Button>
            )
        }
    }

    const handleLikeItem = (e, itemId) => {
        e.preventDefault();

        api.post(
            '/likeItem',
            JSON.stringify({
                'userId': user.id,
                'itemId': itemId
            })
        )
            .then((res) => {
                setLikeButton("dislike");

                // Prepare Alert 
                setAlertContent("Added to liked", "success");
                setVisible(true);
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const handleDislikeItem = (e, itemId) => {
        e.preventDefault();

        api.post(
            '/dislikeItem',
            JSON.stringify({
                'userId': user.id,
                'itemId': itemId
            })
        )
            .then((res) => {
                setLikeButton("like");

                // Prepare Alert 
                setAlertContent("Removed from liked", "success");
                setVisible(true);
                setTimeout(() => {
                    setVisible(false)
                }, 5000);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const renderButtons = () => {
        return (
            <>
                {likeButton === "dislike"
                    ? (<Button
                        variant='link'
                        style={{ color: "#e63946" }}
                        onClick={(e) => handleDislikeItem(e, props.id)}
                    ><BsFillHeartFill /></Button>)
                    : (<Button
                        variant='link'
                        style={{ color: "rgba(0,0,0,.1)" }}
                        onClick={(e) => handleLikeItem(e, props.id)}
                    ><BsFillHeartFill /></Button>)
                }
                {renderButton()}
            </>
        )
    }

    return (
        <>
            {
                currentState.key === "favourite" && likeButton === "like"
                    ? (null)
                    : (
                        <Row
                            id={`feed-item-${props.id}`}
                            className={styles.feed_item}
                            onClick={(e) => onClickItem(e)}
                        >
                            <Col sm={9}>
                                <Row className="mt-3">
                                    <h4 className={styles.forma_djr_medium}>
                                        {renderIcon()} {props.title}
                                    </h4>
                                </Row>
                                <Row className="mx-1">
                                    <Col>
                                        <Row className="mt-2">{props.description}</Row>
                                        <Row className="mt-2">
                                            <Col>
                                                <Row>
                                                    <Col style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                        <BsFillPeopleFill size="1em" />
                                                        <p style={{ marginTop: "1em" }}>{participants} participants</p>
                                                        <MdLocationOn size="1.5em" />
                                                        <p style={{ marginTop: "1em" }}>{props.feature.properties.address}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} style={{ padding: "0" }}>
                                <div style={{
                                    position: "absolute",
                                    marginLeft: "-4rem",
                                    zIndex: "0",
                                    marginTop: "10px"
                                }}>
                                    {renderButtons()}
                                </div>
                                <Image fluid src={props.feature.properties.image} style={{
                                    objectFit: "cover",
                                    borderRadius: "0 10px 10px 0",
                                    height: "100%"
                                }} />
                            </Col>
                        </Row>
                    )
            }
        </>
    );
}

export default FeedItemCard;