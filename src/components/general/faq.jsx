import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(2); // Question 3 is open by default

  const faqs = [
    {
      question: "Question 1",
      answer: "To Be Updated"
    },
    {
      question: "Question 2",
      answer: "To Be Updated"
    },
    {
      question: "Question 3",
      answer: "To Be Updated"
    },
    {
      question: "Question 4",
      answer: "To Be Updated"
    },
    {
      question: "Question 5",
      answer: "To Be Updated"
    },
    {
      question: "Question 6",
      answer: "To Be Updated"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to some of the common questions about Indocrypt 2025.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-600 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-2">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}