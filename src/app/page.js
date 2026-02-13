'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  FileText,
  Briefcase,
  Layers,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiNodedotjs,
  SiDotnet,
  SiLaravel,
  SiGit,
  SiDocker,
  SiFigma,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Portfolio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Experience timeline
  const experiences = [
    {
      year: '2023',
      role: 'Frontend Developer',
      company: 'Frontline Accounting (CBX)',
      current: true,
    },
    {
      year: '2023',
      role: 'Frontend Developer',
      company: 'Azensys (NotaryPro)',
      current: false,
    },
    {
      year: '2021',
      role: 'Frontend Developer',
      company: 'Brankas',
      current: false,
    },
    {
      year: '2020',
      role: 'Web Developer',
      company: 'Emlo Technologies',
      current: false,
    },
    {
      year: '2017',
      role: 'Software Developer',
      company: 'DGV SmartStart',
      current: false,
    },
  ];

  // Tech stack
  const techStack = {
    frontend: [
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Nuxt', icon: SiNuxtdotjs },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'C# .NET', icon: SiDotnet },
      { name: 'Laravel', icon: SiLaravel },
    ],
    tools: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Figma', icon: SiFigma },
    ],
  };

  // Projects
  const projects = [
    {
      title: 'Client Onboarding Platform',
      company: 'Frontline Accounting',
      description:
        'Enterprise KYC and onboarding platform serving 200+ organizations with multi-step workflows.',
      tech: ['Nuxt', 'TypeScript', 'Pinia'],
      metrics: '60% faster onboarding',
    },
    {
      title: 'Legal Appointment Scheduler',
      company: 'NotaryPro',
      description:
        'Scheduling system handling 500+ daily appointments with digital signing integration.',
      tech: ['React', 'REST APIs'],
      metrics: '10K+ active users',
    },
    {
      title: 'Core Banking Solution',
      company: 'Brankas',
      description:
        'Mobile-first banking app integrated with 15+ financial institutions. Led Vue 2→3 migration.',
      tech: ['Vue 3', 'Banking APIs'],
      metrics: '100K+ users served',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'James Wilson',
      role: 'CTO, Frontline Accounting',
      content:
        'Arnold delivered exceptional work on our client onboarding platform. His attention to detail and ability to translate complex requirements into elegant solutions is outstanding.',
      avatar: '/avatars/avatar1.jpg',
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager, Brankas',
      content:
        'Working with Arnold on our banking platform migration was seamless. He led the Vue 2 to Vue 3 upgrade with zero downtime and improved performance significantly.',
      avatar: '/avatars/avatar2.jpg',
    },
    {
      name: 'Michael Torres',
      role: 'Engineering Lead, NotaryPro',
      content:
        'Arnold has a rare combination of technical excellence and great communication skills. He consistently exceeded expectations on our scheduling system project.',
      avatar: '/avatars/avatar3.jpg',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Minimal Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40'>
        <div className='max-w-5xl mx-auto px-6 h-16 flex items-center justify-between'>
          <button
            onClick={() => scrollToSection('hero')}
            className='font-semibold text-lg tracking-tight hover:text-primary transition-colors'
          >
            Arnold Agura
          </button>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-6'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </button>
            <ModeToggle />
          </div>

          {/* Mobile Nav */}
          <div className='md:hidden flex items-center gap-2'>
            <ModeToggle />
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden border-t border-border bg-background'
            >
              <div className='px-6 py-4 space-y-3'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='block w-full text-left py-2 text-muted-foreground hover:text-foreground'
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className='block w-full text-left py-2 text-muted-foreground hover:text-foreground'
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='block w-full text-left py-2 text-muted-foreground hover:text-foreground'
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 pt-24 pb-16'>
        {/* Bento Grid Layout */}
        <div
          id='hero'
          className='grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-min'
        >
          {/* Profile Card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='md:col-span-2 md:row-span-2'
          >
            <div className='h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5'>
              {/* Profile Image */}
              <div className='relative w-32 h-32 mx-auto mb-6'>
                <div className='absolute -inset-1 bg-gradient-to-br from-primary to-emerald-500 rounded-full blur-sm opacity-60' />
                <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-background'>
                  <img
                    src='/arnold.jpg'
                    alt='Arnold Agura'
                    className='w-full h-full object-cover object-top'
                    style={{ objectPosition: '50% 15%' }}
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className='text-center'>
                <h1 className='text-2xl font-bold mb-1'>Arnold Agura</h1>
                <div className='flex items-center justify-center gap-2 text-muted-foreground mb-4'>
                  <MapPin size={14} />
                  <span className='text-sm'>Cebu, Philippines</span>
                </div>
                <p className='text-sm text-muted-foreground mb-6'>
                  Senior Frontend Developer
                </p>

                {/* Action Buttons */}
                <div className='space-y-2'>
                  <Button
                    className='w-full bg-primary hover:bg-primary/90'
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail size={16} className='mr-2' />
                    Get in Touch
                  </Button>
                  <div className='flex gap-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      asChild
                      className='flex-1'
                    >
                      <a
                        href='https://github.com/ArnoldAgura'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub size={18} />
                      </a>
                    </Button>
                    <Button
                      variant='outline'
                      size='icon'
                      asChild
                      className='flex-1'
                    >
                      <a
                        href='https://linkedin.com/in/arnoldagura'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Card - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='md:col-span-4'
            id='about'
          >
            <div className='h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5'>
              <div className='flex items-center gap-2 mb-5'>
                <FileText size={18} className='text-muted-foreground' />
                <h2 className='text-lg font-semibold'>About</h2>
              </div>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  I&apos;m a frontend developer specializing in building modern web
                  applications with Vue.js, Nuxt, React, and TypeScript. I work on
                  projects including enterprise platforms, fintech solutions, banking
                  applications, and SaaS products.
                </p>
                <p>
                  I&apos;ve helped startups and enterprises build and scale their
                  products through robust software solutions. My experience spans
                  client onboarding systems, scheduling platforms, and banking
                  applications.
                </p>
                <p>
                  I&apos;m passionate about writing clean, maintainable code and
                  creating intuitive user experiences. My work focuses on performance
                  optimization, component architecture, and delivering high-quality
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='md:col-span-4'
          >
            <div className='h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5'>
              <div className='flex items-center gap-2 mb-6'>
                <Briefcase size={18} className='text-muted-foreground' />
                <h2 className='text-lg font-semibold'>Experience</h2>
              </div>

              {/* Vertical Timeline */}
              <div className='relative'>
                {/* Timeline Line */}
                <div className='absolute left-[5px] top-3 bottom-3 w-[2px] bg-border' />

                <div className='space-y-5'>
                  {experiences.map((exp, index) => (
                    <div key={index} className='relative pl-7 flex items-start justify-between gap-4'>
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-0 top-1 w-3 h-3 rounded-full ${
                          exp.current
                            ? 'bg-foreground'
                            : 'bg-muted-foreground/40'
                        }`}
                      />

                      <div className='min-w-0 flex-1'>
                        <p className='font-medium text-sm leading-tight'>
                          {exp.role}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {exp.company}
                        </p>
                      </div>
                      <span className='text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border bg-muted/50 whitespace-nowrap'>
                        {exp.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='md:col-span-6'
          >
            <div className='p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5'>
              <div className='flex items-center gap-2 mb-6'>
                <Layers size={18} className='text-muted-foreground' />
                <h2 className='text-lg font-semibold'>Tech Stack</h2>
              </div>

              <div className='space-y-4'>
                {/* Frontend */}
                <div>
                  <p className='text-xs text-muted-foreground uppercase tracking-wider mb-3'>
                    Frontend
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {techStack.frontend.map((tech) => (
                      <div
                        key={tech.name}
                        className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border hover:border-primary/30 hover:bg-muted transition-all duration-200'
                      >
                        <tech.icon className='w-4 h-4' />
                        <span className='text-sm font-medium'>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend & Tools */}
                <div className='flex flex-wrap gap-8'>
                  <div>
                    <p className='text-xs text-muted-foreground uppercase tracking-wider mb-3'>
                      Backend
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {techStack.backend.map((tech) => (
                        <div
                          key={tech.name}
                          className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border hover:border-primary/30 hover:bg-muted transition-all duration-200'
                        >
                          <tech.icon className='w-4 h-4' />
                          <span className='text-sm font-medium'>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className='text-xs text-muted-foreground uppercase tracking-wider mb-3'>
                      Tools
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {techStack.tools.map((tech) => (
                        <div
                          key={tech.name}
                          className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border hover:border-primary/30 hover:bg-muted transition-all duration-200'
                        >
                          <tech.icon className='w-4 h-4' />
                          <span className='text-sm font-medium'>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Section - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='md:col-span-6'
            id='projects'
          >
            <div className='p-6 rounded-2xl border border-border bg-card'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-lg font-semibold'>Recent Projects</h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group'
                  >
                    <div className='h-full p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 hover:-translate-y-0.5'>
                      <div className='flex items-start justify-between mb-3'>
                        <span className='text-xs text-muted-foreground'>
                          {project.company}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className='text-muted-foreground group-hover:text-primary transition-colors'
                        />
                      </div>

                      <h3 className='font-semibold mb-2 group-hover:text-primary transition-colors'>
                        {project.title}
                      </h3>

                      <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-1.5 mb-3'>
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className='px-2 py-0.5 text-xs rounded bg-muted border border-border'
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className='text-xs font-medium text-primary'>
                        {project.metrics}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='md:col-span-6'
          >
            <div className='p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-lg font-semibold'>Testimonials</h2>
                <div className='flex gap-1'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8'
                    onClick={() =>
                      setCurrentTestimonial(
                        (prev) =>
                          (prev - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8'
                    onClick={() =>
                      setCurrentTestimonial(
                        (prev) => (prev + 1) % testimonials.length,
                      )
                    }
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className='text-lg leading-relaxed mb-6 italic text-muted-foreground'>
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </blockquote>

                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-500' />
                    <div>
                      <p className='font-medium text-sm'>
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className='flex justify-center gap-1.5 mt-6'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-primary w-4'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Card - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='md:col-span-6'
            id='contact'
          >
            <div className='p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-emerald-500/5 hover:border-primary/30 transition-all duration-300'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                <div>
                  <h2 className='text-lg font-semibold mb-2'>
                    Let&apos;s work together
                  </h2>
                  <p className='text-muted-foreground'>
                    I&apos;m currently available for remote frontend development
                    opportunities.
                  </p>
                </div>

                <div className='flex flex-wrap gap-3'>
                  <Button asChild>
                    <a href='mailto:arnold.agura@gmail.com'>
                      <Mail size={16} className='mr-2' />
                      Send Email
                    </a>
                  </Button>
                  <Button variant='outline' asChild>
                    <a href='/Arnold_Agura_CV.pdf' download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className='border-t border-border'>
        <div className='max-w-5xl mx-auto px-6 py-8'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground'>
            <p>© 2024 Arnold Agura. Built with Next.js & Tailwind CSS.</p>
            <div className='flex items-center gap-4'>
              <a
                href='https://github.com/ArnoldAgura'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-foreground transition-colors'
              >
                GitHub
              </a>
              <a
                href='https://linkedin.com/in/arnoldagura'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-foreground transition-colors'
              >
                LinkedIn
              </a>
              <a
                href='mailto:arnold.agura@gmail.com'
                className='hover:text-foreground transition-colors'
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
