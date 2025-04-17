'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '../admin/components/Sidebar';
import Topbar from '../admin/components/Topbar';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const username = 'mainadmin';
const role = 'admin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  // State for random URL
  const [randomURL, setRandomURL] = useState<string>('');

  // Generate random URL function
  const generateRandomURL = () => {
    const randomString = Math.random().toString(36).substring(2, 10); // Generate random string
    const baseURL = 'http://localhost:3000/login/';
    setRandomURL(baseURL + randomString); // Set the random URL
  };

  useEffect(() => {
    // Generate random URL on component mount
    generateRandomURL();
  }, []);

  if (isLoginPage) {
    return (
      <main>
        {children}
        <Toaster position="top-center" reverseOrder={false} /> {/* ✅ still here */}
      </main>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar username={username} role={role} />

      <main className="flex-1 bg-black p-6">
        <Topbar />
        {children}

        {/* Display Random URL */}
        {randomURL && (
          <div className="mt-4 text-white">
            <p>Your unique admin login URL:</p>
            <a href={randomURL} target="_blank" className="text-blue-400">
              {randomURL}
            </a>
          </div>
        )}

        <Toaster position="top-center" reverseOrder={false} /> {/* ✅ moved here too */}
      </main>
    </div>
  );
}
