import React from 'react';
import { FileText, Award } from 'lucide-react';

const IndocryptAcceptedPapers = () => {
  return (
    <div className="bg-indigo-900 min-h-[500px] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-red-400" />
            Accepted Papers – Indocrypt 2025
          </h1>
          <p className="text-xl text-gray-200">
            Celebrating excellence in cryptography research. Explore the officially accepted papers for Indocrypt 2025.
          </p>
        </div>

        {/* Congratulations & Paper List Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Congratulations to All Authors
            </h2>
            <p className="text-gray-600">
              The Indocrypt 2025 organizing committee is pleased to share the complete list of accepted papers. We look forward to your valuable presentations during the conference.
            </p>
          </div>

          {/* Paper List Card */}
          <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-between transition duration-300 hover:shadow-md">
            <div className="flex items-center">
              <div className="text-red-600 mr-4">
                {/* Simplified Icon representation for the PDF icon */}
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Indocrypt 2025 Accepted Papers List
                </h3>
                <p className="text-sm text-gray-500">
                  The official list of papers accepted for presentation at Indocrypt 2021, including titles, authors, and affiliations.
                </p>
              </div>
            </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 shadow-md"
              onClick={() => console.log('View Document clicked')}
            >
              View Document
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            The accepted papers document includes paper titles, author details, and affiliations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndocryptAcceptedPapers;