import { ApolloServer, gql } from "apollo-server-express";
export const typeDefs = gql`
    type Article {
        id: String
        title: String
        avatar: String
    }

    type Category {
        id: String
        title: String
        avatar: String
    }

    type Query {
        getListArticle: [Article]
        getArticele(id: String): Article
        getListCategory: [Category]
        getCategory(id: String): Category
    }

    input articleInput {
        title: String
        avatar: String
    }

    type Message {
        code: Int
        message: String
    }
    type Mutation {
        createArticle(article: articleInput): Article
        deletedArticle(id: String): Message
        updateArticle(id: String, article: articleInput): Article
    }
`;
