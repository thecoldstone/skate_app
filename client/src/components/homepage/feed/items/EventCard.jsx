/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Row, Col, Image, Button } from 'react-bootstrap';
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im';
import fontStyles from '../FeedItemCard.module.css';
import React from 'react';

/**
 * Event Card Component
 * 
 * @param {*} props 
 * @returns {React.FC}
 */
function EventCard(props) {

    /**
     * Handles button
     * 
     * @param {React.MouseEvent} e 
     */
    const handleButton = (e) => {
        e.preventDefault();
    }

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
                                        <p style={{ marginTop: "1rem" }}>{props.feature.properties.members} participants</p>
                                        <ImLocation2 size="1.5em" />
                                        <p style={{ marginTop: "1rem" }}>{props.feature.properties.address}</p>
                                        <Button
                                            style={{ backgroundColor: "#223A88", borderRadius: "11px" }}
                                            onClick={handleButton}
                                        >Join</Button>
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