import UserDTO from "../../application/dtos/user.dto";

class User {
  public id: string;
  public fullName: string;
  public email: string;
  public phone: string | null;

  constructor(props: User) {
    this.id = props.id;
    this.fullName = props.fullName;
    this.email = props.email;
    this.phone = props.phone;
  }

  public get getConvertToDTO (): UserDTO {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
    }
  }
}

export default User;
