const { AuthenticationError } = require('apollo-server-express');
const { User, Pet, Service } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // query to find a user
        me: async (parent, { _id }) => {
            // if _id doesn't exist assign params to empty object
            const params = _id ? {_id} : {};

            // return user that matches id
            return User.findOne(params);
        },
        // query to get a pet
        pet: async (parent, { _id }) => {
            const params = _id ? {_id} : {};

            return Pet.findOne(params);
        },
        // query to find all services
        services: async () => {
            return await Service.find();
        }
    },
    Mutation: {
        // creates user, signs token, and returns both
        addUser: async (parent, args) => {
            const user = await User.create(args);

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
        addPet: async (parent, {_id, input}) => {
            // finds user based on id then adds to input object to the pets array
            const addedPet = await User.findOneAndUpdate(
                {_id: _id},
                { $push: { pets: input }},
                { new: true, runValidators: true},
            );
            
            // returns the user with the addedpet
            return addedPet;
        },
        removePet: async (parent, {_id, petId}) => {
            // finds user based on id then removes the pet based on id from the pets array
            const removedPet = await User.findOneAndUpdate(
                {_id: _id},
                { $pull: { pets: { _id: petId } }},
                { new: true, runValidators: true},
            );

            // returns the user with the updated pets
            return removedPet;
        },
        addService: async (parent, {_id, input}) => {
            // finds user based on the _id then adds the input object to the services array
            const addedService = await User.findOneAndUpdate(
                {_id: _id},
                { $push: { services: input }},
                { new: true, runValidators: true},
            );

            if (!addedService) {
                console.log(`error!`);
            }

            // returns pet with new service added to services array
            return addedService;
        },
        removeService: async (parent, {petId, serviceId}) => {
            // finds pet based on id then removes service based on serviceId
            const removedService = await Pet.findOneAndUpdate(
                { petId: petId },
                { $pull: { services: { _id: serviceId } }},
                { new: true, runValidators: true},
            );

            // returns pet with service removed from the services aray
            return removedService;
        },
    }
};

module.exports = resolvers;