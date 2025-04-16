// app/admin/page.tsx
import { redirect } from 'next/navigation';
import React from 'react';

export default function AdminRootPage() {
  redirect('/admin/login');
}
