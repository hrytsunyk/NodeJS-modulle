import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./configs/configs";
import { userRouter } from "./routers/user.router";

const app = express();
const PORT = 5100;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: err.message,
  });
});

app.listen(configs.PORT, () => {
  mongoose.connect(configs.DB_URL);
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
