import express, { Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./configs/configs";
import { userRouter } from "./routers/user.router";
import { IError } from "./types/common.types";

const app = express();
const PORT = 5100;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use((err: IError, req: Request, res: Response) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message,
    status,
  });
});

app.listen(configs.PORT, () => {
  mongoose.connect(configs.DB_URL);
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
