import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import bcrypt from 'bcryptjs';

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxlength: 12,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  }
);

// Runs for both save and create functions in mongoose

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = model<IUser>('User', userSchema);

export default User;
