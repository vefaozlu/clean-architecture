import User from "../../../core/entities/user.entity";
import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from '../../dtos/user.dto';

class CreateUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async execute(props: UserDTO): Promise<UserDTO> {
        const user: User = await this.userRepository.create(props);

        return user.getConvertToDTO;
    }
}

export default CreateUser;