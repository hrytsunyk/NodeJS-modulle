import { Request, Response, Router } from "express";

import { User } from "../models/User.model";
import { IUser } from "../types/user.types.ts/user.types";

const router = Router();

router.get(
  "/users",
  async (req: Request, res: Response): Promise<Response<IUser[]>> => {
    const users = await User.find();
    return res.json(users);
  }
);

router.get(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;

    const user = await User.findById({ _id: userId });
    return res.send(user);
  }
);

router.post(
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
router.put(
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

router.delete(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;

    await User.deleteOne({ _id: userId });

    return res.status(200).json({
      message: "User deleted!",
    });
  }
);

export const userRouter = router;
