import User from "../../../core/entities/user.entity";
import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from "../../dtos/user.dto";

class GetUserById {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string): Promise<UserDTO> {
    const userDTO: UserDTO = await this.userRepository.getById(id);
    const user = new User({...userDTO} as User)

    return user.getConvertToDTO;
  }
}

export default GetUserById;
