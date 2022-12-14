const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhh';
const expiration = '2h';

// exports signToken function to validate login information in the resolvers and typeDefs files 
module.exports = {
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

