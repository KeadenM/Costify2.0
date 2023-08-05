const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    income: Int
    expenses: [Expense]
    savingsgoal: Int
    }
    
    type Expense {
        _id: ID
        expense: String
        amount: Float
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me(username: String!): User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!, income: Int, savingsgoal: Int): Auth
        login(email: String!, password: String!): Auth
        addIncome(income: String!, amount: Float!, username: String!): User
        addExpense(expense: String!, amount: Float!, username: String!): User
        addSavingsGoal(savingsgoal: Float!): User
        removeExpense(expense: String!, amount: Float!): User
        removeIncome(income: String!, amount: Float!): User
        removeSavingsGoal(savingsgoal: Float!): User
    }
`;

module.exports = typeDefs;

// type Income {
//     _id: ID
//     income: String
//     amount: Float
// }
       