import passport from 'passport';
import localStorage from 'localStorage';
import { generateToken } from '../helpers/jwt';
import { sanitizeUser } from '../helpers/sanitizeUser';

export const googleAuthenticate = passport.authenticate('google', { scope: ['profile', 'email'] });
export const googleAuthCallback = (req, res, next) => passport.authenticate('google', async (err, user) => {
  if (!user) {
    return res.redirect('/login');
  }
  const sanitizedUser = sanitizeUser(user); // remove password from user
  const {
    userId,
    isAdmin,
    username,
    name,
    isVerified
  } = sanitizedUser;

  const payload = { userId, isAdmin };
  const token = await generateToken(payload);

  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(sanitizedUser));

  res.cookies.set('token', token, { signed: true }); // create token and send to client
  res.cookies.set('username', username, { signed: true });
  res.cookies.set('name', name, { signed: true });
  res.cookies.set('isAdmin', isAdmin, { signed: true });
  res.cookies.set('isVerified', isVerified, { signed: true });
  return res.redirect('/posts');
})(req, res, next);
