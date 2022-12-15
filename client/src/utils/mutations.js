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
    mutation removePet($_id: ID!, $petId: ID!) {
        removePet(_id: $_id, petId: $petId) {
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

export const ADD_SERVICE = gql`
    mutation addService($petId: ID!, $input: ServiceInput) {
        addService(petId: $petId, input: $input) {
            petId
            name
            age
            gender
            medication
            image
            services {
                serviceId
                title
                startDate
                endDate
                startTime
                price
            }
        }
    }
`

export const REMOVE_SERVICE = gql`
    mutation removeService($petId: ID!, $serviceId: ID!) {
        removeService(petId: $petId, serviceId: $serviceId) {
            petId
            name
            age
            gender
            medication
            image
            services {
                serviceId
                title
                startDate
                endDate
                startTime
                price
            }            
        }
    }
`