const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query to find a user
        me: async (parent, { _id }) => {
            // if _id doesn't exist assign params to empty object
            const params = _id ? {_id} : {};

            // return user that matches id
            return User.find(params);
        },
    },
    Mutation: {
        // creates user, signs token, and returns both
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });

            // creates encrypted token for user information
            const token = signToken(user);
            
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            // finds user by email
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No user with this email was found');
            };

            // checks that the password is correct
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Wrong password');
            }

            // creates encrypted token for user information
            const token = signToken(user);

            return { token, user };
        },
        addPet: async (parent, {_id, newPet}) => {
            // finds user based on id then adds to newPet object to the pets array
            const addedPet = await User.findOneAndUpdate(
                {_id: _id},
                { $push: { pets: newPet }},
                { new: true, runValidators: true},
            );
            
            // returns the user with the addedpet
            return addedPet;
        },
        removePet: async (parent, {_id, petId}) => {
            // finds user based on id then removes the pet based on id from the pets array
            const removedPet = await User.findOneAndUpdate(
                {_id: _id},
                { $pull: { pets: petId }},
                { new: true, runValidators: true},
            );

            // returns the user with the updated pets
            return removedPet;
        }
    }
};

module.exports = resolvers;