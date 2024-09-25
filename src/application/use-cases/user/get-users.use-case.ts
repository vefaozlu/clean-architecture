import User from "../../../core/entities/user.entity";
import UserRepository from "../../../infrastructure/repositories/user.repository";
import UserDTO from '../../dtos/user.dto';

class GetAllUsers {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }

    public async execute(): Promise<UserDTO[]> {
        const userDTOs: UserDTO[] = await this.userRepository.getAll();
        const users: User[] = userDTOs.map(user => new User({...user} as User));

        //  Operations

        return users.map((user) => user.getConvertToDTO);
    }
}

export default GetAllUsers;