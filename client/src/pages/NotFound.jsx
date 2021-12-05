/**
 * Author: Nikita Zhukov <xzhuko00@stud.fit.vutbr.cz>
 */

import {Col, Row, Container} from 'react-bootstrap';


function NotFound() {
    return(
        <Container>
            <Row> 
                <Col>
                    <h1>Not found 404!</h1>
                </Col>
            </Row>
        </Container>
    );
}  

export default NotFound;