import passport from 'passport';
import Cookies from 'cookies';

export const googleAuthenticate = passport.authenticate('google', { scope: ['profile', 'email'] });
export const googleAuthCallback = (req, res, next) => passport.authenticate('google', (err, profile) => {
  if (!profile) {
    return res.redirect('/login');
  }
  // const cookies = new Cookies(req, res);
  // cookies.set(user)
  const sanitizedUser = (user) => {
    const { dataValues } = user.User;
    return {
      userId: dataValues.userId, name: user.dataValues.name, profileImage: dataValues.profileImage,
      email: dataValues.email, username: dataValues.username, googleId: dataValues.googleId
    }
  }
  console.log("user is", sanitizedUser(profile))
  return res.redirect('/jobInvites');
})(req, res, next)