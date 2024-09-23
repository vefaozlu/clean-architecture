import { Request, Response } from "express";
import CreateUser from "../../application/use-cases/user/create-user.use-case";
import UserRepository from "../repositories/user.repository";
import GetAllUsers from "../../application/use-cases/user/get-users.use-case";

class UserController {
  private _getAllUsers: GetAllUsers;
  private _createUser: CreateUser;

  constructor() {
    const userRepository = new UserRepository();
    this._getAllUsers = new GetAllUsers(userRepository);
    this._createUser = new CreateUser(userRepository);
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this._getAllUsers.execute();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Failure" });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this._createUser.execute(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failure" });
    }
  };
}

export default UserController;
