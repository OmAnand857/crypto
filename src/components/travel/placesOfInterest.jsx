import React from 'react';
import { MapPin, Image } from 'lucide-react';

export default function PlacesOfInterest() {
  const places = [
    {
      name: "Jagannath Temple Puri",
      description: "The Jagannath Temple in Puri is one of the most sacred pilgrimage sites for Hindus, dedicated to Lor...",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    },
    {
      name: "Puri Sea Beach",
      description: "Puri Beach is a popular destination along the eastern coast of India, known for its golden sands and...",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    },
    {
      name: "Chilika Lake",
      description: "Chilika Lake, located near Puri, is Asia's largest brackish water lagoon and a haven for nature love...",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    },
    {
      name: "Konark Sun Temple",
      description: "The Konark Sun Temple, located in Odisha, is a 13th-",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    },
    {
      name: "Lingaraj Temple",
      description: "One of the oldest and most revered temples in",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    },
    {
      name: "Udayagiri and Khandagiri Caves",
      description: "These rock-cut caves were built during the 2nd century",
      image: "/api/placeholder/400/250",
      mapLink: "https://maps.google.com",
      galleryLink: "#"
    }
  ];

  const PlaceCard = ({ place }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-indigo-700 mb-3">
          {place.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {place.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={place.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm px-4 py-2 border border-indigo-600 hover:border-indigo-700 rounded-lg transition-colors"
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
          
          <a
            href={place.galleryLink}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Image className="w-4 h-4" />
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Places of Interest
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the rich cultural heritage and natural beauty of Odisha
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>

        {/* Additional Information */}
        {/* <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Plan Your Visit
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Bhubaneswar and its surrounding areas offer a perfect blend of ancient temples, 
              pristine beaches, and natural wonders. While attending Indocrypt 2025, take the 
              opportunity to explore these magnificent sites that showcase Odisha's rich cultural 
              heritage and natural beauty.
            </p>
            <p className="mb-0">
              Most of these attractions are within 1-2 hours from Bhubaneswar, making them ideal 
              for day trips. We recommend planning your visit in advance and checking local 
              timings and entry requirements.
            </p>
          </div>
        </div> */}

        {/* Travel Tips */}
        {/* <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Best Time to Visit
            </h3>
            <p className="text-gray-700 text-sm">
              October to March offers pleasant weather for sightseeing
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Transportation
            </h3>
            <p className="text-gray-700 text-sm">
              Taxis and rental cars are available for comfortable travel
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Local Guides
            </h3>
            <p className="text-gray-700 text-sm">
              Consider hiring local guides for deeper cultural insights
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}