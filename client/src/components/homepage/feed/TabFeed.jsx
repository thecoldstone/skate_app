/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { useEffect, useContext } from 'react';
import { Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import { GrFormAdd } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';

import FeedContent from './FeedContent';
import api from '../../api';
import { MapContext } from '..';
import { useAuthState } from '../../AppContext';
import AddContentForm from './AddContentForm';

// Hard-coded nav items names
const navItems = ["all", "events", "spots", "videos", "photos"];

/**
 * Tab Feed Component
 * 
 * @returns {React.FC}
 */
function TabFeed() {
    // Use map context 
    const { map, currentState, currentView, setCurrentView } = useContext(MapContext);
    const user = useAuthState();

    // Fetch data for TabFeed and Map 
    useEffect(() => {
        currentState.setMapData(null);

        if (currentState.key === "addItem") return;

        (async () => {
            await api.post(
                `/getContent`,
                JSON.stringify({
                    "userId": user.id,
                    "content": currentState.key
                })
            )
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
                    return (
                        <Nav.Item key={key}>
                            <Nav.Link
                                href={`#` + item}
                                eventKey={item}
                            >{
                                    item === "all"
                                        ? ("All")
                                        : item
                                }
                            </Nav.Link>
                        </Nav.Item>
                    )
                })}
            </>
        );
    };

    return (
        <>
            {currentView === "TabFeed"
                ? (
                    <Tab.Container activeKey={currentState.key} onSelect={(k) => currentState.setKey(k)}>
                        <Row>
                            <Col>
                                <Row style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)", height: "60px", position: "fixed", width: "inherit", zIndex: "2" }}>
                                    <Col>
                                        <Row className="mt-2">
                                            <Nav className="my-auto">
                                                {renderNavItems()}
                                                {/*[TODO] Opens popUp window to create a new spot */}
                                                {user.id !== undefined && user.id !== "" ? (
                                                    <>
                                                        <Nav.Item>
                                                            <Nav.Link href="#addItem" eventKey="addItem" style={{ margin: "0", padding: "0 0.5rem" }}>
                                                                <Button
                                                                    onClick={() => setCurrentView("AddContentForm")}
                                                                    style={{ background: "rgb(0,0,0,0)", border: "none", paddingLeft: "0", paddingRight: "0" }}>
                                                                    <GrFormAdd color="#223a88" size="1.5rem" />
                                                                </Button>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link href="#favourite" eventKey="favourite" style={{ margin: "0", padding: "0 0.5rem" }}>
                                                                <Button
                                                                    style={{ background: "rgb(0,0,0,0)", border: "none", paddingLeft: "0", paddingRight: "0" }}>
                                                                    <MdFavorite color="black" size="1.5rem" />
                                                                </Button>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </>
                                                ) : (null)
                                                }
                                            </Nav>
                                        </Row>
                                    </Col>
                                </Row>
                                <FeedContent />
                            </Col>
                        </Row>
                    </Tab.Container>
                )
                : <AddContentForm />
            }
        </>
    );
};

export default TabFeed; 