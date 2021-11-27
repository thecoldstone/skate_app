import {Row, Col, Nav} from 'react-bootstrap';

function FeedNavbar() {
    return(
        <Row style={{background: "radial-gradient(circle, rgba(255,255,255,0.9724264705882353) 0%, rgba(255,255,255,1) 100%)", height: "60px", position: "fixed", width: "inherit"}}>
            <Col>
                <Row className="mt-2 mx-2"> 
                    <Nav variant="pills" className="my-auto">
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
            </Col>
        </Row>
    )
};

export default FeedNavbar;