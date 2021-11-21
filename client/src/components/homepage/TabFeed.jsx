import { useState, useEffect } from 'react';
import {Row, Col, Nav, Tab} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import FeedItemCard from './FeedItemCard';

function setCurrentTabByHash(hash) {
    const pattern = new RegExp('^#(all|events|places|videos|photos)$')

    if (pattern.test(hash)) {
        return hash.slice(1, hash.length);
    }

    return 'all';
}

function renderFeedItems() {
    const items = [
        {title: 'Workshop', img: 'skatepark_img_1.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'Skate Fest', img: 'skatepark_img_2.png', location: 'Brno-Židenice, Juliánov'}, 
        {title: 'New skatepark', img: 'skatepark_img_1.png'}];
    const output = [];

    items.forEach((item, index) => {
        output.push(
            <FeedItemCard 
                title={item.title} 
                img={item.img}
                location={item.location} 
                key={index}
            />
        )
    });

    return (
        <Col>
            {output}
        </Col>
    )
};

function TabFeed() {
    const [key, setKey] = useState('all');
    const location = useLocation();

    useEffect(() => {
        setKey(setCurrentTabByHash(location.hash));
    }, []);

    return(
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                                <Row className="mt-sm-2"> 
                                    <Nav variant="pills">
                                        <Nav.Item>
                                            <Nav.Link href="#all" eventKey="all">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#events" eventKey="events">events</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#places" eventKey="places">places</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#videos" eventKey="videos">videos</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#photos" eventKey="photos">photos</Nav.Link>
                                        </Nav.Item>
                                    </Nav> 
                                </Row>
                                <Row className="my-sm-4">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all">
                                            {renderFeedItems()}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="events">
                                            {renderFeedItems()}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="places">
                                            {renderFeedItems()}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="videos">
                                            {renderFeedItems()}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="photos">
                                            {renderFeedItems()}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Row>
                        </Tab.Container>
    );
};

export default TabFeed;