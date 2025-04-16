'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '../admin/components/Sidebar';
import Topbar from '../admin/components/Topbar';

const username = 'mainadmin'; // You can fetch this from session or token
const role = 'admin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current path is the login page
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return (
      <main>
        {children}
      </main>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar username={username} role={role} />

      <main className="flex-1 bg-black p-6">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
