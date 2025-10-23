import React from 'react';


const IndocryptSubmission = () => {
  return (
    <div className="py-16 px-4 bg-white">
      {/* --- Main Heading Section --- */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Indocrypt 2025
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Submit your paper below following the guidelines provided.
        </p>
        
        {/* Top Status Badge */}
        <div className="mt-6 inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium">
          <span className="mr-2" role="img" aria-label="document icon">📄</span>
          Paper Submission Portal Closed
        </div>
      </div>

      {/* --- Submission Guidelines Box --- */}
      <div className="max-w-3xl mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8">
        
        <h2 className="flex items-center text-2xl font-semibold text-gray-800">
          <span className="mr-3 text-2xl" role="img" aria-label="guidelines icon">📝</span>
          Submission Guidelines
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-5 text-gray-700">
          <li>Submit original research papers only.</li>
          <li>Use the Springer LNCS format (LaTeX or Word).</li>
          <li>Maximum length: 20 pages (excluding references).</li>
          <li>Submissions must be anonymous.</li>
          <li>Submit through the EasyChair platform.</li>
          <li>Only PDF format is accepted.</li>
        </ul>

        {/* Closed Notification */}
        <div className="mt-8 text-center">
          <p className="flex justify-center items-center text-red-600 font-bold">
            <span className="mr-2 text-xl" role="img" aria-label="close icon">❌</span>
            The paper submission portal is now closed.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            The submission window has ended. Please check back later for updates or future calls for papers.
          </p>
        </div>

        {/* Bottom Status Button */}
        <div className="mt-8 flex justify-center">
          <button 
            disabled 
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-md text-sm font-medium cursor-not-allowed"
          >
            <span className="mr-2" role="img" aria-label="document icon">📄</span>
            Paper Submission Closed
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndocryptSubmission;