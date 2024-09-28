import mongoose from "mongoose";
const articleSchema = new mongoose.Schema(
    {
        title: String,
        avatar: String,
        description: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    {
        timestamps: true,
    }
);
const articleDtb = mongoose.model("Article", articleSchema, "articles");
export default articleDtb;
