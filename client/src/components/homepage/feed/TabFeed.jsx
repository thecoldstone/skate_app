/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { useEffect, useContext } from 'react';
import { Row, Col, Tab, Nav, Button, Modal } from 'react-bootstrap';
import { GrFormAdd } from 'react-icons/gr';

import FeedContent from './FeedContent';
import api from '../../api';
import { MapContext } from '..';
import { useAuthState } from '../../AppContext';

// Hard-coded nav items names
const navItems = ["all", "events", "spots", "videos", "photos"];

/**
 * Tab Feed Component
 * 
 * @returns {React.FC}
 */
function TabFeed() {
    // Use map context 
    const { map, currentState } = useContext(MapContext);
    const user = useAuthState();

    // Fetch data for TabFeed and Map 
    useEffect(() => {
        currentState.setMapData(null);
        (async () => {
            await api.get(`/${currentState.key}`)
                .then((res) => {
                    if (!res && !res.data && !res.data.result) return; // No data
                    currentState.setMapData(res.data.result)
                })
                .catch((err) => {
                    console.log(err)
                });
        })()
    }, [currentState.key]);

    /**
     * Renders nav items for Tab Feed
     * 
     * @returns {Nav.Item} 
     */
    const renderNavItems = () => {
        return (
            <>
                {navItems.map((item, key) => {
                    if (item == "all") {
                        return (
                            <Nav.Item key={key}>
                                <Nav.Link
                                    href={`#` + item}
                                    eventKey={item}
                                >All</Nav.Link>
                            </Nav.Item>);
                    } else {
                        return (
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

    return (
        <Tab.Container activeKey={currentState.key} onSelect={(k) => currentState.setKey(k)}>
            <Row>
                <Col>
                    <Row style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)", height: "60px", position: "fixed", width: "inherit" }}>
                        <Col>
                            <Row className="mt-2">
                                <Nav className="my-auto">
                                    {renderNavItems()}
                                    {/*[TODO] Opens popUp window to create a new spot */}
                                    {user.id !== undefined && user.id !== "" ? (
                                        <Nav.Item>
                                            <Button style={{ background: "rgb(0,0,0,0)", border: "none" }}><GrFormAdd color="#223a88" size="2rem" /></Button>
                                        </Nav.Item>
                                    )    : (null)
                                    }
                                </Nav>
                            </Row>
                        </Col>
                    </Row>
                    <FeedContent />
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default TabFeed; 