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
        startDate: String!
        endDate: String!
        startTime: String
        price: Float!
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
    }

    type Service {
        _id: ID
        title: String!
        startDate: String!
        endDate: String!
        startTime: String
        price: Float!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        services: Service
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