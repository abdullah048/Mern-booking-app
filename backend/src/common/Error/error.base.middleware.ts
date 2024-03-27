import { NextFunction, Request, Response } from 'express';

interface ErrorHandler extends Error {
  statusCode: number;
}

const errorHandling = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).json({
    message: err.message,
    success: false,
  });
  next();
};

export default errorHandling;
