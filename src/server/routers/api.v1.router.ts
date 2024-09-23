import express from "express";

//  CONTROLLERS
import UserController from "../../infrastructure/controllers/user.controller";

//  VALIDATION SCHEMAS
import userSchema from "../validations/user.validation";

//  MIDDLEWARES
import validateAsync from "../middleware/validation.middleware";

const router = express.Router();
const userController = new UserController();

router.get("/api/v1/users", userController.getAllUsers);

router.post("/api/v1/users", validateAsync(userSchema), userController.createUser);

export default router;