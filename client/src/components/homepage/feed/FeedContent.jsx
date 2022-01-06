/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, { useContext, useEffect, useState} from 'react';
import {Row, Col, Tab} from 'react-bootstrap';
import FeedItemCard from './FeedItemCard';
import { MapContext } from '..';

/**
 * Feed Content Component
 * 
 * @returns {React.FC}
 */
function FeedContent() {
    const {currentState, setCurrentState} = useContext(MapContext);
    const [content, setContent] = useState("Loading...");

   // Updates Tab Feed Content  
    useEffect(() => {
        if (!currentState.mapData) return;
        setContent(renderFeedItems());
    }, [currentState.key, currentState.mapData]);

    /**
     * Rendres tab content 
     * 
     * @returns {Tab.Content}
     */
    const renderFeedItems = () => {
        return(
            <Tab.Content>
                <Tab.Pane eventKey="all">
                    <Col>
                        {mapItems("all")}
                    </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="events">
                    <Col>
                        {mapItems("event")}
                    </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="spots">
                    <Col>
                        {mapItems("spot")}
                    </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="videos">
                    <Col>
                        {mapItems("video")}
                    </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="photos">
                    <Col>
                        {mapItems("photo")}
                    </Col>
                </Tab.Pane>
            </Tab.Content>
        )
    }

    /**
     * Maps and returns Feed Item Cards
     * 
     * @returns {FeedItemCard}
     */
    const mapItems = () => {
        return (
            <>
                {
                    currentState.mapData.features.map((item, key) => {
                        return(
                                <FeedItemCard
                                    id={item.properties.id}
                                    key={key}
                                    title={item.properties.title}
                                    description={item.properties.description}
                                    type={item.properties.type}
                                    feature={item}
                                />
                            )
                        })
                }
            </>
        )
    }

    return(
        <Row style={{marginTop: "80px"}}>
            {content}
        </Row>
    );
};

export default FeedContent;