import {Row, Col, Button} from 'react-bootstrap';

function SocialNetworkButton(props) {
    return(
        <Button variant="light" style={{borderRadius: "30px"}}>
                                    <Row>
                                        <Col sm={1}>{props.icon}</Col>
                                        <Col style={{marginLeft: "-30px"}}>{props.text}</Col>
                                    </Row>
        </Button>
    );
};

export default SocialNetworkButton;