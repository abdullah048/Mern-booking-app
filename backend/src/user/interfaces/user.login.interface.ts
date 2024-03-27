import { IUser } from './user.interface';

export interface ILogin extends Omit<IUser, 'email' | 'password'> {
  email: string;
  password: string;
}
