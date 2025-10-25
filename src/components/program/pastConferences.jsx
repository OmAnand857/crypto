import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function PastConferences() {
  const conferences = [
    {
      year: "2024",
      location: "Chennai, India",
      dates: "December 18 - 21 2024",
      link: "#"
    },
    {
      year: "2023",
      location: "BITS Pilani GOA, India",
      dates: "December 10 - 13 2023",
      link: "#"
    },
    {
      year: "2022",
      location: "Bose Institute, EN 80, Sector V, Salt Lake, Kolkata, India",
      dates: "December 11 - 14 2022",
      link: "#"
    },
    {
      year: "2021",
      location: "The LNM Institute of Information Technology , Jaipur, India",
      dates: "December 13 - 15 2021",
      link: "#"
    }
  ];

  const ConferenceCard = ({ conference }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-indigo-600">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-indigo-700 mb-6">
          Indocrypt {conference.year}
        </h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-700">Location: </span>
              <span className="text-gray-600">{conference.location}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-700">Dates: </span>
              <span className="text-gray-600">{conference.dates}</span>
            </div>
          </div>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 group">
          Visit For More Details
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Past Indocrypt Conferences
          </h1>
        </div>

        {/* Conference Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conferences.map((conference, index) => (
            <ConferenceCard key={index} conference={conference} />
          ))}
        </div>

        {/* Archive Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            For information about conferences prior to 2021, please visit our archive.
          </p>
        </div>
      </div>
    </div>
  );
}