import passport from 'passport';
import { generateToken } from '../helpers/jwt'
import { sanitizeUser } from '../helpers/sanitizeUser';

export const googleAuthenticate = passport.authenticate('google', { scope: ['profile', 'email'] });
export const googleAuthCallback = (req, res, next) => passport.authenticate('google', async (err, user) => {
  if (!user) {
    return res.redirect('/login');
  }
  const sanitizedUser = sanitizeUser(user); // remove password from user objec
  const { userId, isAdmin } = sanitizedUser;
  const payload = { userId, isAdmin };
  const token = await generateToken(payload);
  res.cookies.set('token', token, { signed: true }); // create token and send to client's crowser
  return res.redirect('/posts');
})(req, res, next);
