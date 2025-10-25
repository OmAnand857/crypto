import React from 'react';
import { FileText, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export default function VisaInformationPage() {
  const eligibilityCriteria = [
    "The sole objective of the visit is to attend a conference/seminar/workshop in India.",
    "The applicant holds a valid passport and re-entry permit (if required by their country's law).",
    "The applicant is not a persona-non-grata to the Government of India.",
    "The applicant is not considered undesirable and is not on any warning or restrictive list.",
    "The applicant has assured financial standing (return ticket and sufficient funds are considered adequate proof)."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Visa Information
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-12">
          
          {/* Conference Visa vs Tourist Visa Section */}
          <section>
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">
              Conference Visa vs Tourist Visa
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>
                If you're visiting India to attend a conference, you need to obtain a{' '}
                <strong>Conference Visa</strong> instead of a Tourist Visa. A Conference Visa is 
                usually valid for 6 months from the time of issue and also permits tourism.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-indigo-700">
                Eligibility for a Conference Visa
              </h2>
            </div>
            
            <div className="space-y-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    {criteria}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* More Information Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-indigo-700">
                More Information
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For official Indian visa information, visit:{' '}
                <a
                  href="https://indianvisaonline.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-2"
                >
                  https://indianvisaonline.gov.in/
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
              
              <p>
                For questions about combining tourism with a conference visit and related FAQs, 
                please check the relevant section on Tourist Visas.
              </p>
              
              <p>
                You can also access the official downloadable visa document{' '}
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold underline underline-offset-2"
                >
                  here
                </a>
              </p>
            </div>
          </section>

          {/* Important Notice */}
          {/* <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recommend applying for your visa well in advance of the conference dates. 
                  Processing times may vary, and early application helps ensure you receive your 
                  visa in time for the event. For any visa-related queries specific to Indocrypt 2025, 
                  please contact us at{' '}
                  <a 
                    href="mailto:Indocrypt2025@iiit-bh.ac.in"
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Indocrypt2025@iiit-bh.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div> */}

          {/* Helpful Resources */}
          {/* <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h3>
            <div className="space-y-3">
              <a
                href="https://indianvisaonline.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Indian Visa Online Portal
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <FileText className="w-5 h-5" />
                Conference Visa Application Guide
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <FileText className="w-5 h-5" />
                Visa FAQs
              </a>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}