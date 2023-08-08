import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXPENSE } from '../../src/utils/mutations';

function NewExpense() {
  const [expense, setExpense] = useState('');
  const [name, setName] = useState('');
  const [addExpense, {error, data}] = useMutation(ADD_EXPENSE)

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'expense') {
      setExpense(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    }

  };
  
  const handleFormSubmit = async (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();
  
    try {
      // setExpense({expense: expense, name: name})
      const {data} = await addExpense({
        variables: { expense, name }
      })
    }
    catch (err) {
      console.log(err)
    }

    alert(`${name} amount is ${expense}`);

    setExpense('');
    setName('');
  };

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>Expense name:</InputGroup.Text>
        <Form.Control aria-label="text" />
      </InputGroup>
      <InputGroup>
      <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
    </>
  );
}

export default NewExpense;