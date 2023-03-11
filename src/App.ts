import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";

import { User } from "./models/User.model";
import { IUser } from "./types/user.types.ts/user.types";

const app = express();
const PORT = 5100;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/welcome", (req, res) => {
  res.send("WELCOME!!!🌝🌝🌝");
  res.end();
});

app.get(
  "/users",
  async (req: Request, res: Response): Promise<Response<IUser[]>> => {
    const users = await User.find();
    return res.json(users);
  }
);

app.get(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;

    const user = await User.findById({ _id: userId });
    return res.send(user);
  }
);

app.post(
  "/users",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    try {
      const body = req.body;
      const user = await User.create({ ...body });
      return res.status(201).json({
        message: "user created",
        data: user,
      });
    } catch (e) {
      res.json({
        message: e.message,
      });
    }
  }
);
//
app.put(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;
    const user = req.body;

    const updatedUser = await User.updateOne({ _id: userId }, user);

    return res.status(200).json({
      message: "user updated",
      data: updatedUser,
    });
  }
);

app.delete(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;

    await User.deleteOne({ _id: userId });

    return res.status(200).json({
      message: "User deleted!",
    });
  }
);

const dataBase =
  "mongodb+srv://hrytsunyk:hrytsunyk@cluster0.vh7aabd.mongodb.net/?retryWrites=true&w=majority";

app.listen(PORT, () => {
  mongoose.connect(dataBase);
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
