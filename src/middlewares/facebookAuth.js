import passport from 'passport';
import localStorage from 'localStorage';
import { generateToken } from '../helpers/jwt';
import { sanitizeUser } from '../helpers/sanitizeUser';

export const facebookAuthenticate = passport.authenticate('facebook', { scope: ['email'] });
export const facebookAuthCallback = (req, res, next) => passport.authenticate('facebook', async (err, user) => {
  if (!user) {
    return res.redirect('/login');
  }
  const sanitizedUser = sanitizeUser(user); // remove password from user
  const {
    userId,
    isAdmin,
    username,
    name,
    isVerified,
    profileImage
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
  res.cookies.set('profileImage', profileImage, { signed: true });
  return res.redirect('/posts');
})(req, res, next);
