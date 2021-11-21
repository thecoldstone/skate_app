import {Row, Col, Nav, Tab, Image} from 'react-bootstrap';

function FeedItemCard(props) {
    return(
        <Row style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, .1)",
            cursor: "pointer",
            marginBottom: "20px",
        }}>
            <Col sm={7} sm>
                <Row className="mx-md-1 my-md-3">
                    <Col>
                        <Row><h4>{props.title}</h4></Row>
                        <Row className="mt-sm-5"><p>Location: {props.location}</p></Row>
                    </Col>
                    
                </Row>
            </Col>
            <Col sm={5} style={{padding: "0"}}>
                <Image fluid src={`assets/${props.img}`} style={{
                borderRadius: "0 10px 10px 0",
                height: "100%"
            }}/>
            </Col>
    </Row>
    );
}

export default FeedItemCard;