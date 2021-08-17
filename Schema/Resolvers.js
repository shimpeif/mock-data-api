const { users } = require('../MOCK_DATA100');

const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        },
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            users.push(newUser);
            return newUser;
        }
    }
};



module.exports = { resolvers };

