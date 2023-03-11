import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";

import { User } from "./models/User.model";

const app = express();
const PORT = 5100;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/welcome", (req, res) => {
  res.send("WELCOME!!!🌝🌝🌝");
  res.end();
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

// app.get("/users/:userId", (req, res) => {
//   const { userId } = req.params;
//
//   const user = users[+userId - 1];
//
//   res.send(user);
// });
//
app.post("/users", async (req, res) => {
  try {
        const body = req.body;
    const user = await User.create({ ...body });
    res.status(201).json({
      data: user,
      message: "user created",
    });
  } catch (e) {
    console.log(e);
  }
});
//
// app.put("/users/:userId", (req, res) => {
//   const { userId } = req.params;
//   const updatedUser = req.body;
//
//   users[+userId - 1] = updatedUser;
//
//   res.status(200).json({
//     message: "user updated",
//     data: users[+userId - 1],
//   });
// });
//
// app.delete("/users/:userId", (req, res) => {
//   const { userId } = req.params;
//
//   users.splice(+userId - 1, 1);
//
//   res.status(200).json({
//     message: "User deleted!",
//   });
// });

const dataBase =
  "mongodb+srv://hrytsunyk:hrytsunyk@cluster0.vh7aabd.mongodb.net/?retryWrites=true&w=majority";

app.listen(PORT, () => {
  mongoose.connect(dataBase);
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
