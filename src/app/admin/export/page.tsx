'use client';

import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function ExportApplications() {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (fromDate) query.append('from', fromDate);
      if (toDate) query.append('to', toDate);

      const res = await fetch(`/api/admin/export?${query.toString()}`);
      const result = await res.json();
      setData(result);

    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fromDate, toDate]);

  const handleDownload = (type: 'json' | 'csv') => {
  if (!data.length) {
    toast.error('No data available to download!');
    return;
  }

  const fileName = `applications-${format(new Date(), 'yyyyMMdd_HHmmss')}`;

  if (type === 'json') {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(blob, `${fileName}.json`);
    toast.success('JSON file downloaded successfully!');
  } else {
    const csvHeaders = Object.keys(data[0]).join(',');
    const csvRows = data.map((item: any) =>
      Object.values(item).map(val => `"${val}"`).join(',')
    );
    const csvString = [csvHeaders, ...csvRows].join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    saveAs(blob, `${fileName}.csv`);
    toast.success('CSV file downloaded successfully!');
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Export Applications</h1>

      <div className="flex cursor-pointer flex-col md:flex-row gap-4 mb-6">
        <div>
          <label className="block  text-white">From Date</label>
          <input
            type="date"
            className="bg-gray-800 cursor-pointer text-white p-2 rounded"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">To Date</label>
          <input
            type="date"
            className="bg-gray-800  text-white p-2 rounded"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
          />
        </div>
      </div>

      <div className="text-white mb-4">
        Total Applications: <strong>{loading ? 'Loading...' : data.length}</strong>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleDownload('json')}
          className="bg-lime-600 px-4 py-2 cursor-pointer rounded text-white hover:bg-lime-700"
        >
          Download JSON
        </button>
        <button
          onClick={() => handleDownload('csv')}
          className="bg-blue-600 px-4 cursor-pointer py-2 rounded text-white hover:bg-blue-700"
        >
          Download CSV
        </button>
      </div>
    </div>
  );
}
