import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Calendar, MapPin, Users, Mail, Menu, X, Clock, ChevronDown } from 'lucide-react';
import Marquee from './Marquee';
import HeroCarousel from './HeroCarousel';
import CommitteePage from './committees';

const Placeholder = ({ title }) => (
    <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">{title} Page - Coming Soon</h1>
    </div>
);

const Layout = ({ navItems, stats }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Marquee is common */}
      <Marquee />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">IC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Indocrypt <span className="text-blue-600">2025</span>
                </h1>
                <p className="text-xs text-gray-600">Sponsored by ISEA-III Project under MeitY, Govt. of India</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="hidden lg:flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-lg">
              <Clock className="text-blue-600" size={20} />
              <div className="flex gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-blue-600 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-0 lg:gap-1">
               {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.children && item.children.length > 0 ? (
                    <span className="flex items-center justify-between gap-2 px-4 py-3 text-white cursor-pointer hover:bg-blue-700 transition-colors">
                      {item.label} <ChevronDown size={16} />
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center justify-center px-4 py-3 text-white hover:bg-blue-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && item.children.length > 0 && (
                    <ul className="absolute left-0 top-full w-56 bg-blue-600 hidden group-hover:block z-10 shadow-lg">
                      {item.children.map((child, cidx) => (
                        <li key={cidx}>
                          <Link 
                            to={child.path} 
                            className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main content (rendered via nested routes) */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="font-bold text-lg mb-4">Indocrypt 2025</h4>
              <p className="text-gray-400 text-sm">
                Premier international conference on cryptography &amp; information security held in India – fostering innovation and collaboration globally.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/speakers" className="text-gray-400 hover:text-white transition-colors">Speakers</Link></li>
                <li><Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: App@iiit-bh.ac.in</li>
                <li>Phone: +XXXXXXXXXXX</li>
                <li>Location: IIIT Bhubaneswar, Odisha, India</li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="font-bold">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© Copyright 2025, All rights reserved.</p>
            <p className="mt-2">
              Maintained with 💚 by <span className="text-white font-semibold">CANOPUX</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Home = ({ importantDates }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroCarousel/>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Indocrypt 2025</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Indocrypt 2025 is India's premier cryptography and information security conference, where world-renowned 
            experts converge to discuss the latest trends, breakthroughs, and challenges in cryptography. Join us for a 
            deep dive into cryptographic advancements that are shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Important Dates</h2>
          <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                All deadlines correspond to 23:59:59 anywhere on Earth (UTC-12).
              </p>
              <div className="space-y-3">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-blue-600 min-w-[200px]">{item.date}:</span>
                    <span className="text-gray-700">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Topics to be Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Cryptography', 'Network Security', 'Blockchain', 'Privacy'].map((topic, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-2xl">{topic[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{topic}</h3>
                <p className="text-sm text-gray-600">To be Updated</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us at Indocrypt 2025</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't miss your chance to be a part of the most exciting cryptography event in India. 
            Register now for a chance to meet leading experts and learn the future of cryptography and security.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors">
            Register Now
          </button>
        </div>
      </section>

      {/* Organizer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Organizer</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Proudly Organized by</h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-4xl">IIIT</span>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            International Institute of Information<br />Technology, Bhubaneswar
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Platinum Sponsors */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold mb-6">Platinum Sponsors</h3>
            <p className="text-gray-400">To be updated</p>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold mb-6 text-amber-400">Gold Sponsors</h3>
            <p className="text-gray-400">To be updated</p>
          </div>

          {/* Silver Sponsors */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-300">Silver Sponsors</h3>
            <p className="text-gray-400">To be updated</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Committees', 
      // When drop down exists, the parent is not clickable
      children: [
        { label: 'Program Committee', path: '/committees/program-committee' },
        { label: 'General Chairs', path: '/committees/general-chairs' },
        { label: 'Organizing Committee', path: '/committees/organizing-committee' },
        { label: 'Advisory Committee', path: '/committees/advisory-committee' },
        { label: 'Finance and Advisory Committee', path: '/committees/finance-advisory-committee' },
        { label: 'Publicity Chair', path: '/committees/publicity-chair' },
        { label: 'Industry Chair', path: '/committees/industry-chair' }
      ]
    },
    { label: 'Speakers', path: '/speakers' },
    { 
      label: 'General', 
      children: [
        { label: 'Partners', path: '/general/partners' },
        { label: 'About', path: '/general/about' },
        { label: 'FAQ', path: '/general/faq' },
        { label: 'Contact', path: '/general/contact' }
      ]
    },
    { 
      label: 'Program', 
      children: [
        { label: 'Program', path: '/program/program' },
        { label: 'Past Indocrypt', path: '/program/past-indocrypt' }
      ]
    },
    { 
      label: 'For Authors', 
      children: [
        { label: 'Call for Papers', path: '/for-authors/call-for-papers' },
        { label: 'Guidelines', path: '/for-authors/guidelines' },
        { label: 'Paper Submission', path: '/for-authors/paper-submission' },
        { label: 'Accepted Papers List', path: '/for-authors/accepted-papers' }
      ]
    },
    { 
      label: 'Travel', 
      children: [
        { label: 'Venue', path: '/travel/venue' },
        { label: 'Accommodation', path: '/travel/accommodation' },
        { label: 'Visa', path: '/travel/visa' },
        { label: 'Places of Interest', path: '/travel/places-of-interest' }
      ]
    },
    { 
      label: 'Registration', 
      children: [
        { label: 'Registration Fee Details', path: '/registration/fee-details' },
        { label: 'Registration For Indian Participants', path: '/registration/indian' },
        { label: 'Registration For Foreign Participants', path: '/registration/foreign' },
        { label: 'Code Of Conduct', path: '/registration/code-of-conduct' }
      ]
    },
    { label: 'Sponsors', path: '/sponsors' }
  ];

  const importantDates = [
    { date: 'September 10, 2025', event: 'Paper submission deadline' },
    { date: 'October 10, 2025', event: 'Notification to authors' },
    { date: 'October 15, 2025', event: 'Final manuscript due' },
    { date: 'December 14-17, 2025', event: 'Date of the conference' }
  ];

  const stats = [
    { number: '60', label: 'DAYS' },
    { number: '1', label: 'HOURS' },
    { number: '7', label: 'MINUTES' },
    { number: '46', label: 'SECONDS' }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout navItems={navItems} stats={stats} />}>
          <Route index element={<Home importantDates={importantDates} />} />

          {/* Committees routes */}
          <Route path="committees" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/program-committee" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/general-chairs" element={<CommitteePage pageIndex={1} />} />
          <Route path="committees/organizing-committee" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/advisory-committee" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/finance-advisory-committee" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/publicity-chair" element={<CommitteePage pageIndex={0} />} />
          <Route path="committees/industry-chair" element={<CommitteePage pageIndex={0} />} />

          {/* Speakers */}
          <Route path="speakers" element={<Placeholder title="Speakers" />} />

          {/* General routes */}
          <Route path="general" element={<Placeholder title="General" />} />
          <Route path="general/partners" element={<Placeholder title="Partners" />} />
          <Route path="general/about" element={<Placeholder title="About" />} />
          <Route path="general/faq" element={<Placeholder title="FAQ" />} />
          <Route path="general/contact" element={<Placeholder title="Contact" />} />

          {/* Program routes */}
          <Route path="program" element={<Placeholder title="Program" />} />
          <Route path="program/program" element={<Placeholder title="Program" />} />
          <Route path="program/past-indocrypt" element={<Placeholder title="Past Indocrypt" />} />

          {/* For Authors routes */}
          <Route path="for-authors" element={<Placeholder title="For Authors" />} />
          <Route path="for-authors/call-for-papers" element={<Placeholder title="Call for Papers" />} />
          <Route path="for-authors/guidelines" element={<Placeholder title="Guidelines" />} />
          <Route path="for-authors/paper-submission" element={<Placeholder title="Paper Submission" />} />
          <Route path="for-authors/accepted-papers" element={<Placeholder title="Accepted Papers List" />} />

          {/* Travel routes */}
          <Route path="travel" element={<Placeholder title="Travel" />} />
          <Route path="travel/venue" element={<Placeholder title="Venue" />} />
          <Route path="travel/accommodation" element={<Placeholder title="Accommodation" />} />
          <Route path="travel/visa" element={<Placeholder title="Visa" />} />
          <Route path="travel/places-of-interest" element={<Placeholder title="Places of Interest" />} />

          {/* Registration routes */}
          <Route path="registration" element={<Placeholder title="Registration" />} />
          <Route path="registration/fee-details" element={<Placeholder title="Registration Fee Details" />} />
          <Route path="registration/indian" element={<Placeholder title="Registration For Indian Participants" />} />
          <Route path="registration/foreign" element={<Placeholder title="Registration For Foreign Participants" />} />
          <Route path="registration/code-of-conduct" element={<Placeholder title="Code Of Conduct" />} />

          {/* Sponsors */}
          <Route path="sponsors" element={<Placeholder title="Sponsors" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;