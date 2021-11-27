import { useState, useEffect } from 'react';
import {Row, Col, Tab} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import FeedContent from './FeedContent';
import FeedNavbar from './FeedNavbar';

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

    return(
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col>
                    <FeedNavbar/>
                    <FeedContent/>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default TabFeed; 