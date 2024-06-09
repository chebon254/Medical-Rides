import React from 'react';
import Link from 'next/link';

function AdminPage() {
  return (
    <div className="container m-auto">
      <h1 className="font-bold mb-5 mt-14 text-5xl">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/admin/pending">
          <div className="card bg-gray-200 p-5 rounded-lg shadow-md text-center cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">Pending Rides</h2>
          </div>
        </Link>
        <Link href="/admin/completed">
          <div className="card bg-gray-200 p-5 rounded-lg shadow-md text-center cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">Completed Rides</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;

