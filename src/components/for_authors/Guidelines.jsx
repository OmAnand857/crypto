// IndocryptAuthorGuidelines.jsx
import React from "react";

export default function IndocryptAuthorGuidelines() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16">
      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-10">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-purple-600 tracking-tight">
              Author Guidelines
            </h1>
            <p className="mt-2 text-gray-500">
              Please read and follow these instructions carefully before
              submitting your paper.
            </p>
          </header>

          {/* Submission Rules */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Submission Rules
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Papers must be <strong>original and unpublished</strong>.
              </li>
              <li>No simultaneous submission to other journals/conferences.</li>
              <li>
                Submissions may be checked for duplication with other
                conferences.
              </li>
            </ul>
          </section>

          {/* Formatting */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Formatting
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Use <strong>LaTeX2e</strong> with <strong>Springer LNCS format</strong>.
              </li>
              <li>Maintain default margins and fonts from the LNCS template.</li>
              <li>
                Maximum length: <strong>20 pages (excluding references)</strong>.
              </li>
              <li>
                Anonymous submission: <strong>Do not include author names, affiliations, or acknowledgements.</strong>
              </li>
              <li>
                Submit as a <strong>PDF file</strong> via <a className="text-indigo-600 underline" href="#" onClick={(e)=>e.preventDefault()}>EasyChair</a>.
              </li>
            </ul>
          </section>

          {/* Paper Structure */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Paper Structure
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Title</li>
              <li>Abstract</li>
              <li>Keywords</li>
              <li>Main Body</li>
              <li>Appendices (if any)</li>
              <li>References</li>
            </ul>
          </section>

          {/* Additional Material */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Additional Material
            </h2>
            <p className="text-gray-700 mb-2">
              Authors may include supplementary material (proofs, code, data)
              either at the end of the submission (after references) or in a
              separate file. These materials:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Must be clearly marked and optional to read.</li>
              <li>Should support the claims of the main paper.</li>
              <li>Will be reviewed at the discretion of reviewers.</li>
            </ul>
          </section>

          {/* Final Submission & Copyright */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Final Submission &amp; Copyright
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Accepted papers will be published in the <strong>Springer LNCS</strong> series.
              </li>
              <li>Final version must conform to LNCS requirements.</li>
              <li>
                Authors must sign the <strong>Springer LNCS Copyright Form</strong>.
              </li>
              <li>
                At least one author must <strong>present the paper</strong> at the conference.
              </li>
            </ul>
          </section>

          {/* Footer note */}
          <footer className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              For template and submission portal, visit the{" "}
              <a
                className="text-indigo-600 underline"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Springer LNCS Guidelines Page
              </a>
              .
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
