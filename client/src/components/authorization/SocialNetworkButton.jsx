/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { Row, Col, Button } from 'react-bootstrap';

/**
 * Social Network Button
 * 
 * @param {*} props 
 * @returns {React.FC}
 */
function SocialNetworkButton(props) {
    return (
        <Button variant="light" style={{ borderRadius: "30px" }}>
            <Row>
                <Col sm={1}>{props.icon}</Col>
                <Col style={{ marginLeft: "-30px" }}>{props.text}</Col>
            </Row>
        </Button>
    );
};

export default SocialNetworkButton;