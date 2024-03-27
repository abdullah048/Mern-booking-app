import { Model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import jwt from 'jsonwebtoken';

export async function registerUser(
  data: IUser,
  model: Model<IUser>
): Promise<Partial<Omit<IUser, 'password'>>> {
  const user = await model.create(data);

  // Return a modified user object without the "password" field and convert Mongoose document to plain JavaScript object
  const { password, ...rest } = user.toJSON();
  return rest;
}

export async function generateAccessToken(id: string) {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  });
}
