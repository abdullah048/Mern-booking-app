// google oauth strategy

import passport from 'passport';

export const googleOAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

export const googleOAuthCallback = passport.authenticate('google', {
  passReqToCallback: true,
  session: false,
  // successRedirect: '/google/success',
  failureRedirect: '/google/failure',
});
