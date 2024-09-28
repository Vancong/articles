import { ApolloServer, gql } from "apollo-server-express";
export const typeDefs = gql`
    type Article {
        id: String
        title: String
        avatar: String
    }

    type Query {
        getListArticle: [Article]
        getArticele(id: String): Article
    }
`;
