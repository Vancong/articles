import articleDtb from "./models/article.moles";

export const resolvers = {
    Query: {
        getListArticle: async () => {
            const article = await articleDtb.find({
                deleted: false,
            });

            return article;
        },
        getArticele: async (_, args) => {
            const article = await articleDtb.findOne({
                _id: args.id,
                deleted: false,
            });
            return article;
        },
    },
    Mutation: {
        createArticle: async (_, args) => {
            const { article } = args;

            const newArticle = new articleDtb(article);
            await newArticle.save();

            const data = await articleDtb.findOne({
                _id: newArticle.id,
                deleted: false,
            });

            return data;
        },
    },
};
