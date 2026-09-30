import express from "express";
import { validateSchema } from "../middlewares/authValidatorMiddleware.js";
import { loginSchema, signUpSchema } from "../validator/userValidator.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const userRouter = express.Router();
userRouter.post("/register", validateSchema(signUpSchema), registerUser);
userRouter.post("/login", validateSchema(loginSchema), loginUser);
userRouter.post("/logout", authMiddleware, logoutUser);
