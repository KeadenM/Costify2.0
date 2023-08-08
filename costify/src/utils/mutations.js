import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $savingsgoal :Int!, $income: Int!) {
    addUser(username: $username, email: $email, password: $password, savingsgoal: $savingsgoal, income: $income) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($expense: String!, $amount: Float!, $username: String!) {
    addExpense(expense: $expense, amount: $amount) {
        _id
        expense
        amount
    }
  }
`;

export const ADD_INCOME = gql`
  mutation addIncome($amount: Int!, $username: String!) {
    addIncome(amount: $amount) {
        user {
          _id
          username
          income
        }
    }
  }
`;