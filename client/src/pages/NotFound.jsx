/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiDinosaurBones } from 'react-icons/gi';

/**
 *  Not Found Function Component
 *  
 * @returns {React.FC}
 */
function NotFound() {
    return (
        <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
            <Row>
                <Col style={{ height: "calc(100vh - 90px)" }}>
                    <Row className="justify-content-md-center" style={{ margin: "10% 0" }}>
                        <Col md="auto" style={{ textAlign: "center" }}>
                            <GiDinosaurBones size="5rem" />
                            <h2>Oouuups...</h2>
                            <p>Page does not exist</p>
                            <Link to="/" style={{ color: "blue" }}>Go to home page</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;