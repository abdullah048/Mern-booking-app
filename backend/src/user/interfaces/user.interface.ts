import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  sub?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
