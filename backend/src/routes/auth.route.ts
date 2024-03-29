import express from 'express';
import {
  githubInitiateAuth,
  githubOAuthCallback,
  googleInitiateAuth,
  googleOAuthCallback,
} from '../common/auth/controllers/auth.controller';
import { generateAccessToken } from '../user/services/user.service';
import { convertToMilliSeconds } from '../common/helpers/convertToMilliseconds';

const router = express.Router();

// Google routes

router.route('/google').get(googleInitiateAuth);

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

// Github routes

router.route('/github').get(githubInitiateAuth);

router
  .route('/github/callback')
  .get(githubOAuthCallback, async function (req, res) {
    const token = await generateAccessToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: convertToMilliSeconds(process.env.JWT_EXPIRES_IN ?? '1d'),
    });
    res.redirect(`${process.env.APP_URL}` as string);
  });

export default router;
