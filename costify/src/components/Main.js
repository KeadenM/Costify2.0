import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExpenseList from './Expenses';

// const styles = {
//   height: '2000px',
//   border: '2px solid rgba(0, 0, 0, 0.55)',
// }

function ContainerExample() {
  return (
    <Container fluid ={true} style={{height: '100vh'}}>
      <Row>
        <Col xs={12} sm={12} md={3} style={{height: '50vh'}}>
            <h1>Expense list</h1>
            <ExpenseList></ExpenseList>
        </Col>

        <Col xs={12} sm={12} md={9}>
              <Container fluid>  
                <Row style={{height: '50vh'}}>
                    <Col xs={6} sm={6} md={3} >
                        <h1> Monthly</h1>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <h1> Yearly</h1>
                    </Col>
                </Row>
                <Row style={{height: '50vh'}}>
                    <Col xs={12}>
                        <h1>Savings goals</h1>
                    </Col>
                </Row>
              </Container>  
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;