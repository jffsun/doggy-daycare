const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input PetInput {
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        pets: [Pet]
        services: [Service]
    }

    type Pet {
        _id: ID!
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
    }

    type Service {
        _id: ID!
        title: String!
        date: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        services: [Service]
        pet: Pet
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addPet(_id: ID!, input: PetInput): User
        removePet(_id: ID!, petId: String!): User
        addService(title: String!, date: String!): Service
        removeService(_id: ID!, serviceId: String!): User
    }
`;

module.exports = typeDefs;