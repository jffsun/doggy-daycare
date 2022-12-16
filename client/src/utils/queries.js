import { gql } from '@apollo/client';

// executes queries defined on typeDefs

export const GET_ME = gql` {
        me {
            _id
            firstName
            lastName
            email
            pets {
                _id
                name
                age
                gender
                medication
                image
            }
        }
}
`;

export const GET_SERVICES = gql`{
    services {
        _id
        title
        date
        price 
    }
}
`;