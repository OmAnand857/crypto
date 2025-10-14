import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const texts = [
    "Keynote by top cryptographers",
    "Workshops on blockchain security",
    "Networking with industry leaders",
    "Hands-on cryptography labs",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-blue-600 text-white text-xs py-2">
      <motion.div
        className="inline-flex space-x-8 animate-marquee"
        style={{ animationPlayState: "running" }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...texts, ...texts].map((text, i) => (
          <span key={i} className="px-4 text-sm">
            {text}
          </span>
        ))}
      </motion.div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
