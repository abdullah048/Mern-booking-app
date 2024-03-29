// google oauth strategy

import passport from 'passport';

export const googleInitiateAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

export const googleOAuthCallback = passport.authenticate('google', {
  passReqToCallback: true,
  session: false,
  failureRedirect: '/google/failure',
});

// github oauth strategy

export const githubInitiateAuth = passport.authenticate('github', {
  scope: ['user:email'],
});

export const githubOAuthCallback = passport.authenticate('github', {
  failureRedirect: '/github/failure',
  passReqToCallback: true,
  session: false,
});
