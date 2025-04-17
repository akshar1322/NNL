// Dashboard.tsx
'use client';
import { useEffect, useState } from 'react';
import { StatBox } from '../components/StatBox';
import ChartSection from '../components/ChartSection';
import Loader from '../components/Loader'; // Import the loader

export default function Dashboard() {
  const [data, setData] = useState({
    recentApplications: 0,
    totalApplications: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true); // Loading state to control the loader visibility

  useEffect(() => {
    // Fetch dashboard data from the API
    const fetchDashboardData = async () => {
      const response = await fetch('/api/admin/dashboard/summary');
      const result = await response.json();
      setData({
        recentApplications: result.recentApplications,
        totalApplications: result.totalApplications,
        totalUsers: result.totalUsers,
      });
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchDashboardData();
  }, []); // Empty array ensures it runs only once when the component mounts

  // Removed unused variable 'role'

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-black p-6">
        {/* Show the loader while data is being fetched */}
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <>
            {/* Grid Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <StatBox title="Next 24H Applications" value={data.recentApplications} />
              <StatBox title="Total Applications" value={data.totalApplications} />
              <StatBox title="Total Users" value={data.totalUsers} />
            </div>

            {/* Chart */}
            <ChartSection />
          </>
        )}
      </main>
    </div>
  );
}
