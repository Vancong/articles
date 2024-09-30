import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
    {
        title: String,
        avatar: String,
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
const categoryDtb = mongoose.model("Category", categorySchema, "categories");
export default categoryDtb;
