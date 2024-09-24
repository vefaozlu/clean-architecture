import UserDTO from "../../application/dtos/user.dto";
import User from "../../core/entities/user.entity";
import UserModel from "../orm/db/models/user.model";

class UserRepository {
  async getAll(): Promise<UserDTO[]> {
    const records = await UserModel.findAll();

    return records.map((record, index) => {
      return { ...record.dataValues };
    });
  }

  async create(props: UserDTO): Promise<UserDTO> {
    const record = await UserModel.upsert({
      fullName: props.fullName,
      email: props.email,
      phone: props.phone,
    });

    return {...record[0].dataValues };
  }
}

export default UserRepository;
