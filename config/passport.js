import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { secretOrKey } from './keys.js';
import User from '../models/User.js';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

export default (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((data) => {
          console.log('data', data);
          return done(null, data || false);
        })
        .catch((err) => console.log('err', err));
    })
  );
};
