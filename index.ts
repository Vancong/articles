import express, { Express } from "express";

import dotenv from "dotenv";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

import { connectDtb } from "./config/database.config";
import articleDtb from "./models/article.moles";

const app: Express = express();
const port: number = 3000;

dotenv.config();

const startServer = async () => {
    connectDtb();

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app: app,
        path: "/graphql",
    });

    app.listen(port, () => {
        console.log(`dang chay cong ${port}`);
    });
};

startServer();
