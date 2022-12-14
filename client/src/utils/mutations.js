import { gql } from '@apollo/client';

// executes mutations defined on typeDefs

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
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
                firstName
                lastname
                email
                pets {
                    petId
                    name
                    age
                    gender
                    medication
                    image
                }
            }
        }
    }
`;

export const ADD_PET = gql`
    mutation addPet($_id: ID!, $input: PetInput) {
        addPet(_id: $_id, input: $input) {
            _id
            email
            firstName
            lastName
            pets {
                petId
                name
                age
                gender
                medication
                image
            }
        }
    }
`;

export const REMOVE_PET = gql`
    mutation removePet($petId: String!) {
        removePet(petId: $petId) {
            _id
            email
            firstName
            lastName
            pets {
                petId
                name
                age
                gender
                medication
                image
            }
    }
}
`;