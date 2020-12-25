import { mongoURI as prodM, secretOrKey as prodS } from './keys_prod.js';
let m;
let s;

if (process.env.NODE_ENV === 'production') {
  m = prodM;
  s = prodS;
} else {
  m =
    'mongodb+srv://will:AeG3W5DMiqX7yvyy@cluster0.raj8b.mongodb.net/<dbname>?retryWrites=true&w=majority';
  s = 'skeIdjf123nsSdie234Kj8k';
}

export const mongoURI = m;
export const secretOrKey = s;
