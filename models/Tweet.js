import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;
export default mongoose.model(
  'Tweet',
  mongoose.Schema(
    {
      user: {
        type: ObjectId,
        ref: 'User',
        // ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      // date: {
      //   type: Date,
      //   default: Date.now,
      //   // default: Date.now(),
      // },
    },
    { timestamps: true }
  )
);
