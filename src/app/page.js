'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  User,
  FileText,
  Menu,
  X,
  ChevronDown,
  Monitor,
  Smartphone,
  Database,
  Globe,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const experiences = [
    {
      company: 'Frontline Accounting (CBX - UK)',
      role: 'Frontend Developer (Nuxt)',
      period: 'Nov 2023 - Present',
      location: 'Remote',
      description:
        'Building client-facing web applications with Nuxt.js and TypeScript',
      achievements: [
        'Built client onboarding platform using Nuxt TypeScript and Pinia',
        'Developed automated multi-step onboarding workflows with form validation',
        'Created dynamic KYC and Risk assessment forms',
        'Implemented dynamic theme system for customizable branding',
      ],
      tech: ['Nuxt 3', 'TypeScript', 'Pinia', 'Vue.js'],
    },
    {
      company: 'Azensys (NotaryPro)',
      role: 'Frontend Web Developer (React)',
      period: 'Nov 2023 - May 2024',
      location: 'Remote',
      description:
        'Developed legal appointment scheduling and document management systems',
      achievements: [
        'Built intake forms for scheduling appointments with lawyers',
        'Created tenant site for appointment and document management',
        'Maintained digital signing and scheduling features',
        'Translated Figma designs to pixel-perfect components',
      ],
      tech: ['React', 'REST APIs', 'Figma', 'JavaScript'],
    },
    {
      company: 'Brankas',
      role: 'Frontend Web Developer (Vue 3, React)',
      period: 'Nov 2021 - Apr 2023',
      location: 'Remote',
      description: 'Worked on core banking solutions and fintech applications',
      achievements: [
        'Refactored Core Banking project from Vue 2 to Vue 3',
        'Developed mobile-first responsive web application for bank account binding',
        'Collaborated with UI/UX designers for optimal user experience',
      ],
      tech: ['Vue 3', 'React', 'Mobile-First Design', 'Banking APIs'],
    },
    {
      company: 'Emlo Technologies',
      role: 'Web Developer (Angular, React & Flutter)',
      period: 'Oct 2020 - Nov 2021',
      location: 'Remote',
      description:
        'Developed various fintech applications and mentored junior developers',
      achievements: [
        'Built Money Changer, Remittance, Accounting applications',
        'Created marketing sites using React',
        'Developed mobile app for live FX rates using Flutter',
        'Mentored junior developers and conducted code reviews',
      ],
      tech: ['Angular 8', 'React', 'Flutter', 'C#', 'TypeScript'],
    },
    {
      company: 'DGV SmartStart',
      role: 'Software Developer (Angular & C#)',
      period: 'Oct 2017 - Oct 2020',
      location: 'Cebu City, Philippines',
      description:
        'Developed enterprise solutions for pharmacy and cannabis dispensary',
      achievements: [
        'Built Point-of-sale and inventory management system',
        'Worked on ERP system from requirements to deployment',
        'Developed telehealth web app with Socket.io messaging',
        'Direct client interaction for requirements and bug fixes',
      ],
      tech: ['Angular 8', 'C#', 'Node.js', 'Socket.io', 'Ionic'],
    },
  ];

  const skills = {
    'Frontend Frameworks': [
      { name: 'Nuxt 3', level: 95, experience: '1+ years' },
      { name: 'Vue.js', level: 90, experience: '4+ years' },
      { name: 'React', level: 85, experience: '3+ years' },
      { name: 'Angular', level: 80, experience: '3+ years' },
    ],
    'Languages & Core': [
      { name: 'JavaScript/TypeScript', level: 95, experience: '6+ years' },
      { name: 'HTML5/CSS3', level: 90, experience: '6+ years' },
      { name: 'Responsive Design', level: 90, experience: '6+ years' },
    ],
    'Backend & Database': [
      { name: 'C#', level: 75, experience: '3 years' },
      { name: 'PHP Laravel', level: 70, experience: '2 years' },
      { name: 'Node.js', level: 65, experience: '1 year' },
      { name: 'MS SQL/MySQL', level: 70, experience: '3+ years' },
    ],
    'Mobile & Tools': [
      { name: 'Flutter', level: 60, experience: '1 year' },
      { name: 'Ionic', level: 70, experience: '2 years' },
      { name: 'Git/CI/CD', level: 85, experience: '6+ years' },
    ],
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gray-900/95 border-gray-800'
            : 'bg-white/95 border-gray-200'
        } backdrop-blur-sm border-b`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center h-16'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='font-bold text-xl'
            >
              Arnold Agura
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId='activeSection'
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                      }`}
                    />
                  )}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center space-x-4'>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='p-2'
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className='px-4 py-2 space-y-1'>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? theme === 'dark'
                          ? 'text-blue-400 bg-gray-800'
                          : 'text-blue-600 bg-gray-100'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    } rounded-lg`}
                  >
                    <item.icon className='inline-block w-4 h-4 mr-2' />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id='home' className='pt-16 min-h-screen flex items-center'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
                Frontend Developer
                <span
                  className={`block ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  & UI Engineer
                </span>
              </h1>

              <p
                className={`text-lg sm:text-xl mb-8 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                6+ years crafting exceptional user experiences with modern
                JavaScript frameworks. Specialized in Nuxt 3, Vue.js, and React
                with a passion for creating seamless experiences for both users
                and developers.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Mail className='w-4 h-4 mr-2' />
                  Get In Touch
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='#experience'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('experience');
                  }}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors border ${
                    theme === 'dark'
                      ? 'border-gray-700 hover:bg-gray-800 text-white'
                      : 'border-gray-300 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <FileText className='w-4 h-4 mr-2' />
                  View Experience
                </motion.a>
              </div>

              <div className='flex items-center space-x-6'>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://github.com/arnoldagura'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Github size={24} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://linkedin.com/in/arnoldagura'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative'
            >
              <div
                className={`w-full max-w-md mx-auto aspect-square rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-900 to-purple-900'
                    : 'bg-gradient-to-br from-blue-100 to-purple-100'
                } flex items-center justify-center`}
              >
                <div className='text-center'>
                  <Monitor
                    className={`w-16 h-16 mx-auto mb-4 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                  <p
                    className={`text-lg font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Building the Future
                  </p>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    One Component at a Time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>About Me</h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold mb-6'>
                Frontend Developer with a Passion for Excellence
              </h3>

              <div
                className={`prose max-w-none ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <p className='mb-4'>
                  With 6+ years of experience in frontend development, I
                  specialize in creating exceptional user experiences using
                  modern JavaScript frameworks. My expertise spans from building
                  scalable client-facing applications to dynamic user onboarding
                  systems for banking and fintech companies.
                </p>

                <p className='mb-4'>
                  I'm passionate about staying current with the latest
                  technologies and best practices, recently mastering Nuxt 3 and
                  TypeScript while maintaining strong expertise in React and
                  Vue.js ecosystems.
                </p>

                <p className='mb-6'>
                  Based in Cebu City, Philippines, I work remotely with teams
                  worldwide, bringing a unique perspective to every project and
                  fostering collaborative environments that drive innovation.
                </p>
              </div>

              <div className='flex items-center space-x-4 mb-6'>
                <MapPin
                  className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
                <span>Cebu City, Central Visayas, Philippines</span>
              </div>

              <div className='flex items-center space-x-4'>
                <Calendar
                  className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
                <span>Available for remote opportunities</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='grid grid-cols-2 gap-6'
            >
              {[
                {
                  icon: Code,
                  title: 'Clean Code',
                  desc: 'Writing maintainable, scalable code',
                },
                {
                  icon: Monitor,
                  title: 'Responsive Design',
                  desc: 'Mobile-first approach',
                },
                {
                  icon: Globe,
                  title: 'Web Standards',
                  desc: 'Following best practices',
                },
                {
                  icon: Briefcase,
                  title: 'Team Player',
                  desc: 'Collaborative development',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}
                >
                  <item.icon
                    className={`w-8 h-8 mb-4 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                  <h4 className='font-semibold mb-2'>{item.title}</h4>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Work Experience
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
          </motion.div>

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-6 ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'
                }`}
              >
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4'>
                  <div>
                    <h3 className='text-xl font-bold mb-1'>{exp.role}</h3>
                    <p
                      className={`text-lg ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div
                    className={`text-sm mt-2 lg:mt-0 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <div className='flex items-center mb-1'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {exp.period}
                    </div>
                    <div className='flex items-center'>
                      <MapPin className='w-4 h-4 mr-1' />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {exp.description}
                </p>

                <div className='mb-4'>
                  <h4 className='font-semibold mb-2'>Key Achievements:</h4>
                  <ul
                    className={`list-disc list-inside space-y-1 text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-blue-900 text-blue-300'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Skills & Expertise
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}
                >
                  <h3 className='text-xl font-bold mb-6'>{category}</h3>

                  <div className='space-y-4'>
                    {skillList.map((skill, index) => (
                      <div key={index}>
                        <div className='flex justify-between items-center mb-2'>
                          <span className='font-medium'>{skill.name}</span>
                          <span
                            className={`text-sm ${
                              theme === 'dark'
                                ? 'text-gray-400'
                                : 'text-gray-600'
                            }`}
                          >
                            {skill.experience}
                          </span>
                        </div>

                        <div
                          className={`w-full rounded-full h-2 ${
                            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${
                              theme === 'dark'
                                ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mt-12 p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}
          >
            <h3 className='text-xl font-bold mb-4'>Education</h3>
            <div className='flex items-start space-x-4'>
              <div
                className={`p-2 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                }`}
              >
                <FileText
                  className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
              </div>
              <div>
                <h4 className='font-semibold'>
                  Bachelor of Science: Information Technology
                </h4>
                <p
                  className={`${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  University of San Jose - Recoletos
                </p>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Magallanes St. Cebu City, Philippines
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Let's Work Together
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6'></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Ready to bring your ideas to life? I&apos;m always open to
              discussing new opportunities and exciting projects. Let's create
              something amazing together.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h3 className='text-2xl font-bold mb-6'>Get In Touch</h3>

                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                      }`}
                    >
                      <Mail
                        className={`w-6 h-6 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <div>
                      <p className='font-medium'>Email</p>
                      <a
                        href='mailto:arnold.agura@email.com'
                        className={`${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        } hover:underline`}
                      >
                        arnold.agura@email.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                      }`}
                    >
                      <MapPin
                        className={`w-6 h-6 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <div>
                      <p className='font-medium'>Location</p>
                      <p
                        className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Cebu City, Central Visayas, Philippines
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div
                      className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
                      }`}
                    >
                      <Globe
                        className={`w-6 h-6 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <div>
                      <p className='font-medium'>Availability</p>
                      <p
                        className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Open for remote opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='font-semibold mb-4'>Connect with me</h4>
                <div className='flex space-x-4'>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href='https://github.com/arnoldagura'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-900 shadow-md'
                    }`}
                  >
                    <Github size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href='https://linkedin.com/in/arnoldagura'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-900 shadow-md'
                    }`}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'
              }`}
            >
              <h3 className='text-xl font-bold mb-6'>Send a Message</h3>

              <form className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-2'>Name</label>
                  <input
                    type='text'
                    className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-3 py-2 rounded-lg border transition-colors resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder='Tell me about your project...'
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors'
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          theme === 'dark'
            ? 'bg-gray-900 border-gray-800 text-gray-400'
            : 'bg-white border-gray-200 text-gray-600'
        }`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2025 Arnold Agura. All rights reserved.</p>
            <p className='mt-2 md:mt-0'>
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
