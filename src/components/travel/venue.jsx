import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export default function VenuePage() {
  const campusImages = [
    { url: "/api/placeholder/400/300", alt: "IIIT Bhubaneswar Main Building" },
    { url: "/api/placeholder/400/300", alt: "IIIT Bhubaneswar Campus View" },
    { url: "/api/placeholder/400/300", alt: "IIIT Bhubaneswar Garden" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/api/placeholder/1920/600')" }}
        ></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Venue
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* IIIT Bhubaneswar Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            IIIT Bhubaneswar
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              International Institute of Information Technology Bhubaneswar (IIIT Bhubaneswar) is a premier institute dedicated to education, research, and innovation in the fields of information technology and allied disciplines. Established in 2006, it operates as a university with a focus on academic excellence, fostering cutting-edge research, and industry collaboration. The institute offers undergraduate, postgraduate, and doctoral programs in Computer Science, Electronics, and related engineering domains.
            </p>
            
            <p className="mb-4">
              With a modern campus, state-of-the-art laboratories, and a research-driven environment, IIIT Bhubaneswar actively contributes to advancements in artificial intelligence, cybersecurity, communication systems, and more. It is also involved in interdisciplinary research, including geospatial technologies, remote sensing, and cyber-physical systems.
            </p>
            
            <p>
              The institute maintains strong ties with industry and academia, encouraging innovation through startup initiatives and technical workshops. Strategically located in Bhubaneswar, a growing IT and education hub, IIIT Bhubaneswar plays a vital role in shaping skilled professionals and fostering technological advancements in the region.
            </p>
          </div>
        </div>

        {/* Campus Images Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Address and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Address
                </h3>
              </div>
            </div>
            
            <div className="text-gray-700 leading-relaxed mb-6">
              <p className="mb-2">
                International Institute of Information Technology Bhubaneswar,
              </p>
              <p className="mb-2">
                Gothapatna, PO: Malipada, Bhubaneswar – 751003,
              </p>
              <p>
                Odisha, India
              </p>
            </div>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2"
            >
              View on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Map Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-full min-h-[400px] bg-gray-200 relative">
              {/* Placeholder for Google Maps embed */}
              <iframe
                title="IIIT Bhubaneswar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.7478534891947!2d85.81234631490064!3d20.277945086421768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d52e5dcb9f%3A0x6f9f8e7e8e7e8e7e!2sIIIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info
        <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border-l-4 border-indigo-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Getting to the Venue
          </h3>
          <p className="text-gray-700 leading-relaxed">
            IIIT Bhubaneswar is easily accessible from Biju Patnaik International Airport (approximately 15 km) and Bhubaneswar Railway Station (approximately 10 km). Local transportation options including taxis, auto-rickshaws, and app-based cab services are readily available.
          </p>
        </div> */}
      </div>
    </div>
  );
}