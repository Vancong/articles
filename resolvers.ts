import articleDtb from "./models/article.moles";
import categoryDtb from "./models/category.models";

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

        getListCategory: async () => {
            const category = await categoryDtb.find({
                deleted: false,
            });
            console.log(category);
            return category;
        },

        getCategory: async (_, args) => {
            const id = args.id;
            const category = await categoryDtb.findOne({
                deleted: false,
            });
            return category;
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
        deletedArticle: async (_, args) => {
            await articleDtb.deleteOne({
                _id: args.id,
                deleted: false,
            });
            const data = {
                code: 200,
                message: "xoa thanh cong",
            };
            return data;
        },
        updateArticle: async (_, args) => {
            const id = args.id;
            const data = args.article;
            await articleDtb.updateOne(
                {
                    _id: args.id,
                },
                data
            );
            const article = await articleDtb.findOne({
                _id: id,
            });
            return article;
        },
    },
};
