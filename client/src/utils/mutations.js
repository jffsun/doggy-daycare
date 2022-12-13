import { gql } from '@apollo/client';

// executes mutations defined on typeDefs

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

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

export const ADD_PET = gql`
    mutation addPet($input: PetInput) {
        addPet(input: $input) {
            _id
            email
        }
    }
`;

export const REMOVE_PET = gql`
mutation removePet($petId: String!) {
    removePet(petId: $petId) {
        _id
        email
    }
}
`;