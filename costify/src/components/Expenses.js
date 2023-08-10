import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_EXPENSE } from '../utils/mutations';
import auth from "../utils/auth";

const ExpenseList = () => {
  // const user = auth.getProfile();
  // const username = user.data.username;
  const { data } = useQuery(QUERY_ME);
  // const [removeExpense, { err }] = useMutation(REMOVE_EXPENSE);
  // const userData = data?.me || {};

  return (
    <ListGroup>
      <ListGroup.Item
      onClick={console.log(data)}
      >test</ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
  );
}

export default ExpenseList;