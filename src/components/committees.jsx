import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const CommitteePage = ({ pageIndex = 0 }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await window.fs.readFile('../data/committees.json', { encoding: 'utf8' });
        const jsonData = JSON.parse(response);
        
        // Get the specific page by index
        if (jsonData.data && jsonData.data[pageIndex]) {
          setPageData(jsonData.data[pageIndex]);
        } else {
          setError(`Page at index ${pageIndex} not found`);
        }
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load committee data');
        
        // Fallback to sample data for demonstration
        const sampleData = {
          header: "Program Committees",
          sections: [
            {
              title: "Program Chairs",
              members: [
                { name: "Luca de Feo", affiliation: "IBM Research, Zürich" },
                { name: "Ratna Dutta", affiliation: "IIT Kharagpur, India" },
                { name: "Sugata Gangopadhyay", affiliation: "IIT Roorkee" }
              ]
            },
            {
              title: "Program Committee Members",
              members: [
                { name: "Aditi Gangopadhyay", affiliation: "Indian Institute of Technology Roorkee" },
                { name: "Ajith Suresh", affiliation: "Technology Innovation Institute (TII), UAE" },
                { name: "Ana Salageon", affiliation: "Loughborough University, UK" },
                { name: "Andre Esser", affiliation: "Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE" },
                { name: "Anubhab Baksi", affiliation: "Lund University, Sweden" },
                { name: "Anupam Chattopadhyay", affiliation: "Nanyang Technological University, Singapore" }
              ]
            }
          ]
        };
        setPageData(sampleData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageIndex]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error && !pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
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