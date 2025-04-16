'use client';
import { useEffect, useState } from 'react';

export default function Topbar() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-gray-900 shadow px-6 py-4 flex justify-between items-center border-b border-gray-300">
      <h1 className="font-bold text-lg">NorthNLoans Admin</h1>
      <div className="flex items-center space-x-6 text-sm">
        <span>{dateTime.toLocaleString()}</span>
        <span className="text-yellow-500">🔋 Battery</span>
        <span className="text-red-500">🔔 1 new application</span> {/* You can connect this to real data later */}
      </div>
    </header>
  );
}
