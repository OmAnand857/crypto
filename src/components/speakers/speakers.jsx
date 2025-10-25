import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function IndocryptSpeakers() {
  const keynoteData = [
    {
      name: "Shivam Bhasin",
      role: "Professor",
      image: "/api/placeholder/200/200",
      title: "Cracking Secrets Beyond the Dataset: Revisiting Deep Learning in Side-Channel Analysis",
      affiliation: "Temasek Lab and National Integrated Center For Evaluation, Nanyang Technological University, Singapore"
    },
    {
      name: "Debdeep Mukhopadhyay",
      role: "Professor",
      image: "/api/placeholder/200/200",
      title: "Every Context Leaves a Trace: Microarchitecture Leakages in Modern Computing Systems",
      affiliation: "Indian Institute of Technology Kharagpur, India"
    },
    {
      name: "Shuichi Katsumata",
      role: "Lead Cryptography Researcher",
      image: "/api/placeholder/200/200",
      title: "Taking Post-Quantum Cryptography from Theory to Practice: A Case Study with Signal",
      affiliation: "PQShield & AIST, Japan"
    }
  ];

  const tutorialData = [
    {
      name: "Luca De Feo",
      role: "Research Staff Member",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Sugata Gangopadhyay",
      role: "Professor",
      image: "/api/placeholder/200/200"
    }
  ];

  const SpeakerCard = ({ speaker, showTitle = true }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-32 h-32 rounded-full object-cover mb-4 grayscale hover:grayscale-0 transition-all"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{speaker.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{speaker.role}</p>
        
        {showTitle && speaker.title && (
          <>
            <div className="w-full border-t border-gray-200 pt-4 mb-2">
              <p className="text-xs font-semibold text-gray-700 mb-1">Title of the talk:</p>
              <p className="text-sm text-gray-800 mb-3">{speaker.title}</p>
            </div>
            
            {speaker.affiliation && (
              <div className="w-full mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-1">Affiliation:</p>
                <p className="text-xs text-gray-600">{speaker.affiliation}</p>
              </div>
            )}
          </>
        )}
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
          View Abstract →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Indocrypt 2025 Speakers
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join us for illuminating talks from experts in cryptography, security, and quantum-resistant algorithms.
          </p>
          
          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">December 14 - 17, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700">IIIT Bhubaneswar</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-gray-700">To be Updated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keynote Speakers Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Keynote Speakers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keynoteData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} showTitle={true} />
          ))}
        </div>
      </div>

      {/* Tutorial Speakers Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Tutorial Speakers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tutorialData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} showTitle={false} />
          ))}
        </div>
      </div>
    </div>
  );
}