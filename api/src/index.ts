import express from "express"
import "dotenv/config";
import { ApolloServer } from "apollo-server-express"
import connectDB from "./utils/db";

import { typeDefs, resolvers } from './graphql'


const app = express();

connectDB();



const initServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
};
initServer();
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running : ${process.env.PORT || 8000}`);
});