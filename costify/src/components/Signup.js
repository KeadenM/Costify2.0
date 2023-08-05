import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Signup() {
  return (
    <Container style={{height: '100vh'}}>

    <Row>

      <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sign up</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintext">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter a User Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Dollar">
        <Form.Label>Income</Form.Label>
        <Form.Control type="digit" placeholder="Enter Yearly Income" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Dollar">
        <Form.Label>Savings goals</Form.Label>
        <Form.Control type="digit" placeholder="Enter your savings goal" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign-up
      </Button>
    </Form>
      </Col>

      <Col>
    <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Log in</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
       Log-in
      </Button>
    </Form>
</Col>

    </Row>
    </Container>
  );
}

export default Signup;