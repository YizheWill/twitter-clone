import mongoose from 'mongoose';

export default mongoose.model(
  'User',
  mongoose.Schema(
    {
      handle: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);
