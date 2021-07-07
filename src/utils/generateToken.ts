import jwt from 'jsonwebtoken';

export const generateToken = (res: any, username: string) => {
  const expiration = process.env.NODE_ENV === 'TESTING' ? 100 : 604800000;
  const token = jwt.sign({ username}, process.env.JWT_SECRET, {
    expiresIn: process.env.NODE_ENV === 'TESTING' ? '1d' : '7d',
  });
  return res.cookie('token', token, {
    expires: new Date(Date.now() + expiration),
    secure: false, // true if https
    httpOnly: true,
  });
};