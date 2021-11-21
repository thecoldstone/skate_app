import {Container, Col, Row} from 'react-bootstrap';
import {Map, TabFeed} from '../components/homepage/index';

function HomePage() {
    return(
        <Container fluid>
            <Row>
                <Col md={{span: 6, order: 2}}>
                    <Map/>
                </Col>
                <Col md={6}>
                    <Row className="mx-4 my-md-4">
                        <TabFeed/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;