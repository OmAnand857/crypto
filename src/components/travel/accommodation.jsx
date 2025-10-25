import React from 'react';
import { MapPin, Globe } from 'lucide-react';

export default function AccommodationPage() {
  const hotels = [
    {
      name: "MAYFAIR Lagoon",
      address: "Mayfair Hotels & Resorts Ltd, 8-B, Jayadev Vihar, Bhubaneswar, Odisha 751013",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    },
    {
      name: "Swosti Premium",
      address: "P1, Jaydev Vihar, Nandankanan Rd, Bhubaneswar, Odisha 751013",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    },
    {
      name: "The Crown",
      address: "A1/a, Indradhanu Market, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    },
    {
      name: "Lemon Tree Premier",
      address: "Plot No – B/1334, Maitree Vihar Road, Chandrasekharpur, Bhubaneswar, Odisha",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    },
    {
      name: "Trident",
      address: "CB-1, Nayapalli, Bhubaneswar, Odisha 751013",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    },
    {
      name: "The New Marrion",
      address: "6th Janpath, Bhubaneswar-751001",
      image: "/api/placeholder/500/300",
      mapLink: "https://maps.google.com",
      websiteLink: "#"
    }
  ];

  const HotelCard = ({ hotel }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Hotel Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Hotel Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {hotel.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {hotel.address}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={hotel.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm border border-indigo-600 hover:border-indigo-700 px-4 py-2 rounded-lg transition-colors"
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
          
          <a
            href={hotel.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Globe className="w-4 h-4" />
            View Website
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Accommodation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find comfortable accommodation options near the conference venue
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>

        {/* Additional Information */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Accommodation Information
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              We have partnered with several hotels in Bhubaneswar to provide convenient accommodation options for conference attendees. These hotels offer comfortable rooms, modern amenities, and easy access to the conference venue at IIIT Bhubaneswar.
            </p>
            <p className="mb-4">
              We recommend booking your accommodation early to ensure availability and potentially benefit from conference rates. Please mention "Indocrypt 2025" when making your reservation.
            </p>
            <p className="mb-0">
              For any accommodation-related queries, please contact us at{' '}
              <a href="mailto:Indocrypt2025@iiit-bh.ac.in" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Indocrypt2025@iiit-bh.ac.in
              </a>
            </p>
          </div>
        </div> */}

        {/* Transportation Note */}
        {/* <div className="mt-8 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Transportation
          </h3>
          <p className="text-gray-700">
            All listed hotels are within 15-30 minutes of IIIT Bhubaneswar. Taxi and ride-sharing services are readily available throughout the city.
          </p>
        </div> */}
      </div>
    </div>
  );
}