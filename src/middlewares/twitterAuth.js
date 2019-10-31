import passport from 'passport';
import { generateToken } from '../helpers/jwt';
import { sanitizeUser } from '../helpers/sanitizeUser';

export const twitterAuthenticate = passport.authenticate('twitter');
export const twitterAuthCallback = (req, res, next) => passport.authenticate('twitter', async (err, user) => {
  if (!user) {
    return res.redirect('/login');
  }
  const sanitizedUser = sanitizeUser(user); // remove password from user
  const { userId, isAdmin } = sanitizedUser;
  const payload = { userId, isAdmin };
  const token = await generateToken(payload);
  res.cookies.set('token', token, { signed: true }); // create token and send to client
  return res.redirect('/posts');
})(req, res, next);