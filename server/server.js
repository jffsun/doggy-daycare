const express = require('express');
// bringing in the apollo server
const {ApolloServer} = require('apollo-server-express');
const path  = require('path');

const {typeDefs, resolvers} = require('./schemas');
// bringing in the mongoose connection and setting it as a const db
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

