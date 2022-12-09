const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query to find a user
        user: async (parent, { _id }) => {
            // if _id doesn't exist assign params to empty object
            const params = _id ? {_id} : {};

            // return user that matches id
            return User.find(params);
        },

    },
    Mutation: {
        // creates user, signs token, and returns both
        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email }) => {
            // finds user by email
            const user = await User.findOne({ email });
        }
    }

}