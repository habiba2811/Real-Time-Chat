/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms format
    httpOnly: true, //prevent xxs attacks cross-site scripting attacks
    sameSit: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    // CSRF attacks cross-site request forgery attacks
  });
};
export default generateTokenAndSetCookie;
