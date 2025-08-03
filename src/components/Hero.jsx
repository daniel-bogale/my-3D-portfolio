"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { styles } from "../styles";

const Hero = () => {
  const skills = [
    { name: "React", level: 99, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 98, color: "from-gray-700 to-black" },
    { name: "Node.js", level: 98, color: "from-green-400 to-green-600" },
    { name: "TypeScript", level: 97, color: "from-blue-500 to-indigo-600" },
    { name: "Python", level: 97, color: "from-yellow-400 to-orange-500" },
    { name: "JavaScript", level: 99, color: "from-yellow-400 to-yellow-600" },
    { name: "Express.js", level: 97, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", level: 96, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 95, color: "from-blue-400 to-blue-800" },
    { name: "Docker", level: 94, color: "from-blue-300 to-blue-700" },
    { name: "GraphQL", level: 93, color: "from-pink-400 to-purple-600" },
    { name: "Redux", level: 97, color: "from-purple-400 to-purple-700" },
    { name: "Tailwind CSS", level: 98, color: "from-cyan-400 to-blue-500" },
    { name: "HTML5", level: 99, color: "from-orange-400 to-orange-600" },
    { name: "CSS3", level: 98, color: "from-blue-400 to-blue-700" },
    { name: "Sass", level: 95, color: "from-pink-400 to-pink-700" },
    { name: "C++", level: 92, color: "from-blue-700 to-gray-700" },
    { name: "Java", level: 93, color: "from-red-400 to-red-700" },
    { name: "Figma", level: 90, color: "from-pink-500 to-yellow-500" },
    { name: "Three.js", level: 94, color: "from-black to-gray-700" },
  ];

  const achievements = [
    { number: "4+", label: "Years Experience" },
    { number: "9+", label: "Projects" },
    { number: "8+", label: "Team Led" },
    { number: "45+", label: "Mentored" },
  ];

  const skillsListRef = useRef(null);
  const [showScrollFade, setShowScrollFade] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const el = skillsListRef.current;
    if (!el) return;
    const checkScroll = () => {
      setShowScrollFade(el.scrollHeight - el.scrollTop > el.clientHeight + 2);
      setShowScrollUp(
        el.scrollTop > 2 &&
          el.scrollHeight - el.scrollTop <= el.clientHeight + 2
      );
    };
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <section className="relative w-full ">
      <div className="flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div
          className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto w-full`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-2"
                >
                  <p className="text-purple-400 text-lg font-medium flex items-center gap-2">
                    <span>👋</span> Hello, I'm
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                    Daniel
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="block text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text pb-2 md:pb-3 lg:pb-4 leading-[1.3]"
                    >
                      Bogale
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Role & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-300">
                    Senior Software Developer & Tech Lead
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                    Passionate about creating innovative digital solutions. I
                    specialize in full-stack development, team leadership, and
                    mentoring developers.
                  </p>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-purple-500 text-purple-300 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Let's Connect
                </motion.a>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-4 gap-4 pt-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Compact Cards */}
            <div className="space-y-4 py-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-pink-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl"
              >
                {/* Profile Image */}
                <div className="text-center mb-4">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                  >
                    DB
                  </motion.div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <motion.a
                    href="mailto:dannybg090909@gmail.com"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex items-center space-x-2 p-2 bg-black/30 rounded-lg hover:bg-black/40 transition-all duration-300 text-sm"
                  >
                    <span>✉️</span>
                    <div>
                      <p className="text-gray-400 text-xs">EMAIL</p>
                      <p className="text-white font-medium">
                        dannybg090909@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+251917826840"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center space-x-2 p-2 bg-black/30 rounded-lg hover:bg-black/40 transition-all duration-300 text-sm"
                  >
                    <span>📱</span>
                    <div>
                      <p className="text-gray-400 text-xs">PHONE</p>
                      <p className="text-white font-medium">+251917826840</p>
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex items-center space-x-2 p-2 bg-black/30 rounded-lg text-sm"
                  >
                    <span>📍</span>
                    <div>
                      <p className="text-gray-400 text-xs">LOCATION</p>
                      <p className="text-white font-medium">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-300 font-medium">
                      Available for opportunities
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4"
              >
                <h3 className="text-lg font-bold text-white mb-3 text-center">
                  Core Technologies
                </h3>
                <div className="relative">
                  <div
                    ref={skillsListRef}
                    className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar"
                    style={{
                      scrollbarWidth: "none",
                      scrollbarColor: "#a78bfa #2d2a4a",
                    }}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.3 + index * 0.03,
                        }}
                        className="space-y-1"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-purple-400 text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 1.5 + index * 0.03,
                            }}
                            className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Fade and arrow indicators */}
                  {showScrollFade && (
                    <>
                      <div
                        className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 z-10 backdrop:blur-md"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(24,16,32,0.1) 70%, rgba(24,16,32,0.0) 100%)",
                        }}
                      />
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 bottom-2 z-20"
                        initial={false}
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#a78bfa"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-none"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.div>
                    </>
                  )}
                  {showScrollUp && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-2 z-20"
                      initial={false}
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#a78bfa"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-none"
                      >
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll Indicator */}
      <div className="xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-4 py-4">
        <a href="#about" className="z-20">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
