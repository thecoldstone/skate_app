/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { useContext, useEffect, useState} from 'react';
import {Row, Col, Tab} from 'react-bootstrap';
import FeedItemCard from './FeedItemCard';
import { MapContext } from '..';

function FeedContent() {
    const {currentState} = useContext(MapContext);
    const [content, setContent] = useState("Loading...");

    useEffect(() => {
        if (!currentState.mapData) return;
        setContent(renderFeedItems());
    }, [currentState.key, currentState.mapData]);

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

    const mapItems = (type) => {
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