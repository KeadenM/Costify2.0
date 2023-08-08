import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function addExpense() {
  const [expense, setExpense] = useState('');

const handleFormSubmit = async (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();
}
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