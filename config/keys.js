import { mongoURI as prodM, secretOrKey as prodS } from './keys_prod.js';
import { mongoURI as devM, secretOrKey as devS } from './keys_dev.js';

let m;
let s;

if (process.env.NODE_ENV === 'production') {
  m = prodM;
  s = prodS;
} else {
  m = devM;
  s = devS;
}

export const mongoURI = m;
export const secretOrKey = s;
