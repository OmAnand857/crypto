import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const IndocryptRegistration = () => {
  return (
    <div className=" min-h-[500px] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Indocrypt 2025 Registration
          </h1>
          <p className="text-xl text-gray-800">
            We're excited to welcome you to Indocrypt 2025! Registration is now open. Please complete your registration below.
          </p>
        </div>

        {/* Registration Fee Details */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Registration Fee Details
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-800 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-left">Students</th>
                  <th className="py-3 px-6 text-left">Academia</th>
                  <th className="py-3 px-6 text-left">Govt Organizations</th>
                  <th className="py-3 px-6 text-left">Industry</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Indian</td>
                  <td className="py-3 px-6 text-left">INR 2000</td>
                  <td className="py-3 px-6 text-left">INR 5000</td>
                  <td className="py-3 px-6 text-left">INR 8000</td>
                  <td className="py-3 px-6 text-left">INR 10000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap font-medium">Foreigner</td>
                  <td className="py-3 px-6 text-left">USD 250</td>
                  <td className="py-3 px-6 text-left">USD 700</td>
                  <td className="py-3 px-6 text-left">USD 850</td>
                  <td className="py-3 px-6 text-left">USD 1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Complete Your Registration Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Complete Your Registration
          </h2>
          <div className="space-y-4">
            {/* Indocrypt 2025 Search/Dropdown */}
            <div className="relative">
              <label htmlFor="indocrypt2025" className="sr-only">Indocrypt 2025</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                <span className="px-4 text-gray-800 font-medium bg-gray-50 h-12 flex items-center">
                  Indocrypt 2025
                </span>
                <input
                  type="text"
                  id="indocrypt2025"
                  placeholder="Search for tickets..."
                  className="flex-grow p-3 text-gray-700 focus:outline-none"
                />
                <button type="button" className="p-3 bg-gray-100 border-l border-gray-300 hover:bg-gray-200">
                  <Search className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Dropdown Fields */}
            {[
              "Student Author",
              "Academia",
              "Govt Organizations",
              "Industry"
            ].map((placeholder, index) => (
              <div key={index} className="relative">
                <select
                  id={`dropdown-${index}`}
                  className="block w-full p-3 border border-gray-300 rounded-lg appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                >
                  <option value="" disabled selected>{placeholder}</option>
                  {/* Add actual options here if needed */}
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndocryptRegistration;