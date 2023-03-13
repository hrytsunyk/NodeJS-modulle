import { Request, Response, Router } from "express";

import { UserController1 } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";
import { User } from "../models/User.model";
import { IUser } from "../types/user.types.ts/user.types";

const router = Router();

router.get("/", UserController1.getAll);

router.get("/:userId", userMiddleware.getByIdAndThrow, UserController1.getByID);

router.post("/", UserController1.create);
//
router.put("/:userId", UserController1.update);

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
