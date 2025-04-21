// fixtures/users.ts
import { UserModel } from '../models/userModel';

export const standardUser = new UserModel({
  name: 'Usuário Padrão',
  email: 'standard_user',
  password: 'secret_sauce',
});

export const lockedOutUser = new UserModel({
  name: 'Usuário Bloqueado',
  email: 'locked_out_user',
  password: 'secret_sauce',
});
