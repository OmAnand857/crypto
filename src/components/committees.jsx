import React from 'react';
import { User } from 'lucide-react';

import committeeData from '../data/committees.json';



const CommitteePage = ({ pageIndex = 0 }) => {
  // Get the specific page by index
  const pageData = committeeData.data[pageIndex];

  // Reusable PersonCard component
  const PersonCard = ({ person }) => (
    <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4 hover:bg-gray-100 transition-colors">
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
        <User className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{person.name}</h3>
        <p className="text-sm text-gray-600">{person.affiliation}</p>
      </div>
    </div>
  );

  // Handle case where page doesn't exist
  if (!pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-red-600">Page at index {pageIndex} not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header - Dynamic from JSON */}
        <h1 className="text-5xl font-bold text-blue-700 text-center mb-16">
          {pageData.header || "Committee Page"}
        </h1>

        {/* Dynamic Sections */}
        {pageData.sections && pageData.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className={sectionIndex < pageData.sections.length - 1 ? "mb-16" : ""}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.members && section.members.map((member, memberIndex) => (
                <PersonCard key={memberIndex} person={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CommitteePage;