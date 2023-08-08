import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../src/utils/mutations';
import { useState } from 'react';


function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [income, setIncome] = useState('');
  const [savingsgoal, setSavingsGoal] = useState('');
  const [password, setPassword] = useState('');
  const [userFormData, setUserFormData] = useState({email: '', userName: '', income: '', savings: '', password: ''})
  const [addUser, {error, data}] = useMutation(ADD_USER)

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }else if (inputType === 'income') {
      setIncome(parseInt(inputValue));
    }else if (inputType === 'savings') {
      setSavingsGoal(parseInt(inputValue));
    } else {
      setPassword(inputValue);
    }


  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    try {
      // setUserFormData({email, userName, income, savings, password})
      const {data} = await addUser({
        variables: { username, email, password, savingsgoal, income  }
      })
    }

    catch (err) {
      console.log(err)
    }
    
    alert(`Hello ${username}`);
  };

  return (
    <Container style={{height: '100vh'}}>

    <Row>

      <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sign up</Form.Label>
        <Form.Control 
        value={email}
        name='email'
        onChange={handleInputChange} 
        type="email" 
        placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintext">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        value={username}
        name='userName'
        onChange={handleInputChange}
        type="text" 
        placeholder="Enter a User Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Income">
        <Form.Label>Income</Form.Label>
        <Form.Control 
        type="digit"
        value={income}
        name="income"
        onChange={handleInputChange}
        placeholder="Enter Yearly Income" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Savings">
        <Form.Label>Savings goals</Form.Label>
        <Form.Control 
        type="digit"
        value={savingsgoal}
        name="savings"
        onChange={handleInputChange}
        placeholder="Enter monthly savings goal" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password"
        value={password}
        name="password"
        onChange={handleInputChange}
        placeholder="Enter a password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button 
      variant="primary" 
      type="submit"
      onClick={handleFormSubmit}
      >
        Sign-up
      </Button>
    </Form>
      </Col>

      <Col>
    <Form>
       <Form.Group className="mb-3" controlId="formEmail">
       <Form.Label>Log in</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
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