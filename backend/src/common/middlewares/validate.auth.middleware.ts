import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import UnauthorizedException from '../Error/error.unauthorizedException';
import { IUser } from '../../user/interfaces/user.interface';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies['access_token'];
  if (!token) {
    throw new UnauthorizedException('Unauthorized');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = (decoded as JwtPayload).user;
  } catch (error) {
    throw new UnauthorizedException('Unauthorized');
  }

  next();
};

export default verifyToken;
