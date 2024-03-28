import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import User from '../model/user.model';
import { generateAccessToken, registerUser } from '../services/user.service';
import ConflictException from '../../common/Error/error.conflictException';
import { convertToMilliSeconds } from '../../common/helpers/convertToMilliseconds';
import BadRequest from '../../common/Error/error.badRequest';
import { ILogin } from '../interfaces/user.login.interface';

export const register = async (req: Request, res: Response) => {
  const body = req.body as IUser;
  const userExist = await User.findOne({ email: body.email });

  if (userExist) {
    throw new ConflictException('User already exists');
  }

  const newUser = await registerUser(body, User);

  const token = await generateAccessToken(newUser._id as string);

  res.cookie('access_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: convertToMilliSeconds(process.env.JWT_EXPIRES_IN ?? '1d'),
  });

  return res.status(201).json({
    user: newUser,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as ILogin;
  const userExist = await User.findOne({ email: email });

  if (!userExist) {
    throw new BadRequest('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, userExist.password);

  if (!isMatch) {
    throw new BadRequest('Invalid credentials');
  }

  const token = await generateAccessToken(userExist._id);

  res.cookie('access_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: convertToMilliSeconds(process.env.JWT_EXPIRES_IN ?? '1d'),
  });

  const { password: dbPassword, ...rest } = userExist.toJSON();

  return res.status(200).json({
    message: 'Login successful',
    user: rest,
  });
};

export const validateToken = async (req: Request, res: Response) => {
  res.status(200).json({ user: req.user });
};

export const signOut = async (req: Request, res: Response) => {
  res.cookie('access_token', '', {
    expires: new Date(0),
  });
  res.status(200).json({
    message: 'Logout successful',
  });
};
