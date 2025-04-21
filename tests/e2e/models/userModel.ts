export type UserModelProps = {
  name: string;
  email: string;
  password: string;
};

export class UserModel {
  name: string;
  email: string;
  password: string;

  constructor({ name, email, password }: UserModelProps) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
  