import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from '../../dtos/user.dto';

class CreateUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async execute(props: UserDTO): Promise<UserDTO> {
        const user: UserDTO = await this.userRepository.create(props);

        return user;
    }
}

export default CreateUser;