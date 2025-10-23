import React from "react";
import { Calendar, FileText, ClipboardList, MapPin } from "lucide-react";

export default function IndocryptMain() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          Indocrypt 2025
        </h1>
        <p className="text-lg text-gray-600">
          International Conference on Cryptology in India – Call For Papers
        </p>
      </div>

      {/* About the Conference */}
      <div className="bg-white shadow rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          About the Conference
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The International Conference on Cryptology in India (Indocrypt) is an
          annual cryptography conference organised by the Cryptology Research
          Society of India (CRSI) in association with an Indian institute or
          organisation. The conference seeks submissions from academia,
          industry, and government on all theoretical and practical aspects
          relevant to cryptology, network security, and related fields. This
          year conveys the 26th edition of the conference, which will be held in
          Bhubaneswar, India. Proceedings will be published by Springer in the
          LNCS series.
        </p>
      </div>

      {/* Topics of Interest */}
      <div className="bg-white shadow rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Topics of Interest
        </h2>
        <p className="text-gray-700 mb-4">
          Original papers on all technical aspects of cryptology are solicited
          for submission. Topics include but are not limited to:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            "Access Control",
            "Applied Cryptography",
            "Attacks & Malicious Code",
            "Authentication & Identification",
            "Blockchain Security and Privacy",
            "Cloud Security and Privacy",
            "Cryptographic Protocols",
            "Cryptanalysis",
            "Data and Computation Integrity",
            "Edge/Fog Computing Security and Privacy",
            "Embedded System Security",
            "Formal Methods for Security",
            "Lightweight Cryptography",
            "Machine Learning for Security",
            "Network Security",
            "Privacy-Enhancing Technologies",
            "Public Key Cryptography",
            "Post-quantum Cryptography",
            "Quantum Cryptography",
            "Secure Electronic Voting",
            "Security & Privacy",
            "Secure Distributed Computing",
            "Security in IoT",
            "Security and Privacy of ML & AI Systems",
            "Symmetric Key Cryptography",
            "Zero-knowledge Proofs",
          ].map((topic) => (
            <span
              key={topic}
              className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-100"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Instructions for Authors */}
      <div className="bg-white shadow rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Instructions for Authors
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            Papers must be <strong>original and unpublished</strong>, and not
            submitted elsewhere.
          </li>
          <li>
            Use <strong>LaTeX2e</strong> and follow the{" "}
            <strong>Springer LNCS format</strong>.
          </li>
          <li>
            Submissions must be <strong>anonymous</strong> (no author info).
          </li>
          <li>
            Submit papers in <strong>PDF format</strong> via EasyChair.
          </li>
          <li>
            The submission must include title, abstract, keywords, and main body
            suitable for non-specialists.
          </li>
          <li>
            <strong>Page limit:</strong> 20 pages (including appendices but
            excluding references).
          </li>
          <li>
            Proceedings will be published by <strong>Springer LNCS</strong>.
          </li>
          <li>
            At least one author must register and{" "}
            <strong>present the paper</strong> at the conference.
          </li>
        </ul>
      </div>

      {/* Important Dates */}
      <div className="bg-white shadow rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
          Important Dates
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
            <FileText className="text-red-500 w-6 h-6" />
            <div>
              <p className="font-medium text-gray-800">
                Paper Submission Deadline
              </p>
              <p className="text-gray-600">September 10, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
            <ClipboardList className="text-green-500 w-6 h-6" />
            <div>
              <p className="font-medium text-gray-800">Final Manuscript Due</p>
              <p className="text-gray-600">October 20, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <Calendar className="text-blue-500 w-6 h-6" />
            <div>
              <p className="font-medium text-gray-800">
                Registration due for Authors
              </p>
              <p className="text-gray-600">October 27, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
            <MapPin className="text-purple-500 w-6 h-6" />
            <div>
              <p className="font-medium text-gray-800">Conference Dates</p>
              <p className="text-gray-600">December 14 – 17, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
