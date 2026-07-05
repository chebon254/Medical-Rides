import React from 'react';
import Link from 'next/link';

function AdminPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="font-manrope font-bold mb-8 mt-14 text-4xl text-slate-900">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/pending">
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all text-center cursor-pointer">
            <h2 className="font-manrope text-xl font-bold text-amber-600">Pending Rides</h2>
          </div>
        </Link>
        <Link href="/admin/completed">
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-teal-400 transition-all text-center cursor-pointer">
            <h2 className="font-manrope text-xl font-bold text-teal-600">Completed Rides</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;
