const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        username: String!
        email: String!
        gender: String!
        age: Int!
    }

    type Query {
        getAllUsers: [User!]!
    }
    
    type Mutation {
        createUser(username: String!, email: String!, gender: String!, age: Int!): User!
    }
`;

module.exports = { typeDefs };

