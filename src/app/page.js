'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  User,
  FileText,
  Menu,
  X,
  Monitor,
  Globe,
  Send,
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/mode-toggle';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'labs', label: 'Labs' },
    { id: 'contact', label: 'Contact' },
  ];

  const experiences = [
    {
      company: 'Frontline Accounting (CBX - UK)',
      role: 'Frontend Developer (Nuxt)',
      period: 'Nov 2023 - Present',
      location: 'Remote',
      current: true,
      description:
        'Building client-facing web applications with Nuxt.js and TypeScript for professional services firms.',
      achievements: [
        'Built client onboarding platform serving 200+ organizations, reducing onboarding time by 60%',
        'Developed automated multi-step workflows processing 1,000+ client applications monthly',
        'Created dynamic KYC forms with 95%+ validation accuracy, reducing errors by 75%',
        'Implemented white-label theming system supporting 50+ brand configurations',
        'Led UI/UX improvements increasing user satisfaction from 3.2 to 4.7/5',
      ],
      impact: {
        users: '15K+',
        performance: '+40% faster load',
        revenue: 'Enabled £2M+ contracts',
      },
      tech: ['Nuxt 3', 'TypeScript', 'Pinia', 'Vue.js', 'REST APIs'],
    },
    {
      company: 'Azensys (NotaryPro)',
      role: 'Frontend Web Developer (React)',
      period: 'Nov 2023 - May 2024',
      location: 'Remote',
      current: false,
      description:
        'Developed legal appointment scheduling and document management systems for notary services.',
      achievements: [
        'Built scheduling platform handling 500+ daily appointments with 99.9% uptime',
        'Developed multi-tenant architecture supporting 50+ law firms simultaneously',
        'Implemented digital signing flow processing 2,000+ legal documents monthly',
        'Achieved 100% Figma-to-code accuracy across 120+ components',
        'Reduced API response times by 45% through optimized data fetching patterns',
      ],
      impact: {
        users: '10K+',
        appointments: '500+/day',
        satisfaction: '4.6/5 rating',
      },
      tech: ['React', 'REST APIs', 'Figma', 'JavaScript', 'Real-time Systems'],
    },
    {
      company: 'Brankas',
      role: 'Frontend Web Developer (Vue 3, React)',
      period: 'Nov 2021 - Apr 2023',
      location: 'Remote',
      current: false,
      description:
        'Worked on core banking solutions and fintech applications for seamless financial integrations.',
      achievements: [
        'Led Vue 2→3 migration of banking platform serving 100K+ users with zero downtime',
        'Reduced bundle size by 35% and improved Lighthouse score from 72 to 95',
        'Developed mobile-first banking app integrated with 15+ financial institutions',
        'Implemented account linking flow with 98% success rate, reducing support tickets by 60%',
        'Optimized render performance, cutting time-to-interactive from 4.2s to 1.8s',
      ],
      impact: {
        users: '100K+',
        performance: 'Lighthouse 95',
        integration: '15+ banks',
      },
      tech: [
        'Vue 3',
        'Vue 2',
        'React',
        'Mobile-First Design',
        'Banking APIs',
        'Fintech',
      ],
    },
    {
      company: 'Emlo Technologies',
      role: 'Web Developer (Angular, React & Flutter)',
      period: 'Oct 2020 - Nov 2021',
      location: 'Remote',
      current: false,
      description:
        'Developed various fintech applications and mentored junior developers in modern web technologies.',
      achievements: [
        'Built Money Changer, Remittance, Accounting, and PoS Retail web applications',
        'Created marketing sites using React for multiple company applications',
        'Developed mobile application for live FX rates using Flutter',
        'Mentored junior developers during OJT by reviewing pull requests',
        'Contributed to frontend integration using Angular 8 TypeScript and backend C#',
      ],
      tech: ['Angular 8', 'React', 'Flutter', 'C#', 'TypeScript'],
    },
    {
      company: 'DGV SmartStart',
      role: 'Software Developer (Angular & C#)',
      period: 'Oct 2017 - Oct 2020',
      location: 'Cebu City, Philippines',
      current: false,
      description:
        'Developed enterprise solutions including Point-of-sale and ERP systems for pharmacy and cannabis dispensary.',
      achievements: [
        'Built enterprise Point-of-sale and real-time inventory management system',
        'Worked on ERP system from requirements gathering to deployment and maintenance',
        'Developed telehealth web app using Socket.io for messaging and conference calls',
        'Helped develop Backend API using Node.js for cloud-based dental care software',
        'Engaged directly with clients to clarify requirements and implement fixes',
      ],
      tech: ['Angular 8', 'C#', 'Node.js', 'Socket.io', 'Ionic', 'TypeScript'],
    },
  ];

  const techStack = {
    frontend: [
      { name: 'Nuxt 3', icon: '⚡', color: 'from-green-400 to-emerald-600', level: 95, yearsExp: '2+' },
      { name: 'Vue.js', icon: '💚', color: 'from-green-500 to-teal-600', level: 90, yearsExp: '4+' },
      { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-600', level: 85, yearsExp: '3+' },
      { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-600', level: 95, yearsExp: '4+' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-600', level: 90, yearsExp: '3+' },
      { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900', level: 85, yearsExp: '2+' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-lime-600', level: 75, yearsExp: '3+' },
      { name: 'C#', icon: '#️⃣', color: 'from-purple-500 to-violet-600', level: 75, yearsExp: '3+' },
      { name: 'Laravel', icon: '🔴', color: 'from-red-500 to-orange-600', level: 70, yearsExp: '2+' },
      { name: 'REST APIs', icon: '🔌', color: 'from-blue-500 to-purple-600', level: 90, yearsExp: '6+' },
    ],
    tools: [
      { name: 'Git', icon: '📚', color: 'from-orange-500 to-red-600', level: 90, yearsExp: '6+' },
      { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600', level: 70, yearsExp: '2+' },
      { name: 'Figma', icon: '🎨', color: 'from-pink-400 to-purple-600', level: 85, yearsExp: '4+' },
      { name: 'CI/CD', icon: '🔄', color: 'from-green-400 to-cyan-600', level: 85, yearsExp: '3+' },
    ],
  };


  const labProjects = [
    {
      title: 'Component Playground',
      description: 'Interactive showcase of reusable UI components with live code editing',
      tech: ['React', 'Storybook', 'Tailwind'],
      status: 'Active',
      icon: Code,
    },
    {
      title: '3D Card Animations',
      description: 'Experimental 3D transform effects and parallax card interactions',
      tech: ['Three.js', 'GSAP', 'Framer Motion'],
      status: 'In Progress',
      icon: Sparkles,
    },
    {
      title: 'Design System',
      description: 'Personal design tokens and component library for rapid prototyping',
      tech: ['shadcn/ui', 'Radix UI', 'CSS Variables'],
      status: 'Active',
      icon: Monitor,
    },
    {
      title: 'Performance Tools',
      description: 'Custom hooks and utilities for optimizing React applications',
      tech: ['React', 'TypeScript', 'Web Vitals'],
      status: 'Active',
      icon: Globe,
    },
  ];

  const strengths = [
    {
      icon: Code,
      title: 'Technical Leadership',
      description: 'Mentoring developers and conducting thorough code reviews',
    },
    {
      icon: Monitor,
      title: 'Full-Stack Understanding',
      description: 'Backend knowledge enabling seamless integration',
    },
    {
      icon: Globe,
      title: 'Client Communication',
      description: 'Direct client interaction ensuring alignment',
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Quick adaptation to new technologies',
    },
  ];

  const projects = [
    {
      title: 'Client Onboarding Platform',
      company: 'Frontline Accounting (CBX)',
      description: 'Enterprise-grade onboarding platform with dynamic KYC forms, risk assessments, and custom branding capabilities.',
      image: '/projects/onboarding.jpg',
      tech: ['Nuxt 3', 'TypeScript', 'Pinia', 'REST APIs'],
      highlights: ['Multi-step workflows', 'Dynamic theming', 'Form validation'],
      metrics: [
        { label: 'Form Completion', value: '85%', change: '+15%' },
        { label: 'Load Time', value: '1.2s', change: '-40%' }
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Legal Appointment Scheduler',
      company: 'NotaryPro',
      description: 'Comprehensive scheduling system for legal appointments with document management and digital signing.',
      image: '/projects/notary.jpg',
      tech: ['React', 'REST APIs', 'Real-time Systems'],
      highlights: ['Real-time sync', 'Digital signing', 'Document management'],
      metrics: [
        { label: 'Active Users', value: '10k+', change: '+120%' },
        { label: 'Appointments/Day', value: '500+', change: '+85%' }
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Core Banking Solution',
      company: 'Brankas',
      description: 'Mobile-first banking application enabling seamless third-party financial service integrations.',
      image: '/projects/banking.jpg',
      tech: ['Vue 3', 'Mobile-First Design', 'Banking APIs'],
      highlights: ['Vue 2 to 3 migration', 'Account binding', 'Fintech integration'],
      metrics: [
        { label: 'Performance', value: '95', change: '+25pts' },
        { label: 'Bundle Size', value: '-35%', change: 'reduced' }
      ],
      link: '#',
      github: '#',
    },
    {
      title: 'Fintech Application Suite',
      company: 'Emlo Technologies',
      description: 'Multiple fintech applications including money changer, remittance, and POS retail systems.',
      image: '/projects/fintech.jpg',
      tech: ['Angular 8', 'React', 'Flutter', 'C#'],
      highlights: ['Multi-app ecosystem', 'Mobile app', 'Live FX rates'],
      metrics: [
        { label: 'Apps Deployed', value: '8', change: 'production' },
        { label: 'Daily Transactions', value: '2k+', change: 'processed' }
      ],
      link: '#',
      github: '#',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: 6, suffix: '+', highlight: true },
    { label: 'Projects Delivered', value: 50, suffix: '+', highlight: false },
    { label: 'Code Reviews', value: 500, suffix: '+', highlight: true },
    { label: 'Users Impacted', value: '100K', suffix: '+', highlight: true },
  ];

  const testimonials = [
    {
      name: 'Client Name',
      role: 'CTO, Tech Company',
      content: 'Arnold is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and technical expertise made our project a success.',
      avatar: '/avatars/avatar1.jpg',
    },
    {
      name: 'Team Lead',
      role: 'Senior Developer',
      content: 'Working with Arnold was a pleasure. His communication skills and ability to translate complex requirements into elegant solutions is outstanding.',
      avatar: '/avatars/avatar2.jpg',
    },
  ];

  const blogPosts = [
    {
      title: 'Building Scalable Frontend Architecture with Nuxt 3',
      excerpt: 'Learn how to structure large-scale applications using Nuxt 3, TypeScript, and modern state management patterns.',
      date: '2025-03-15',
      readTime: '8 min read',
      category: 'Frontend',
      image: '/blog/nuxt-architecture.jpg',
      tags: ['Nuxt 3', 'TypeScript', 'Architecture'],
      featured: true,
    },
    {
      title: 'Mastering React Performance Optimization',
      excerpt: 'Deep dive into React performance patterns, memoization strategies, and how to build lightning-fast UIs.',
      date: '2025-02-28',
      readTime: '12 min read',
      category: 'React',
      image: '/blog/react-perf.jpg',
      tags: ['React', 'Performance', 'Best Practices'],
      featured: true,
    },
    {
      title: 'From Vue 2 to Vue 3: A Migration Guide',
      excerpt: 'Practical strategies and lessons learned from migrating a production banking application from Vue 2 to Vue 3.',
      date: '2025-02-10',
      readTime: '10 min read',
      category: 'Vue.js',
      image: '/blog/vue-migration.jpg',
      tags: ['Vue.js', 'Migration', 'Tutorial'],
      featured: false,
    },
    {
      title: 'The Art of Component Design Systems',
      excerpt: 'How to build maintainable, scalable design systems that developers love to use.',
      date: '2025-01-22',
      readTime: '7 min read',
      category: 'Design Systems',
      image: '/blog/design-systems.jpg',
      tags: ['Design', 'Components', 'UI/UX'],
      featured: false,
    },
  ];

  const galleryItems = [
    {
      title: 'Modern Dashboard UI',
      category: 'UI Design',
      image: '/gallery/dashboard.jpg',
      description: 'Clean, data-driven dashboard with real-time analytics',
      tech: ['React', 'D3.js', 'Tailwind'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'E-commerce Mobile App',
      category: 'Mobile Design',
      image: '/gallery/ecommerce.jpg',
      description: 'Intuitive shopping experience with smooth animations',
      tech: ['React Native', 'Redux'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Banking Interface',
      category: 'Fintech',
      image: '/gallery/banking.jpg',
      description: 'Secure, accessible banking platform',
      tech: ['Vue 3', 'TypeScript'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'SaaS Landing Page',
      category: 'Web Design',
      image: '/gallery/saas.jpg',
      description: 'High-converting landing page with micro-interactions',
      tech: ['Next.js', 'Framer Motion'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Admin Panel',
      category: 'Enterprise',
      image: '/gallery/admin.jpg',
      description: 'Comprehensive admin interface with role management',
      tech: ['Angular', 'Material UI'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Portfolio Website',
      category: 'Personal',
      image: '/gallery/portfolio.jpg',
      description: 'Creative portfolio with unique scroll animations',
      tech: ['Next.js', 'GSAP'],
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
    <div className='min-h-screen bg-background text-foreground'>
      {/* Scroll Progress Indicator */}
      <div className='fixed top-0 left-0 w-full h-1 bg-muted/30 z-50'>
        <motion.div
          className='h-full bg-gradient-to-r from-blue-600 to-purple-600'
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation - Clean and Minimal Design */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-1 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/40'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Simplified Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='cursor-pointer'
              onClick={() => scrollToSection('home')}
            >
              <h1 className='font-bold text-xl tracking-tight'>
                Arnold Agura
              </h1>
            </motion.div>

            {/* Desktop Navigation - Simplified */}
            <div className='hidden md:flex items-center gap-1'>
              {navItems.slice(0, 6).map((item) => (
                <Button
                  key={item.id}
                  variant='ghost'
                  size='sm'
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              ))}

              <div className='ml-2 pl-2 border-l border-border flex items-center gap-2'>
                <ModeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center space-x-2'>
              <ModeToggle />

              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='relative'
              >
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Improved design */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl'
            >
              <div className='px-4 py-4 space-y-2 max-w-7xl mx-auto'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Button
                      variant={activeSection === item.id ? 'default' : 'ghost'}
                      className={`w-full justify-start text-base py-6 rounded-xl ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : ''
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Clean and Bold */}
      <section id='home' className='pt-24 pb-20 min-h-[90vh] flex items-center relative'>
        {/* Subtle background gradient */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-40'>
          <div className='absolute top-20 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl' />
        </div>

        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
          <div className='max-w-4xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Availability Badge */}
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                </span>
                <span className='text-sm font-medium text-green-700 dark:text-green-400'>
                  Available for opportunities
                </span>
              </div>

              {/* Hero Title */}
              <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight'>
                Arnold Agura
              </h1>

              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground mb-8'>
                Senior Frontend Developer
              </h2>

              {/* Value Proposition - Enhanced for recruiters */}
              <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8'>
                Senior Frontend Developer with <strong className='text-foreground'>6+ years</strong> building production-grade applications
                serving <strong className='text-foreground'>50K+ daily users</strong>. Specialized in <strong className='text-foreground'>Nuxt 3, Vue.js, React</strong>, and <strong className='text-foreground'>TypeScript</strong> for
                fintech, banking, and legal tech companies across the UK, US, and APAC.
              </p>

              {/* Key Value Props */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12'>
                <div className='flex items-center gap-2 p-3 rounded-lg bg-muted/50'>
                  <CheckCircle2 className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span className='text-sm font-medium'>50+ Projects Delivered</span>
                </div>
                <div className='flex items-center gap-2 p-3 rounded-lg bg-muted/50'>
                  <CheckCircle2 className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span className='text-sm font-medium'>Vue 2→3 Migration Expert</span>
                </div>
                <div className='flex items-center gap-2 p-3 rounded-lg bg-muted/50'>
                  <CheckCircle2 className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <span className='text-sm font-medium'>Performance Optimization</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-wrap gap-4 mb-12'>
                <Button
                  size='lg'
                  onClick={() => scrollToSection('contact')}
                  className='h-12 px-6 text-base'
                >
                  Get In Touch
                  <Mail className='w-4 h-4 ml-2' />
                </Button>

                <Button
                  size='lg'
                  variant='outline'
                  onClick={() => scrollToSection('projects')}
                  className='h-12 px-6 text-base'
                >
                  View Work
                  <Briefcase className='w-4 h-4 ml-2' />
                </Button>
              </div>

              {/* Social Links */}
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <a
                  href='https://github.com/arnoldagura'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-foreground transition-colors'
                >
                  GitHub
                </a>
                <span>·</span>
                <a
                  href='https://linkedin.com/in/arnoldagura'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-foreground transition-colors'
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href='/Arnold_Agura_CV.pdf'
                  download
                  className='hover:text-foreground transition-colors'
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* Stats Grid - Bento Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20'
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors'
                >
                  <div className='text-3xl font-bold mb-1'>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              About
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              With over 6 years of experience in frontend development, I specialize in creating
              exceptional user experiences using modern JavaScript frameworks. My expertise spans
              from building scalable client-facing applications to dynamic user onboarding systems
              for banking and fintech companies.
            </p>
          </motion.div>

          {/* Bento Grid for Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
          >
            {strengths.map((strength, index) => (
              <div
                key={index}
                className='p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors'
              >
                <strength.icon className='w-8 h-8 mb-4 text-foreground' />
                <h4 className='font-semibold mb-2 text-base'>{strength.title}</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {strength.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='mt-12 p-8 rounded-xl border border-border bg-card'
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-muted-foreground mt-0.5' />
                <div>
                  <div className='font-medium mb-1'>Location</div>
                  <div className='text-sm text-muted-foreground'>Cebu City, Philippines</div>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-green-600 mt-0.5' />
                <div>
                  <div className='font-medium mb-1'>Availability</div>
                  <div className='text-sm text-muted-foreground'>Open for remote work</div>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <Globe className='w-5 h-5 text-muted-foreground mt-0.5' />
                <div>
                  <div className='font-medium mb-1'>Experience</div>
                  <div className='text-sm text-muted-foreground'>International teams</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-24 bg-muted/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Featured Work
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Showcasing impactful solutions across fintech, legal tech, and enterprise applications
            </p>
          </motion.div>

          <div className='space-y-12'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group'
              >
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-xl border border-border bg-card hover:bg-accent/30 transition-colors'>
                  {/* Project Image/Visual */}
                  <div className='lg:col-span-5'>
                    <div className='aspect-video rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden relative'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-8xl font-bold opacity-10'>
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      <div className='absolute bottom-4 left-4 right-4 flex gap-2'>
                        {project.metrics.map((metric, i) => (
                          <div key={i} className='flex-1 bg-black/40 backdrop-blur-sm rounded-lg p-3'>
                            <div className='text-white font-bold text-lg'>{metric.value}</div>
                            <div className='text-white/70 text-xs'>{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className='lg:col-span-7 flex flex-col justify-center'>
                    <div className='mb-3'>
                      <Badge variant='secondary' className='mb-3'>
                        {project.company}
                      </Badge>
                      <h3 className='text-2xl font-bold mb-2 group-hover:text-foreground transition-colors'>
                        {project.title}
                      </h3>
                    </div>

                    <p className='text-muted-foreground leading-relaxed mb-6'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-3'>
                      <Button
                        size='sm'
                        variant='outline'
                        asChild
                      >
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                          View Project
                          <ExternalLink className='w-4 h-4 ml-2' />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Experience
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Building exceptional products across fintech, banking, and legal tech
            </p>
          </motion.div>

          <div className='space-y-6'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='hover:shadow-lg transition-shadow'>
                  <CardHeader>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                      <div>
                        <div className='flex items-center gap-2 mb-2'>
                          <CardTitle>{exp.role}</CardTitle>
                          {exp.current && (
                            <Badge variant='default'>
                              <Sparkles className='w-3 h-3 mr-1' />
                              Current
                            </Badge>
                          )}
                        </div>
                        <CardDescription className='text-base font-medium text-blue-600'>
                          {exp.company}
                        </CardDescription>
                      </div>

                      <div className='flex flex-col gap-1 text-sm text-muted-foreground'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='w-4 h-4' />
                          {exp.period}
                        </div>
                        <div className='flex items-center gap-2'>
                          <MapPin className='w-4 h-4' />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className='text-muted-foreground mb-4'>
                      {exp.description}
                    </p>

                    {/* Impact Metrics */}
                    {exp.impact && (
                      <div className='grid grid-cols-3 gap-3 mb-6 p-4 rounded-lg bg-muted/30'>
                        {Object.entries(exp.impact).map(([key, value], i) => (
                          <div key={i} className='text-center'>
                            <div className='text-lg font-bold text-blue-600'>{value}</div>
                            <div className='text-xs text-muted-foreground capitalize'>
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className='mb-4'>
                      <h4 className='font-semibold mb-3 flex items-center gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600' />
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-2 text-sm text-muted-foreground'
                          >
                            <span className='text-blue-600 mt-1'>•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex flex-wrap gap-2'>
                      {exp.tech.map((tech, i) => (
                        <Badge key={i} variant='secondary'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Leadership Section - NEW */}
      <section className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Technical Leadership
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Beyond coding - mentoring teams, establishing best practices, and driving technical excellence
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className='text-center h-full'>
                <CardContent className='pt-6'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600/10 flex items-center justify-center'>
                    <Code className='w-8 h-8 text-blue-600' />
                  </div>
                  <div className='text-4xl font-bold mb-2 text-blue-600'>500+</div>
                  <div className='text-sm text-muted-foreground mb-2'>Code Reviews</div>
                  <p className='text-xs text-muted-foreground'>
                    Conducted thorough reviews ensuring code quality and mentoring junior developers
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='text-center h-full'>
                <CardContent className='pt-6'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-green-600/10 flex items-center justify-center'>
                    <User className='w-8 h-8 text-green-600' />
                  </div>
                  <div className='text-4xl font-bold mb-2 text-green-600'>15+</div>
                  <div className='text-sm text-muted-foreground mb-2'>Developers Mentored</div>
                  <p className='text-xs text-muted-foreground'>
                    Guided junior and mid-level developers through OJT and professional growth
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='text-center h-full'>
                <CardContent className='pt-6'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600/10 flex items-center justify-center'>
                    <Sparkles className='w-8 h-8 text-purple-600' />
                  </div>
                  <div className='text-4xl font-bold mb-2 text-purple-600'>8</div>
                  <div className='text-sm text-muted-foreground mb-2'>Major Migrations Led</div>
                  <p className='text-xs text-muted-foreground'>
                    Successfully led framework upgrades and technology migrations with zero downtime
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className='text-center h-full'>
                <CardContent className='pt-6'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-orange-600/10 flex items-center justify-center'>
                    <CheckCircle2 className='w-8 h-8 text-orange-600' />
                  </div>
                  <div className='text-4xl font-bold mb-2 text-orange-600'>98%</div>
                  <div className='text-sm text-muted-foreground mb-2'>Client Satisfaction</div>
                  <p className='text-xs text-muted-foreground'>
                    Consistently delivering high-quality solutions that exceed client expectations
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Best Practices Implemented */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='mt-12'
          >
            <Card>
              <CardHeader>
                <CardTitle>Established Best Practices & Standards</CardTitle>
                <CardDescription>
                  Technical standards and processes I've implemented across teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold mb-3 flex items-center gap-2'>
                      <Code className='w-4 h-4 text-blue-600' />
                      Code Quality
                    </h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>ESLint + Prettier configurations for consistent code style</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Git workflow with protected branches and PR templates</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Component documentation with Storybook</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-3 flex items-center gap-2'>
                      <Sparkles className='w-4 h-4 text-purple-600' />
                      Performance Standards
                    </h4>
                    <ul className='space-y-2 text-sm text-muted-foreground'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Lighthouse score targets (95+ for all metrics)</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Bundle size monitoring and optimization workflows</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle2 className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0' />
                        <span>Web Vitals tracking for production applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-24 bg-muted/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Skills & Tools
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Modern tools and technologies I use to build exceptional products
            </p>
          </motion.div>

          {/* Skills Matrix with Expertise Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Frontend */}
            <div>
              <h3 className='text-xl font-semibold mb-4'>Frontend (Core Expertise)</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {techStack.frontend.map((tech) => (
                  <div
                    key={tech.name}
                    className='p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all group'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        <div className='text-2xl'>{tech.icon}</div>
                        <div>
                          <p className='font-semibold'>{tech.name}</p>
                          <p className='text-xs text-muted-foreground'>{tech.yearsExp} years</p>
                        </div>
                      </div>
                      <Badge variant='secondary' className='text-xs'>
                        {tech.level}%
                      </Badge>
                    </div>
                    <div className='h-2 bg-muted rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className='text-xl font-semibold mb-4'>Backend & APIs</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {techStack.backend.map((tech) => (
                  <div
                    key={tech.name}
                    className='p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all group'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        <div className='text-2xl'>{tech.icon}</div>
                        <div>
                          <p className='font-semibold'>{tech.name}</p>
                          <p className='text-xs text-muted-foreground'>{tech.yearsExp} years</p>
                        </div>
                      </div>
                      <Badge variant='secondary' className='text-xs'>
                        {tech.level}%
                      </Badge>
                    </div>
                    <div className='h-2 bg-muted rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className='text-xl font-semibold mb-4'>Tools & DevOps</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {techStack.tools.map((tech) => (
                  <div
                    key={tech.name}
                    className='p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all group'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        <div className='text-2xl'>{tech.icon}</div>
                        <div>
                          <p className='font-semibold'>{tech.name}</p>
                          <p className='text-xs text-muted-foreground'>{tech.yearsExp} years</p>
                        </div>
                      </div>
                      <Badge variant='secondary' className='text-xs'>
                        {tech.level}%
                      </Badge>
                    </div>
                    <div className='h-2 bg-muted rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt-12'
          >
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <FileText className='w-5 h-5' />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-lg bg-blue-600/10'>
                    <FileText className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg'>
                      Bachelor of Science: Information Technology
                    </h4>
                    <p className='text-blue-600 font-medium'>
                      University of San Jose - Recoletos
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Magallanes St. Cebu City, Philippines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id='blog' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Writing
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Sharing knowledge about frontend development, architecture, and best practices
            </p>
          </motion.div>

          <div className='space-y-8'>
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a href='#' className='block p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group'>
                  <div className='flex items-start justify-between mb-3'>
                    <Badge variant='secondary'>{post.category}</Badge>
                    <span className='text-sm text-muted-foreground'>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-foreground transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center gap-2 text-sm'>
                    <span className='text-muted-foreground'>{post.readTime}</span>
                    <span className='text-muted-foreground'>·</span>
                    <div className='flex gap-2'>
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className='text-muted-foreground'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Simplified */}
      <section id='gallery' className='py-24 bg-muted/30'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Gallery
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              A collection of UI/UX designs and interface concepts
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {galleryItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className='group relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card'>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <Monitor className='w-16 h-16 text-white/20' />
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6'>
                    <div className='text-center'>
                      <h4 className='text-white font-bold mb-1'>{item.title}</h4>
                      <p className='text-white/80 text-sm'>{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id='labs' className='py-24 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Labs
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              Exploring cutting-edge technologies and building innovative solutions
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {labProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='group h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50 relative overflow-hidden'>
                  {/* Gradient background on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  <CardHeader className='relative'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300'>
                        <project.icon className='w-6 h-6' />
                      </div>
                      <Badge
                        variant={project.status === 'Active' ? 'default' : 'secondary'}
                        className={project.status === 'Active' ? 'bg-green-600 hover:bg-green-700' : ''}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className='group-hover:text-primary transition-colors'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-base'>
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='relative'>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant='outline' className='text-xs hover:bg-muted transition-colors'>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant='ghost'
                      className='w-full mt-6 group/btn'
                      asChild
                    >
                      <a href='#' className='flex items-center justify-center gap-2'>
                        <span>Explore</span>
                        <ExternalLink className='w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='mt-12 text-center'
          >
            <Card className='border-2 border-dashed border-primary/50 bg-primary/5'>
              <CardContent className='py-12'>
                <Code className='w-12 h-12 mx-auto mb-4 text-primary' />
                <h3 className='text-2xl font-bold mb-2'>More Coming Soon</h3>
                <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                  Continuously experimenting with new technologies and building tools to improve developer experience
                </p>
                <Button variant='outline' size='lg' asChild>
                  <a href='https://github.com/arnoldagura' target='_blank' rel='noopener noreferrer'>
                    <Github className='w-4 h-4 mr-2' />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Strong CTA Section - Book a Call */}
      <section className='py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className='w-16 h-16 mx-auto mb-6 opacity-90' />
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Let's Build Something Great Together
            </h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Looking for a senior frontend developer who can deliver production-ready code,
              lead technical initiatives, and drive results? Let's discuss how I can help your team succeed.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg font-semibold'
                asChild
              >
                <a href='mailto:arnold.agura@email.com'>
                  <Mail className='w-5 h-5 mr-2' />
                  Schedule a Call
                </a>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-semibold'
                onClick={() => scrollToSection('contact')}
              >
                <Send className='w-5 h-5 mr-2' />
                Send a Message
              </Button>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20'>
              <div>
                <div className='text-3xl font-bold mb-1'>24-48h</div>
                <div className='text-sm opacity-80'>Response Time</div>
              </div>
              <div>
                <div className='text-3xl font-bold mb-1'>100%</div>
                <div className='text-sm opacity-80'>Remote Ready</div>
              </div>
              <div>
                <div className='text-3xl font-bold mb-1'>UK/US/APAC</div>
                <div className='text-sm opacity-80'>Time Zones</div>
              </div>
              <div>
                <div className='text-3xl font-bold mb-1'>6+ Years</div>
                <div className='text-sm opacity-80'>Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <Badge variant='outline' className='mb-4'>
              Contact
            </Badge>
            <h2 className='text-4xl font-bold mb-4'>Let's Work Together</h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Ready to bring your ideas to life? I'm always open to discussing
              new opportunities and exciting projects.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    Feel free to reach out for opportunities or just to say hi!
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='p-3 rounded-lg bg-blue-600/10'>
                      <Mail className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <p className='font-medium text-sm text-muted-foreground'>
                        Email
                      </p>
                      <a
                        href='mailto:arnold.agura@email.com'
                        className='text-blue-600 hover:underline font-medium'
                      >
                        arnold.agura@email.com
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className='flex items-center gap-4'>
                    <div className='p-3 rounded-lg bg-purple-600/10'>
                      <MapPin className='w-6 h-6 text-purple-600' />
                    </div>
                    <div>
                      <p className='font-medium text-sm text-muted-foreground'>
                        Location
                      </p>
                      <p className='font-medium'>
                        Cebu City, Central Visayas, Philippines
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className='flex items-center gap-4'>
                    <div className='p-3 rounded-lg bg-green-600/10'>
                      <Globe className='w-6 h-6 text-green-600' />
                    </div>
                    <div>
                      <p className='font-medium text-sm text-muted-foreground'>
                        Availability
                      </p>
                      <p className='font-medium'>
                        Open for remote opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex gap-3'>
                    <Button variant='outline' size='lg' asChild>
                      <a
                        href='https://github.com/arnoldagura'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='w-5 h-5 mr-2' />
                        GitHub
                      </a>
                    </Button>

                    <Button variant='outline' size='lg' asChild>
                      <a
                        href='https://linkedin.com/in/arnoldagura'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Linkedin className='w-5 h-5 mr-2' />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className='space-y-4'>
                    <div className='space-y-2'>
                      <label htmlFor='name' className='text-sm font-medium'>
                        Name
                      </label>
                      <Input
                        id='name'
                        placeholder='Your name'
                        className='w-full'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='email' className='text-sm font-medium'>
                        Email
                      </label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='your.email@example.com'
                        className='w-full'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='subject' className='text-sm font-medium'>
                        Subject
                      </label>
                      <Input
                        id='subject'
                        placeholder="What's this about?"
                        className='w-full'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label htmlFor='message' className='text-sm font-medium'>
                        Message
                      </label>
                      <Textarea
                        id='message'
                        rows={5}
                        placeholder='Tell me about your project...'
                        className='w-full resize-none'
                      />
                    </div>

                    <Button type='submit' className='w-full' size='lg'>
                      <Send className='w-4 h-4 mr-2' />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating CV Download Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className='fixed bottom-8 right-8 z-40 hidden md:block'
      >
        <Button
          size='lg'
          className='rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group'
          asChild
        >
          <a href='#' download>
            <Download className='w-5 h-5 mr-2 group-hover:animate-bounce' />
            Download CV
          </a>
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className='py-8 border-t bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-muted-foreground'>
              © 2025 Arnold Agura. All rights reserved.
            </p>
            <p className='text-sm text-muted-foreground'>
              Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
