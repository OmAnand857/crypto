import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function ProgramSchedule() {
  const schedule = [
    {
      day: "Day 1",
      programs: [
        {
          title: "Program 1",
          description: "Details will be updated soon.",
          time: "Time",
          location: "To be announced"
        },
        {
          title: "Program 2",
          description: "Details will be updated soon.",
          time: "Time",
          location: "To be announced"
        },
        {
          title: "Program 3",
          description: "Session details pending.",
          time: "Time",
          location: "To be confirmed"
        }
      ]
    },
    {
      day: "Day 2",
      programs: [
        {
          title: "Program 4",
          description: "Description will be updated.",
          time: "Time",
          location: "To be updated"
        },
        {
          title: "Program 5",
          description: "More details coming soon.",
          time: "time",
          location: "To be announced"
        },
        {
          title: "Program 6",
          description: "To be updated.",
          time: "Time",
          location: "To be announced"
        }
      ]
    }
  ];

  const ProgramItem = ({ program, isLast }) => (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-3 h-3 bg-indigo-600 rounded-full z-10"></div>
      
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1.5 top-3 bottom-0 w-0.5 bg-indigo-200"></div>
      )}
      
      {/* Content */}
      <div className="ml-8 pb-8">
        <h3 className="text-lg font-bold text-indigo-700 mb-2">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {program.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-indigo-500" />
            <span>{program.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>{program.location}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const DaySection = ({ day, programs }) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-indigo-700">
          {day}
        </h2>
      </div>
      
      <div className="ml-2">
        {programs.map((program, index) => (
          <ProgramItem
            key={index}
            program={program}
            isLast={index === programs.length - 1}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Program Schedule
          </h1>
        </div>

        {/* Schedule Content */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          {schedule.map((daySchedule, index) => (
            <DaySection
              key={index}
              day={daySchedule.day}
              programs={daySchedule.programs}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Schedule is subject to change. Please check back for updates.
          </p>
        </div>
      </div>
    </div>
  );
}