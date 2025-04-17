import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed password
  role: {
    type: String,
    enum: ['admin', 'editor', 'viewer'],
    default: 'viewer',
  },
  otp: { type: String },
  value: { type: Number, default: 0 }, // 0 = limited, 1 = full (admin)
});

// Hash the password before saving
UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
