import express, { Request, Response, Express } from "express";

import dotenv from "dotenv";

const app: Express = express();
const port: number = 3000;

dotenv.config();

import { connectDtb } from "./config/database.config";
import articleDtb from "./models/article.moles";
connectDtb();

app.get("/article", async (req: Request, res: Response) => {
    const article = await articleDtb.find({
        deleted: false,
    });
    res.json({
        hi: "ok",
        article: article,
    });
});

app.listen(port, () => {
    console.log(`dang chay cong ${port}`);
});
