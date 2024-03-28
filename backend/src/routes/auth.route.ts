import express from 'express';
import {
  googleOAuth,
  googleOAuthCallback,
} from '../common/auth/controllers/auth.controller';
import { generateAccessToken } from '../user/services/user.service';
import { convertToMilliSeconds } from '../common/helpers/convertToMilliseconds';

const router = express.Router();

router.route('/google').get(googleOAuth);

router
  .route('/google/callback')
  .get(googleOAuthCallback, async (req: any, res) => {
    const token = await generateAccessToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: convertToMilliSeconds(process.env.JWT_EXPIRES_IN ?? '1d'),
    });
    res.redirect(`${process.env.APP_URL}` as string);
  });

export default router;
