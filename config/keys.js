import { mongoURI as prodM, secretOrKey as prodS } from './keys_prod.js';
let m;
let s;

if (process.env.NODE_ENV === 'production') {
  m = prodM;
  s = prodS;
} else {
  m = '';
  s = '';
}

export const mongoURI = m;
export const secretOrKey = s;
