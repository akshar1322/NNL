'use client';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    otp: '',
    password: '',
    role: 'viewer',
    value: 0,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Fetch all users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // Handle View Button (opens popup)
  const handleView = (user: any) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  // Handle Delete Button (opens confirmation popup)
  const handleDelete = (userId: string) => {
    setSelectedUser({ _id: userId });
    setShowDeletePopup(true);
  };

  // Confirm delete action
  const confirmDelete = async () => {
    const response = await fetch(`/api/admin/users/${selectedUser._id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setUsers(users.filter((user: any) => user._id !== selectedUser._id));
      setShowDeletePopup(false);
    } else {
      console.log('Error deleting user');
    }
  };

  // Handle Add User Form submission
  const handleAddUser = async () => {
    const response = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      const createdUser = await response.json();
      setUsers([...users, createdUser]);
      setNewUser({
        username: '',
        email: '',
        otp: '',
        password: '',
        role: 'viewer',
        value: 0,
      }); // Reset form
    } else {
      console.log('Error adding user');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-bold mb-6">All Users</h1>

      {/* Add User Form */}
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-4">Add New User</h2>
        <div className="mb-4">
          <label className="text-white">Username</label>
          <input
            type="text"
            className="px-4 py-2 rounded bg-gray-800 w-full mt-2"
            placeholder='Enter username'
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="text-white">Email</label>
          <input
            type="email"
            className="px-4 py-2 rounded bg-gray-800  w-full mt-2"
            value={newUser.email}
            placeholder='Enter email'
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="text-white">OTP</label>
          <input
            type="text"
            className="px-4 py-2 bg-gray-800 rounded w-full mt-2"
            value={newUser.otp}
            placeholder='Enter 6 Digt OTP'
            onChange={(e) => setNewUser({ ...newUser, otp: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="text-white">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="px-4 py-2 rounded bg-gray-800  w-full mt-2"
              value={newUser.password}
              placeholder='Enter password'
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <button
              className="absolute right-2 top-4 text-gray-400 hover:text-white"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-white">Role</label>
          <select
            className="px-4 py-2 bg-gray-800  rounded w-full mt-2"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-white">Value</label>
          <input
            type="number"
            className="px-4 py-2 rounded bg-gray-800  w-full mt-2"
            value={newUser.value}
            placeholder='Enter 0 or 1'
            onChange={(e) => setNewUser({ ...newUser, value: parseInt(e.target.value) })}
          />
        </div>
        <button
          onClick={handleAddUser}
          className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded mt-4"
        >
          Add User
        </button>
      </div>

      {/* Table for users */}
      <table className="min-w-full bg-black text-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleView(user)}
                >
                  View
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View User Popup */}
      {showPopup && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white/30  backdrop-filter backdrop-blur-sm bg-opacity-10  p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>OTP:</strong> {selectedUser.otp}</p>
            <p><strong>Value:</strong> {selectedUser.value}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-200 text-black cursor-pointer hover:bg-blue-400 px-4 py-2 rounded mt-4"
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white/30  backdrop-filter backdrop-blur-sm bg-opacity-10   p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <button
              onClick={confirmDelete}
              className="bg-red-400 text-white px-6 py-2 rounded mt-4 cursor-pointer hover:bg-red-500 "
            >
              Confirm Delete
            </button>
            <button
              onClick={() => setShowDeletePopup(false)}
              className="bg-blue-200 text-black cursor-pointer hover:bg-blue-400 px-6 py-2 rounded mt-4 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
