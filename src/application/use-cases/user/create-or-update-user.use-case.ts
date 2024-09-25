import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from '../../dtos/user.dto';

class CreateOrUpdateUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async execute(props: UserDTO): Promise<UserDTO> {
        const user: UserDTO = await this.userRepository.createOrUpdate(props);

        return user;
    }
}

export default CreateOrUpdateUser;