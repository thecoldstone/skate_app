import {Col, Row, Form, FormGroup, Button} from 'react-bootstrap';

function FormComponent() {
    return(
        <Form as={Row} style={{width: "400px"}}>
            <FormGroup as={Row} controlId="email" className="mb-3 mt-3">
                <Col>
                    <Form.Control
                        style={{height: "50px"}}
                        type="email"
                        placeholder="Enter your email or login"/>
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="password" className="mb-3">
                <Col>
                    <Form.Control
                        style={{height: "50px"}}
                        type="password"
                        placeholder="Enter your password"/>
                </Col>
            </FormGroup>
            <FormGroup as={Row}>
                <Col>
                        <Button 
                            style={{height: "50px"}}
                            variant="primary">
                            Login
                        </Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default FormComponent;