import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function addExpense() {
  const [expense, setExpense] = useState('');
  const [name, setName] = useState('');

  
  
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
      setExpense({expense: expense, name: name})
      const {data} = await addExpense({
        variables: {...expenseFormData}
      })
    }
    catch (err) {
      console.log(err)
    }

    alert(`${name} amount is ${expense}`);

    setExpense('');
    setName('');
  };
}

function MultipleAddonsExample() {
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

export default MultipleAddonsExample;