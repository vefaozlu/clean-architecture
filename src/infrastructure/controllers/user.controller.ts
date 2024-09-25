import { Request, Response } from "express";
import RedisService from "../sdk/redis/redis.service";
import UserRepository from "../repositories/user.repository";
import CreateOrUpdateUser from "../../application/use-cases/user/create-or-update-user.use-case";
import GetAllUsers from "../../application/use-cases/user/get-users.use-case";
import GetUserById from "../../application/use-cases/user/get-user-by-id.use-case";

class UserController {
  private _getAllUsers: GetAllUsers;
  private _getUserById: GetUserById;
  private _createUser: CreateOrUpdateUser;

  constructor() {
    const redisService = new RedisService();
    const userRepository = new UserRepository(redisService);
    
    this._getAllUsers = new GetAllUsers(userRepository);
    this._getUserById = new GetUserById(userRepository);
    this._createUser = new CreateOrUpdateUser(userRepository);
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this._getAllUsers.execute();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this._getUserById.execute(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this._createUser.execute({...req.body});
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  };
}

export default UserController;
