import express from "express";

//  CONTROLLERS
import UserController from "../../infrastructure/controllers/user.controller";

//  VALIDATION SCHEMAS
import userSchema from "../validations/user.validation";

//  MIDDLEWARES
import validateAsync from "../middleware/validation.middleware";

const router = express.Router();
const userController = new UserController();

//  USERS
router.get("/api/v1/users/get-all", userController.getAllUsers);
router.get("/api/v1/users/get-by-id/:id", userController.getUserById);
router.post("/api/v1/users/create-user", validateAsync(userSchema), userController.createUser);

export default router;