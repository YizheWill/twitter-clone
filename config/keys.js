let m;
let s;

if (process.env.NODE_ENV === 'production') {
  import { mongoURI as prodM, secretOrKey as prodS } from './keys_prod.js';
  m = prodM;
  s = prodS;
} else {
  import { mongoURI as devM, secretOrKey as devS } from './keys_dev.js';
  m = devM;
  s = devS;
}

export const mongoURI = m;
export const secretOrKey = s;
