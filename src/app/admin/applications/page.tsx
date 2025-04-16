// app/admin/applications/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function Applications() {
  const [applications, setApplications] = useState([]);

  // Fetch all applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch('/api/admin/applications');
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);

  // Handle View Button
  const handleView = (applicationId: string) => {
    // You can redirect or show more details for the application
    console.log('View application with ID:', applicationId);
  };

  // Handle Delete Button
  const handleDelete = async (applicationId: string) => {
    const response = await fetch(`/api/admin/applications/${applicationId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setApplications(applications.filter((app: any) => app._id !== applicationId));
    } else {
      console.log('Error deleting application');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-bold mb-6">All Applications</h1>

      {/* Table for applications */}
      <table className="min-w-full bg-black text-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app: any) => (
            <tr key={app._id}>
              <td className="px-4 py-2">{`${app.firstName} ${app.lastName}`}</td>
              <td className="px-4 py-2">{new Date(app.submittedAt).toLocaleDateString()}</td>
              <td className="px-4 py-2 mr-3">
                <button
                  className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded mr-3"
                  onClick={() => handleView(app._id)}
                >
                  View
                </button>
                <button
                  className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(app._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
