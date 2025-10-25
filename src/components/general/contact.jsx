import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Send Message Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-700 mb-8">
              Send a Message
            </h2>
            
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Our Location */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-indigo-700 mb-8">
              Our Location
            </h2>
            
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-indigo-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      IIIT Bhubaneswar
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Gothapatna, PO: Malipada<br />
                      Bhubaneswar, Odisha 751003<br />
                      India
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm underline underline-offset-2"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <a
                      href="mailto:Indocrypt2025@iiit-bh.ac.in"
                      className="text-gray-900 hover:text-indigo-600 font-medium transition-colors"
                    >
                      Indocrypt2025@iiit-bh.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <a
                      href="tel:xxxxxxxxxxx"
                      className="text-gray-900 hover:text-indigo-600 font-medium transition-colors"
                    >
                      xxxxxxxxxxx
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}