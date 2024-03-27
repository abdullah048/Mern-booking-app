import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
require('express-async-errors');
import connectDatabase from '../database/connectDatabase';
import userRoutes from './routes/users.route';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import errorHandling from './common/Error/error.base.middleware';
import verifyToken from './common/middlewares/validate.auth.middleware';

const app = express();

// Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());

// Test endpoint
app.get('/api/v1/test', async (req: Request, res: Response) => {
  return res.send('Hello from backend.');
});

// Top level routes
app.use('/api/v1/user', userRoutes);

// Express No Route middleware
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: `No route ${req.originalUrl} available in this server`,
    success: false,
  });
  next();
});

// Express Error middleware
app.use(errorHandling);

// Connect to database
connectDatabase();

export default app;
