import express, { Request, Response, Express } from "express";

import dotenv from "dotenv";

const app: Express = express();
const port: number = 3000;

dotenv.config();

app.get("/article", (req: Request, res: Response) => {
    res.json({
        hi: "ok",
        article: [],
    });
});

app.listen(port, () => {
    console.log(`dang chay cong ${port}`);
});
