import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  await dbConnect();

  const username = 'MainAdminDEV';
  const email = 'SplixLLC@proton.me';
  const password = 'Akshar@1322$';
  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await User.findOne({ $or: [{ email }, { username }] });

  if (existing) {
    console.log('⚠️ Admin already exists');
    return;
  }

  const newAdmin = await User.create({
    username,
    email,
    password: hashedPassword,
    role: 'admin',
    value: 1, // full access
    otp: '972677', // set manually
  });

  console.log('✅ Admin created:', newAdmin);
}

createAdmin().then(() => process.exit());
