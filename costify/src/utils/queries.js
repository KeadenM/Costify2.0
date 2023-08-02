import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user {
            _id
            username
            email
            income {
                income
                amount
            }
            expenses {
                expense
                amount
            }
            savingsgoal
        }
    }
`;
