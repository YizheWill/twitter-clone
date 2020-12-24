import passport from 'passport';
import { Router } from 'express';
import User from '../../models/User.js';
import { secretOrKey } from '../../config/keys.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = Router();

// test get current user

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('req', req);
  // the req.user is set by the passport, if authenticate passes, passport will immediately set the req.user to be
  // the return value of the passport.use(new JwtStrategy(...)) in the config/passport.js file
  res.json({ id: req.user.id, handle: req.user.handle, email: req.user.email });
});

// register new user

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({ err: 'email exists' });
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
          if (err) throw err;
          newUser.password = hashedPassword;
          newUser
            .save()
            .then((userInfo) => {
              const payload = { id: userInfo.id, handle: userInfo.handle };
              jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.send({ success: true, token: 'Bearer ' + token });
              });
            })
            .catch((err) => console.log('err', err));
        });
      });
    }
  });
});

// login a user

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      res.status(404).json({ user: 'no such a user' });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle };
        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({ success: true, token: 'Bearer ' + token });
        });
      } else {
        res.status(400).json({ password: 'wrong pass' });
      }
    });
  });
});

export default router;
