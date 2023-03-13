import { Request, Response } from "express";

import { User } from "../models/User.model";
import { ICommonResponse, IUser } from "../types/user.types.ts/user.types";

class UserController {
  public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
    const users = await User.find();
    return res.json(users);
  }

  public async getByID(req: Request, res: Response): Promise<Response<IUser>> {
    const { userId } = req.params;

    const user = await User.findById({ _id: userId });
    return res.send(user);
  }

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<ICommonResponse<IUser>>> {
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

  public async update(
    req: Request,
    res: Response
  ): Promise<Response<ICommonResponse<IUser>>> {
    const { userId } = req.params;
    const user = req.body;

    const updatedUser = await User.updateOne({ _id: userId }, user);

    return res.status(200).json({
      message: "user updated",
      data: updatedUser,
    });
  }
}

export const UserController1 = new UserController();
