import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_EXPENSE } from '../utils/mutations';

const ExpenseList = () => {
  const [removeExpense, { err }] = useMutation(REMOVE_EXPENSE);
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const expenseArr = data.me.expenses;

  const handleDeleteExpense = (id) => {

  }

  let expenses = []
    for(let d of expenseArr) {
      let expense = <ListGroup.Item>
        {`${d.name}: $${d.amount}`}
        <button>Delete</button>
      </ListGroup.Item>
      expenses.push(expense);
    }

  return (
    <ListGroup>
      {expenses}
    </ListGroup>
  );
}

export default ExpenseList;