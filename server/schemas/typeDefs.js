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
    }

    type Pet {
        petId: ID
        name: String!
        age: String!
        gender: String!
        medication: String!
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addPet(_id: ID!, input: PetInput): User
        removePet(petId: String!): User
    }
`;

module.exports = typeDefs;