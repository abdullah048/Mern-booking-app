import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
require('express-async-errors');
import connectDatabase from '../database/connectDatabase';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import errorHandling from './common/Error/error.base.middleware';
import './common/Strategy/google.oauth.strategy';
import './common/Strategy/github.oauth.strategy';
import userRoutes from './routes/users.route';
import authRoutes from './routes/auth.route';
import passport from 'passport';

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
app.use(passport.initialize());

// google OAuth redirects
app.get('/google/failure', async (req: Request, res: Response) => {
  res.redirect(`${process.env.APP_URL as string}/sign-in`);
});

// github OAuth redirects
app.get('/github/failure', async (req: Request, res: Response) => {
  res.redirect(`${process.env.APP_URL as string}/sign-in`);
});

// Test endpoint
app.get('/api/v1/test', async (req: Request, res: Response) => {
  return res.send('Hello from backend.');
});

// Top level routes
app.use('/api/v1/user', userRoutes);
app.use('/auth', authRoutes);

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
