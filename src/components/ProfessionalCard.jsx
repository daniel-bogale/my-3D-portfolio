"use client";

import { motion } from "framer-motion";
import { github } from "../assets";

const ProfessionalCard = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/daniel-bogale",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
      color: "#ffffff",
      bgColor: "#181717",
      borderColor: "#0077B5",
      hoverBg: "#005983",
      hoverBorder: "#ffffff",
    },
    {
      name: "GitHub",
      url: "https://github.com/daniel-bogale",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
      color: "#ffffff",
      bgColor: "#181717",
      borderColor: "#6e5494",
      hoverBg: "#6e5494",
      hoverBorder: "#ffffff",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              style={{
                background: social.bgColor,
                borderColor: social.borderColor,
                color: social.color,
                transition: "all 0.3s",
              }}
              className="group relative p-3 rounded-full border hover:shadow-lg inline-block"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = social.hoverBg;
                e.currentTarget.style.borderColor = social.hoverBorder;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = social.bgColor;
                e.currentTarget.style.borderColor = social.borderColor;
              }}
            >
              <img
                src={social.icon || "/placeholder.svg"}
                alt={social.name}
                className="w-5 h-5 transition-all duration-300"
                style={{
                  filter:
                    social.name === "LinkedIn"
                      ? "brightness(0) invert(1)"
                      : "invert(1)",
                }}
              />
              <div
                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg"
                style={{
                  background: social.bgColor,
                  color: social.color,
                  border: `1px solid ${social.borderColor}`,
                }}
              >
                {social.name}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfessionalCard;
