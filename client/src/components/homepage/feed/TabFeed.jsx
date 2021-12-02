import { useState, useEffect } from 'react';
import {Row, Col, Tab, Nav} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import FeedContent from './FeedContent';

const navItems = ["all", "events", "places", "videos", "photos"];

function setCurrentTabByHash(hash) {
    const pattern = new RegExp('^#(all|events|places|videos|photos)$')

    if (pattern.test(hash)) {
        return hash.slice(1, hash.length);
    }

    return 'all';
}

function TabFeed() {
    const [key, setKey] = useState('all');
    const location = useLocation();

    useEffect(() => {
        setKey(setCurrentTabByHash(location.hash));
    }, []);

    const renderNavItems = () => {
        return (
            <>
            {navItems.map((item, key) => {
                if (item == "all") {
                    return(
                        <Nav.Item key={key}>
                            <Nav.Link 
                                href={`#` + item} 
                                eventKey={item}
                            >All</Nav.Link>
                        </Nav.Item>);
                } else {
                    return(
                        <Nav.Item key={key}>
                            <Nav.Link 
                                href={`#` + item} 
                                eventKey={item}
                            >{item}</Nav.Link>
                        </Nav.Item>);
                }   
            })}
            </>
        );
    };

    return(
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col>
                    <Row style={{background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)", height: "60px", position: "fixed", width: "inherit"}}>
                        <Col>
                            <Row className="mt-2"> 
                                <Nav className="my-auto">
                                    {renderNavItems()}
                                </Nav> 
                            </Row>
                        </Col>
                    </Row>
                    <FeedContent/>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default TabFeed; 