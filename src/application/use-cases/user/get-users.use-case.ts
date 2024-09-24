import User from "../../../core/entities/user.entity";
import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from '../../dtos/user.dto';

class GetAllUsers {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async execute(): Promise<UserDTO[]> {
        const users: UserDTO[] = await this.userRepository.getAll();

        return users;
    }
}

export default GetAllUsers;