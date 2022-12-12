import { gql } from '@apollo/client';

// executes queries defined on typeDefs

export const GET_ME = gql`
    query me {
        me {
            _id
            firstName
            lastName
            email
            pets {
                name
                age
                gender
                medication
            }
        }
    }
`;

