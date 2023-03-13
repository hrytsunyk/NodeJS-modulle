import express from "express";
import mongoose from "mongoose";

import { userRouter } from "./routers/user.router";

const app = express();
const PORT = 5100;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

const dataBase =
  "mongodb+srv://hrytsunyk:hrytsunyk@cluster0.vh7aabd.mongodb.net/?retryWrites=true&w=majority";

app.listen(PORT, () => {
  mongoose.connect(dataBase);
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
