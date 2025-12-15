'use client'

import React from 'react'
import { Mail, Github, Linkedin, MapPin, Calendar, Code, Database, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 }
  }

  const skills = {
    languages: ['Python', 'TypeScript', 'Dart', 'JavaScript', 'Java', 'SQL'],
    frameworks: ['Flask', 'Django', 'Flutter', 'React', 'Next.js', 'NestJS', 'NodeJS'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    tools: ['Git', 'Docker', 'Mongoose', 'Google Cloud Platform', 'AWS', 'Postman', 'Firebase','Pandas', 'NumPy']
  }

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Atlantic Lottery Corporation',
      location: 'Remote',
      period: 'Feb 2022 – Present',
      achievements: [
        'Designed a state-driven navigation framework for Flutter based app, reducing Navigator coupling and enhancing code reusability and testability.',
        'Integrated Dynatrace and Google Analytics to monitor app activity, reducing critical issues by 15% and improving stability and user engagement insights.',
        'Reduced account approval time by developing middle interface for Verification Team and successfully signed up 30k users on day one feature launch in app in nova scotia.',
        'Developed robust integration layer for external game vendors, ensuring high-performance in-app delivery and consistent user experience.'
      ]
    },
    {
      title: 'QA Tester',
      company: 'BMM TestLabs',
      location: 'Dieppe, NB',
      period: 'Oct 2021 – Feb 2022',
      achievements: [
        'Accelerated release cycles by creating reusable test scripts, cutting regression testing time.',
        'Conducted thorough analysis of client requirements and documented bugs.',
        'Developed and maintained test cases and test summary reports for quality assurance processes.'
      ]
    },
    {
      title: 'QA Tester',
      company: 'Pole To Win',
      location: 'Montreal, QC',
      period: 'June 2021 – Aug 2021',
      achievements: [
        'Performed regression, functional, and exploratory testing to validate game stability after updates and patches.',
        'Executed comprehensive test cases across multiple platforms (PC, PlayStation, Xbox) to ensure seamless gameplay experience.',
        'Validated compliance with platform certification requirements (PlayStation, Xbox, Steam) before release.'
      ]
    }
  ]

  const projects = [
    {
      title: 'CityNest',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
      date: 'May 2018',
      description: [
        'Designed and built a location-based app for sharing favorite city spots, enabling users to vote and rank places in real time.',
        'Developed RESTful APIs with authentication, voting logic, and database integration using modern backend techniques.',
        'Implemented caching and performance optimizations to handle high-volume user interactions efficiently and improve API response times.'
      ]
    },
    {
      title: 'Desire',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      date: 'June 2020',
      description: [
        'Developed a full-stack Ecommerce application using with Django serving a REST API.',
        'Implemented GitHub OAuth to get data from user\'s repositories',
        'Visualized GitHub data to show collaboration',
        'Used Celery and Redis for asynchronous tasks'
      ]
    }
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.header 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)" }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                variants={fadeIn}
                transition={{ duration: 0.7 }}
              >
                Vivek Bhakhri
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-purple-200 mb-6"
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Full-Stack Software Developer
              </motion.p>
              <motion.div
                className="flex flex-col md:flex-row justify-center items-center gap-6 text-white"
                variants={staggerContainer}
              >
                <motion.a
                  href="mailto:vivekbhakhri739@gmail.com"
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={hoverScale}
                >
                  <Mail size={20} />
                  vivekbhakhri739@gmail.com
                </motion.a>
                <motion.a
                  href="tel:5142310175"
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={hoverScale}
                >
                  <span className="text-xl">📱</span>
                  Contact Me
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/vivek-bhakhri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={hoverScale}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/vivekbhakhri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={hoverScale}
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
              </motion.div>

              <motion.h2
                  className="text-3xl font-bold text-white mb-8 text-center"
                  variants={fadeIn}
              >
              </motion.h2>
              <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20 flex flex-col md:flex-row gap-8 items-center"
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                    borderColor: "rgba(255, 255, 255, 0.4)"
                  }}
              >
                <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30 flex-shrink-0 mx-auto md:mx-0"
                    variants={fadeIn}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                  <Image
                      src="/profile-image.jpg"
                      alt="Profile Picture"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                  />
                </motion.div>

                <motion.div
                    className="flex-1"
                    variants={fadeIn}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >

                  <motion.div
                      className="space-y-4 text-gray-300"
                      variants={staggerContainer}
                  >
                    <motion.p variants={fadeIn}>
                      I'm a dedicated software developer with a passion for creating elegant, efficient solutions to complex problems. With expertise in both frontend and backend technologies, I bring a holistic approach to software development.
                    </motion.p>
                    <motion.p variants={fadeIn}>
                      My journey in tech began with a curiosity about how things work, which evolved into a career building applications that make a difference. I thrive in collaborative environments where innovation is valued and continuous learning is encouraged.
                    </motion.p>
                    <motion.p variants={fadeIn}>
                      When I'm not coding, you can find me exploring new technologies, working on personal projects, or enjoying outdoor activities to maintain a healthy work-life balance.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>


            </motion.div>

          </motion.header>

          {/* About Section */}
          <motion.section 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center"
              variants={fadeIn}
            >
              Technical Skills
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div 
                    key={category} 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                      borderColor: "rgba(255, 255, 255, 0.4)"
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {category === 'languages' && <Code className="text-purple-400" size={24} />}
                      {category === 'frameworks' && <Globe className="text-purple-400" size={24} />}
                      {category === 'databases' && <Database className="text-purple-400" size={24} />}
                      {category === 'tools' && <Award className="text-purple-400" size={24} />}
                      <h3 className="text-lg font-semibold text-white capitalize">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                          <motion.span 
                            key={skill} 
                            className="bg-purple-600/30 text-purple-100 px-3 py-1 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ 
                              backgroundColor: "rgba(124, 58, 237, 0.5)",
                              scale: 1.05
                            }}
                          >
                            {skill}
                          </motion.span>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center"
              variants={fadeIn}
            >
              Experience
            </motion.h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                      borderColor: "rgba(255, 255, 255, 0.4)"
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-purple-200 font-medium">{exp.company}</p>
                      </motion.div>
                      <motion.div 
                        className="text-purple-300 text-sm mt-2 md:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </motion.div>
                    </div>
                    <motion.ul 
                      className="space-y-2"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.4 + index * 0.1 }}
                    >
                      {exp.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            className="text-gray-300 flex items-start gap-2"
                            variants={fadeIn}
                            transition={{ duration: 0.3, delay: achIndex * 0.05 }}
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            {achievement}
                          </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center"
              variants={fadeIn}
            >
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                      borderColor: "rgba(255, 255, 255, 0.4)"
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <motion.h3 
                        className="text-xl font-semibold text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.span 
                        className="text-purple-300 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      >
                        {project.date}
                      </motion.span>
                    </div>
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.4 + index * 0.2 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="bg-purple-600/30 text-purple-100 px-2 py-1 rounded text-sm"
                            variants={fadeIn}
                            whileHover={{ 
                              backgroundColor: "rgba(124, 58, 237, 0.5)",
                              scale: 1.05
                            }}
                          >
                            {tech}
                          </motion.span>
                      ))}
                    </motion.div>
                    <motion.ul 
                      className="space-y-2"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.5 + index * 0.2 }}
                    >
                      {project.description.map((desc, descIndex) => (
                          <motion.li 
                            key={descIndex} 
                            className="text-gray-300 flex items-start gap-2"
                            variants={fadeIn}
                            transition={{ duration: 0.3, delay: descIndex * 0.05 }}
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            {desc}
                          </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center"
              variants={fadeIn}
            >
              Education
            </motion.h2>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
            >
              <motion.h3 
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Computer Science Technician - Software Testing
              </motion.h3>
              <motion.p 
                className="text-purple-200 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Cégep de la Gaspésie et des Îles
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 mt-2 text-purple-300 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  May 2019 – May 2021
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  Montreal, QC
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
            >
              <motion.p 
                className="text-purple-200 mb-4"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's build something amazing together!
              </motion.p>
              <motion.div 
                className="flex justify-center gap-6"
                variants={staggerContainer}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.a 
                  href="mailto:vivekbhakhri739@gmail.com" 
                  className="text-white hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    color: "rgba(216, 180, 254, 1)" 
                  }}
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a 
                  href="tel:5142310175" 
                  className="text-white hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    color: "rgba(216, 180, 254, 1)" 
                  }}
                >
                  <span className="text-xl">📱</span>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/vivek-bhakhri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    color: "rgba(216, 180, 254, 1)" 
                  }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://github.com/vivekbhakhri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-purple-300 transition-colors"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    color: "rgba(216, 180, 254, 1)" 
                  }}
                >
                  <Github size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.footer>
        </div>
      </div>
  )
}
