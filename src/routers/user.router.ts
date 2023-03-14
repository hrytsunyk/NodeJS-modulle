import { Router } from "express";

import { UserController1 } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", UserController1.getAll);
router.post("/", userMiddleware.isUserValidCreate, UserController1.create);

router.get(
  "/:userId",
  userMiddleware.isUserIdValid,
  userMiddleware.getByIdAndThrow,
  UserController1.getByID
);

router.put(
  "/:userId",
  userMiddleware.isUserIdValid,
  userMiddleware.getByIdAndThrow,
  userMiddleware.isUserValidUpdate,
  UserController1.update
);

router.delete(
  "/:userId",
  userMiddleware.isUserIdValid,
  userMiddleware.getByIdAndThrow,
  UserController1.delete
);

export const userRouter = router;
