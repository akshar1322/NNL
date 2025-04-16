'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear JWT or session data (e.g., cookies/localStorage)
    localStorage.removeItem('token'); // or whatever key you use

    // Optional: notify server to revoke token
    // await fetch('/api/logout', { method: 'POST' })

    // Redirect to login page
    router.push('/admin/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded shadow transition duration-200"
    >
      Logout
    </button>
  );
}
