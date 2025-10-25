import React from 'react';
import { Calendar, MapPin, Users, BookOpen, UsersRound, Key, Building2 } from 'lucide-react';

export default function AboutIndocrypt() {
  const objectives = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "To Be Updated",
      description: "To Be Updated"
    },
    {
      icon: <UsersRound className="w-6 h-6" />,
      title: "To Be Updated",
      description: "To Be Updated"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "To Be Updated",
      description: "To Be Updated"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "To Be Updated",
      description: "To Be Updated"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Indocrypt 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            India's Premier International Conference on Cryptography and Information Security
          </p>
          
          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">14 - 17 December, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">IIIT Bhubaneswar, Odisha</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">To Be Updated</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Conference Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Conference
              <div className="h-1 w-16 bg-purple-600 mt-2"></div>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Indocrypt is India's flagship annual international conference on cryptology that brings 
                together researchers, practitioners, and students from around the world. Since its 
                inception, Indocrypt has been at the forefront of cryptographic research, showcasing 
                groundbreaking work in both theoretical and applied cryptography.
              </p>
              
              <p>
                The 2025 edition, hosted by IIIT Bhubaneswar, will focus on the emerging challenges and 
                opportunities in post-quantum cryptography, secure multi-party computation, and 
                cryptographic protocol analysis. The conference will feature keynote talks, technical 
                presentations, poster sessions, and workshops conducted by experts from leading 
                research institutions and industry.
              </p>
              
              <p>
                Indocrypt 2025 aims to foster collaboration between academia and industry, providing a 
                platform for researchers to present their latest findings and for practitioners to share real-world 
                implementation challenges and solutions.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Isometric Illustration Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 transform rotate-6">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10">
                  <Key className="w-24 h-24 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hosted By Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Hosted By IIIT Bhubaneswar
            <div className="h-1 w-20 bg-purple-600 mx-auto mt-3"></div>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="IIIT Bhubaneswar Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  IIIT Bhubaneswar
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Gothapatna, Bhubaneswar<br />
                  Odisha, India
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The International Institute of Information Technology Bhubaneswar (IIIT Bhubaneswar) is 
                proud to host Indocrypt 2025. Established in 2006, IIIT Bhubaneswar has emerged as a 
                center of excellence in information technology education and research in eastern India.
              </p>
              
              <p>
                The institute's Center for Security, Theory and Algorithmic Research (CSTAR) has been 
                actively contributing to cryptography research, with special focus on lightweight 
                cryptography, post-quantum cryptographic constructions, and secure implementations of 
                cryptographic primitives.
              </p>
              
              <p>
                IIIT Bhubaneswar's vibrant campus, situated amidst the serene environment of 
                Gothapatna, provides an ideal setting for academic discourse and collaboration that 
                Indocrypt aims to foster.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Objectives Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Conference Objectives
            <div className="h-1 w-20 bg-purple-600 mx-auto mt-3"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Indocrypt 2025 aims to create a vibrant ecosystem for cryptographic research and 
            innovation in India and beyond.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                {objective.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {objective.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}