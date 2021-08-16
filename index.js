const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { resolvers } = require('./Schema/Resolvers');
const { typeDefs } = require('./Schema/TypeDefs');

const PORT = 5050;

const startApolloServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    const app = express();
    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port: PORT }, resolve));
    console.log(`Running on port ${PORT}`);
    return { server, app };
};

startApolloServer();
