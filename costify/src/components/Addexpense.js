import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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