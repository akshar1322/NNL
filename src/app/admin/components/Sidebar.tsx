'use client';
import React from 'react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Sidebar({ username, role }: { username: string; role: string }) {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="text-sm text-gray-400 capitalize">{role}</p>
        </div>
        <nav className="p-6 space-y-4">
          <Link href="/admin/dashboard" className="block hover:text-lime-400">Home</Link>
          
          <Link href="/admin/users" className="block hover:text-lime-400">Users</Link>
          <Link href="/admin/export" className="block hover:text-lime-400">Export</Link>
        </nav>
        <LogoutButton/>
      </div>
      <div className="p-4 text-center text-md text-gray-500">
        NNL Admin Panel
        <br />
        <span>Develop by SplitxLLC</span>
        <br />
        <span className='text-md text-gray-500'>Version 1.0.0</span>

      </div>
    </aside>
  );
}
