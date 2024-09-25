import UserDTO from "../../application/dtos/user.dto";
import UserModel from "../orm/db/models/user.model";
import RedisService from "../sdk/redis/redis.service";

class UserRepository {
  private redis: RedisService;

  constructor(redis: RedisService) {
    this.redis = redis;
  }

  async getAll(): Promise<UserDTO[]> {
    const records = await UserModel.findAll();

    return records.map((record, index) => {
      return { ...record.dataValues };
    });
  }

  async getById(id: string): Promise<UserDTO> {
    const cached = await this.redis.get(`user:${id}`);

    if (cached) {
      const parsed = JSON.parse(cached);
      return { ...parsed };
    }

    const record = await UserModel.findOne({ where: { id: id } });

    if (!record) throw "User not found.";

    return { ...record.dataValues };
  }

  async createOrUpdate(props: UserDTO): Promise<UserDTO> {
    const record = await UserModel.upsert({
      id: props.id,
      fullName: props.fullName,
      email: props.email,
      phone: props.phone,
    });

    this.redis.set(
      `user:${record[0].dataValues.id}`,
      JSON.stringify(record[0].dataValues),
      3600
    );

    return { ...record[0].dataValues };
  }
}

export default UserRepository;
