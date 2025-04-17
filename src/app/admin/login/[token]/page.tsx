// app/(admin)/login/[token]/page.tsx

'use client';
import { useParams } from 'next/navigation';

export default function LoginPage() {
  const { token } = useParams();

  // Validate token or just log it
  console.log('Login token:', token);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
        {/* Login form here */}
        <p className="mt-4 text-sm text-gray-400">Access token: {token}</p>
      </div>
    </div>
  );
}
