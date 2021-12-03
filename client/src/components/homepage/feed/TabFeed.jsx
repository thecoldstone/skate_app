import { useState, useEffect, useContext, lazy, Suspense  } from 'react';
import {Row, Col, Tab, Nav} from 'react-bootstrap';
import FeedContent from './FeedContent';
import api from '../../api';
import { MapContext } from '..';

const navItems = ["all", "events", "spots", "videos", "photos"];

function setCurrentTabByHash(hash) {
    const pattern = new RegExp('^#(all|events|places|videos|photos)$')

    if (pattern.test(hash)) {
        return hash.slice(1, hash.length);
    }

    return 'all';
}

function TabFeed() {
    const [key, setKey] = useState('all');
    const {map, currentState} = useContext(MapContext);

    // Fetch data for TabFeed and Map 
    useEffect(() => {
        (async()=> {
            api.get(`/${currentState.key}`)
            .then((res) => {
                if (!res && !res.data && !res.data.result) return; // No data
                currentState.setMapData(res.data.result)
            })  
            .catch((err)=> {
                console.log(err)
            });
        })()
    }, [currentState.key]);

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
        <Tab.Container activeKey={currentState.key} onSelect={(k) => currentState.setKey(k)}>
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
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <FeedContent/>
                    </Suspense>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default TabFeed; 