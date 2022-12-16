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
        startDate: Date!
        endDate: Date!
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
        petId: ID
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
    }

    type Service {
        serviceId: ID
        title: String!
        startDate: Date!
        endDate: Date!
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
        addService(petId: ID!, input: ServiceInput): Pet
        removeService(petId: ID!, serviceId: String!): Pet
    }
`;

module.exports = typeDefs;