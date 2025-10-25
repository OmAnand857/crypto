import React from 'react';

export default function PartnersPage() {
  const partnersData = {
    partners1: [
      { id: 1, logo: "/api/placeholder/120/120" },
      { id: 2, logo: "/api/placeholder/120/120" },
      { id: 3, logo: "/api/placeholder/120/120" },
      { id: 4, logo: "/api/placeholder/120/120" }
    ],
    partners2: [
      { id: 5, logo: "/api/placeholder/120/120" },
      { id: 6, logo: "/api/placeholder/120/120" }
    ],
    partners3: [
      { id: 7, logo: "/api/placeholder/120/120" }
    ]
  };

  const PartnerCard = () => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
      <div className="p-8 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <span className="text-gray-400 text-sm font-medium">Logo</span>
        </div>
        <h3 className="text-gray-900 font-semibold mb-2">To be updated</h3>
        <p className="text-gray-500 text-sm text-center">Information will be added soon.</p>
      </div>
    </div>
  );

  const PartnerSection = ({ title, count }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Array.from({ length: count }).map((_, index) => (
          <PartnerCard key={index} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            Our Partners
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are grateful for the support of our partners. Details will be updated shortly.
          </p>
        </div>

        {/* Partners Sections */}
        <PartnerSection title="Partners 1" count={4} />
        <PartnerSection title="Partners 2" count={2} />
        <PartnerSection title="Partners 3" count={1} />
      </div>
    </div>
  );
}