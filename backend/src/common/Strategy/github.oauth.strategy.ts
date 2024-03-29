import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import User from '../../user/model/user.model';
import { IUser } from '../../user/interfaces/user.interface';

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: process.env.GITHUB_CALLBACK_URI as string,
    },
    async (_: any, __: any, profile: any, done: any) => {
      const account = profile._json;
      let newUser: Partial<IUser> = {};
      try {
        const userExist = await User.findOne({ email: account.email });
        if (userExist) {
          done(null, userExist);
          return;
        } else {
          newUser = {
            email: account.email as string,
            firstName: account.login as string,
            lastName: 'N/A',
            password: 'N/A',
            sub: account.id,
          };
          await User.create(newUser);
        }
        done(null, newUser);
      } catch (error: any) {
        console.log('error: ', error);
        done(error);
      }
    }
  )
);
