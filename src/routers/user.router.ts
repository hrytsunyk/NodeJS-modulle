import { Router } from "express";

import { UserController1 } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userMiddleware.getAllAndThrow, UserController1.getAll);

router.get("/:userId", userMiddleware.getByIdAndThrow, UserController1.getByID);

router.post("/", UserController1.create);
//
router.put("/:userId", UserController1.update);

router.delete("/:userId", UserController1.delete);

export const userRouter = router;
