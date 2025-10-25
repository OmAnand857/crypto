import React, { useState } from 'react';
import { Award, Star, Briefcase } from 'lucide-react';

export default function SponsorsPage() {
  const [activeTab, setActiveTab] = useState('sponsorship');

  const conferenceTopics = [
    "New primitives in cryptography",
    "Cryptanalysis and provable security",
    "Cryptographic protocols",
    "Blockchain and privacy-enhancing technologies",
    "Network and IoT security",
    "Embedded systems security",
    "(Post)-quantum cryptography"
  ];

  const highlights = [
    "Unique opportunity to connect with leading researchers and experts from India and abroad.",
    "Fostering collaborations for innovation and next-generation cybersecurity product development.",
    "Expert and invited talks by eminent personalities in cryptography and cybersecurity.",
    "Exposure to recent advances and real-world applications in cryptography.",
    "Industry exhibitions showcasing products, solutions, and innovations, along with networking opportunities with key stakeholders."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sponsor Tiers Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Platinum Sponsors */}
        <div className="py-16 px-4 bg-gradient-to-r from-slate-700 to-indigo-900">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-10 h-10 text-slate-300" />
              <h2 className="text-4xl font-bold text-white">
                Platinum Sponsors
              </h2>
            </div>
            <p className="text-slate-300 italic text-lg">
              To be updated
            </p>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="py-16 px-4 bg-gradient-to-r from-amber-700 to-yellow-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-10 h-10 text-yellow-200" />
              <h2 className="text-4xl font-bold text-white">
                Gold Sponsors
              </h2>
            </div>
            <p className="text-yellow-100 italic text-lg">
              To be updated
            </p>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="py-16 px-4 bg-gradient-to-r from-slate-600 to-slate-700">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-10 h-10 text-slate-300" />
              <h2 className="text-4xl font-bold text-white">
                Silver Sponsors
              </h2>
            </div>
            <p className="text-slate-300 italic text-lg">
              To be updated
            </p>
          </div>
        </div>
      </div>

      {/* Sponsorship Information Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Sponsorship Information
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-xl shadow-md p-1">
              <button
                onClick={() => setActiveTab('sponsorship')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'sponsorship'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sponsorship
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'benefits'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sponsorship Benefits
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'sponsorship' && (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Sponsorship Overview */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sponsorship Overview
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IIIT Bhubaneswar, in collaboration with CRSI, is proud to host the{' '}
                  <strong>26th edition of Indocrypt 2025</strong>, one of the most prestigious 
                  international conferences on cryptography. This flagship event will bring together 
                  leading cryptographers, industry experts, policymakers, professionals from strategic 
                  sectors, banking & finance, R&D labs, academia, and students on a single platform.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The conference, scheduled from{' '}
                  <strong>December 14–17, 2025, in Bhubaneswar</strong>, will cover cutting-edge 
                  areas including:
                </p>
              </div>

              {/* Conference Topics */}
              <div className="mb-10">
                <ul className="space-y-3">
                  {conferenceTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div className="bg-blue-50 rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Highlights and Takeaways:
                </h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  We invite you to support{' '}
                  <span className="font-bold text-indigo-700">Indocrypt 2025</span> and join us 
                  as a sponsor. This conference offers an excellent platform to showcase your products, 
                  solutions, and services to influential decision-makers from government, industry, and 
                  academia, while contributing to the growth of cybersecurity and cryptographic research 
                  in India and beyond.
                </p>
              </div>

              {/* Contact CTA */}
              {/* <div className="mt-8 text-center">
                <a
                  href="mailto:Indocrypt2025@iiit-bh.ac.in"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
                >
                  Become a Sponsor
                </a>
                <p className="mt-4 text-gray-600 text-sm">
                  For sponsorship inquiries, contact us at{' '}
                  <a 
                    href="mailto:Indocrypt2025@iiit-bh.ac.in"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Indocrypt2025@iiit-bh.ac.in
                  </a>
                </p>
              </div> */}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 overflow-x-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Sponsorship Benefits
              </h3>
              
              {/* Sponsorship Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 text-gray-900 font-bold text-lg">Type</th>
                      <th className="text-center py-4 px-4 text-gray-900 font-bold text-lg">Sponsorship (in INR)</th>
                      <th className="text-left py-4 px-4 text-gray-900 font-bold text-lg">Complementary Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Platinum Plan */}
                    <tr className="border-b border-gray-200">
                      <td className="py-8 px-4">
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-white font-bold text-sm">Platinum</span>
                          </div>
                          <span className="text-blue-600 font-semibold text-lg">Platinum Plan</span>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-center">
                        <span className="text-3xl font-bold text-blue-600">Rs 5,00,000/-</span>
                      </td>
                      <td className="py-8 px-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-700">2 Exhibition Stalls (s)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Speaker slot in specified session</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">5 registrations for the event</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on the conference website</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on event signage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Display of Company Pull-Up/Standee</span>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    {/* Gold Plan */}
                    <tr className="border-b border-gray-200">
                      <td className="py-8 px-4">
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-white font-bold text-sm">Gold</span>
                          </div>
                          <span className="text-blue-600 font-semibold text-lg">Gold Plan</span>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-center">
                        <span className="text-3xl font-bold text-blue-600">Rs 3,00,000/-</span>
                      </td>
                      <td className="py-8 px-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">1 Exhibition Stall</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Opportunity in panel discussion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">3 registrations for the event</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on the conference website</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on event signage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Display of Company Pull-Up/Standee</span>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    {/* Silver Plan */}
                    <tr className="border-b border-gray-200">
                      <td className="py-8 px-4">
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-white font-bold text-sm">Silver</span>
                          </div>
                          <span className="text-blue-600 font-semibold text-lg">Silver Plan</span>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-center">
                        <span className="text-3xl font-bold text-blue-600">Rs 2,00,000/-</span>
                      </td>
                      <td className="py-8 px-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">1 Exhibition Stall</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">2 registrations for the event</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on the conference website</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Logo on event signage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-blue-600">Display of Company Pull-Up/Standee</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Contact CTA */}
              {/* <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Interested in Sponsoring?
                </h4>
                <p className="text-gray-700 mb-6">
                  Contact us to discuss custom sponsorship packages tailored to your needs
                </p>
                <a
                  href="mailto:Indocrypt2025@iiit-bh.ac.in"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}