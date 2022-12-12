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

// middleware parses put and post requests, allows access to req.body, recognizes req objects as strings/arrays
app.use(express.urlencoded({extended: false}));
// recognizes request objects as a json object
app.use(express.json())

// Use calendar routes
app.use("/api/calendar", require("./Controllers/CalendarController"));

const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});

    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

startApolloServer(typeDefs, resolvers);

  



