import articleDtb from "./models/article.moles";

export const resolvers = {
    Query: {
        getListArticle: async () => {
            const article = await articleDtb.find({
                deleted: false,
            });

            return article;
        },
    },
};
