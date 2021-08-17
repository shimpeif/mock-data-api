const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        username: String!
        email: String!
        gender: String!
        age: Int!
    }
    
    # Queries
    type Query {
        getAllUsers: [User!]!
    }
    
    # Mutations
    type Mutation {
        createUser(username: String!, email: String!, gender: String!, age: Int!): User!
    }
`;

module.exports = { typeDefs };
