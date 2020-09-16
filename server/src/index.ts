import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "od" });
});

app.listen(3000, () => {
  console.log("App Running on port http://localhost:3000");
});
