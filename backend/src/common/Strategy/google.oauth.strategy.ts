import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../../user/model/user.model';
import { IUser } from '../../user/interfaces/user.interface';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      let newUser: Partial<IUser> = {};
      try {
        const userExist = await User.findOne({ email: account.email });
        if (userExist) {
          newUser = userExist.toJSON();
          (newUser.firstName = account.name as string),
            (newUser.email = account.email as string),
            await User.updateOne({ email: account.email }, newUser);
        } else {
          newUser = {
            email: account.email as string,
            firstName: account.name as string,
            lastName: 'N/A',
            password: 'N/A',
            sub: account.sub,
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
