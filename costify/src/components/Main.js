import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  height: 2000
}

function ContainerExample() {
  return (
    <Container style={styles}>
      <Row>
        <Col xs={3}>
            <h1>Danny's secret box</h1>
        </Col>

        <Col xs={9}>
            <Container>
                <h1> Keaden's secret cardboard box</h1>
                <Row>
                    <Col xs={6}>
                        <h1> Monthly</h1>
                    </Col>
                    <Col xs={6}>
                        <h1> scoopity scoopy bop</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1>Boot scootin boogey</h1>
                    </Col>
                </Row>
            </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;