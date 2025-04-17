// Applications.tsx
'use client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';  // Import the Loader component

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // Fetch all applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        const response = await fetch('/api/admin/applications');
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
          toast.success('Applications fetched successfully!');
        } else {
          toast.error('Failed to fetch applications.');
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
        toast.error('Error fetching applications.');
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchApplications();
  }, []);

  // Handle View Button
  const handleView = (applicationId: string) => {
    const application = applications.find((app: any) => app._id === applicationId);
    setSelectedApplication(application);
    setViewModalOpen(true);
  };

  // Handle Delete Button
  const handleDelete = (applicationId: string) => {
    const application = applications.find((app: any) => app._id === applicationId);
    setSelectedApplication(application);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedApplication) {
      const response = await fetch(`/api/admin/applications/${selectedApplication._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setApplications(applications.filter((app: any) => app._id !== selectedApplication._id));
        toast.success('Application deleted successfully!');
        setDeleteModalOpen(false);
      } else {
        console.log('Error deleting application');
        toast.error('Failed to delete application.');
        setDeleteModalOpen(false);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-bold mb-6">All Applications</h1>

      {/* Show loader while fetching data */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
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
                  <td className="px-5 py-2">{`${app.firstName} ${app.lastName}`}</td>
                  <td className="px-4 py-2">{new Date(app.submittedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2 mr-5">
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
        </>
      )}

      {/* View Modal */}
      {viewModalOpen && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white/30 backdrop-filter backdrop-blur-sm bg-opacity-10 p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Application Details</h2>
            <p><strong>Name:</strong> {`${selectedApplication.firstName} ${selectedApplication.lastName}`}</p>
            <p><strong>Email:</strong> {selectedApplication.email}</p>
            <p><strong>Submitted At:</strong> {new Date(selectedApplication.submittedAt).toLocaleString()}</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-blue-200 text-black cursor-pointer hover:bg-blue-400 px-4 py-2 rounded mt-4"
                onClick={() => setViewModalOpen(false)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white/30 backdrop-filter backdrop-blur-sm bg-opacity-10 p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this application?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-red-400 text-white px-6 py-2 rounded mt-4 cursor-pointer hover:bg-red-500"
                onClick={confirmDelete}
              >
                Confirm Delete
              </button>
              <button
                className="bg-blue-200 text-black cursor-pointer hover:bg-blue-400 px-6 py-2 rounded mt-4 ml-2"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
