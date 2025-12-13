'use client'

import React from 'react'
import { Mail, Github, Linkedin, MapPin, Calendar, Code, Database, Globe, Award } from 'lucide-react'

export default function Home() {
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
          <header className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Vivek Bhakhri
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 mb-6">
                Full-Stack Software Developer
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
                <a href="mailto:vivekbhakhri739@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Mail size={20} />
                  vivekbhakhri739@gmail.com
                </a>
                <a href="tel:5142310175" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <span className="text-xl">📱</span>
                  514-231-0175
                </a>
                <a href="https://linkedin.com/in/vivek-bhakhri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="https://github.com/vivekbhakhri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </header>

          {/* Objective Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Objective</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <p className="text-gray-300 leading-relaxed">
                Passionate and versatile Full-Stack Developer with expertise in modern web and mobile technologies. 
                Seeking to leverage my technical skills and creative problem-solving abilities to build innovative, 
                user-centered applications that deliver exceptional experiences. Committed to continuous learning 
                and growth in a collaborative environment where I can contribute to impactful projects and further 
                develop my expertise in software development.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                    <div className="flex items-center gap-2 mb-4">
                      {category === 'languages' && <Code className="text-purple-400" size={24} />}
                      {category === 'frameworks' && <Globe className="text-purple-400" size={24} />}
                      {category === 'databases' && <Database className="text-purple-400" size={24} />}
                      {category === 'tools' && <Award className="text-purple-400" size={24} />}
                      <h3 className="text-lg font-semibold text-white capitalize">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                          <span key={skill} className="bg-purple-600/30 text-purple-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-purple-200 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-purple-300 text-sm mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            {achievement}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-purple-300 text-sm">{project.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                          <span key={tech} className="bg-purple-600/30 text-purple-100 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            {desc}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white">Computer Science Technician - Software Testing</h3>
              <p className="text-purple-200 font-medium">Cégep de la Gaspésie et des Îles</p>
              <div className="flex items-center gap-4 mt-2 text-purple-300 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  May 2019 – May 2021
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  Montreal, QC
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <p className="text-purple-200 mb-4">Let's build something amazing together!</p>
              <div className="flex justify-center gap-6">
                <a href="mailto:vivekbhakhri739@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:5142310175" className="text-white hover:text-purple-300 transition-colors">
                  <span className="text-xl">📱</span>
                </a>
                <a href="https://linkedin.com/in/vivek-bhakhri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/vivekbhakhri" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
  )
}
