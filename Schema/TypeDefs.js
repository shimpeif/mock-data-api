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
        createUser(name: String!, age: Int!, married: Boolean!): User!
    }
`;

module.exports = { typeDefs };
