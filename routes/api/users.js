import { Router } from 'express';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
const router = Router();

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
            .then((userInfo) => res.json(userInfo))
            .catch((err) => console.log('err', err));
        });
      });
    }
  });
});

export default router;
