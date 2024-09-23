import UserDTO from "../../application/dtos/user.dto";
import User from "../../core/entities/user.entity";
import UserModel from "../orm/db/models/user.model";

class UserRepository {
  async getAll(): Promise<User[]> {
    const records = await UserModel.findAll();

    return records.map((record, index) => new User({...record.dataValues}));
  }

  async create(props: UserDTO): Promise<User> {
    const record = await UserModel.upsert({
      fullName: props.fullName,
      email: props.email,
      phone: props.phone,
    });

    return new User({ ...record[0].dataValues });
  }
}

export default UserRepository;
