import express from 'express';
import {
  login,
  register,
  signOut,
  validateToken,
} from '../user/controllers/user.controller';
import registerDto from '../user/dtos/user.dto';
import { validateRequest } from '../common/middlewares/validate.request.middleware';
import loginDto from '../user/dtos/user.login.dto';
import verifyToken from '../common/middlewares/validate.auth.middleware';

const router = express.Router();

router.route('/register').post(registerDto, validateRequest, register);

router.route('/sign-in').post(loginDto, validateRequest, login);

router.route('/validate-token').get(verifyToken, validateToken);

router.route('/sign-out').post(signOut);

export default router;
