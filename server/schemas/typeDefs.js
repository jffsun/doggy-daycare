const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input PetInput {
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
    }

    input ServiceInput {
        title: String!
        date: String!
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        pets: [Pet]
    }

    type Pet {
        _id: ID!
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
        services: [Service]
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
        addService(_id: ID!, input: ServiceInput): Pet
        removeService(_id: ID!, serviceId: String!): Pet
    }
`;

module.exports = typeDefs;