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
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      company: 'Frontline Accounting (CBX - UK)',
      role: 'Frontend Developer (Nuxt)',
      period: 'Nov 2023 - Present',
      location: 'Remote',
      current: true,
      description: 'Building client-facing web applications with Nuxt.js and TypeScript for professional services firms.',
      achievements: [
        'Built client onboarding platform using Nuxt TypeScript and Pinia for state management',
        'Developed automated multi-step onboarding workflows with comprehensive form validation',
        'Created dynamic KYC and Risk assessment forms for individual and business clients',
        'Implemented dynamic theme system enabling custom branding per organization',
        'Collaborated with clients on UI/UX improvements and backend teams on API integration'
      ],
      tech: ['Nuxt 3', 'TypeScript', 'Pinia', 'Vue.js', 'REST APIs']
    },
    {
      company: 'Azensys (NotaryPro)',
      role: 'Frontend Web Developer (React)',
      period: 'Nov 2023 - May 2024',
      location: 'Remote',
      current: false,
      description: 'Developed legal appointment scheduling and document management systems for notary services.',
      achievements: [
        'Built comprehensive intake forms for scheduling appointments with lawyers',
        'Developed and maintained tenant site for appointment and document management',
        'Maintained critical features including digital signing and scheduling systems',
        'Translated Figma designs to pixel-perfect, interactive components',
        'Integrated RESTful APIs for document management and real-time appointment synchronization'
      ],
      tech: ['React', 'REST APIs', 'Figma', 'JavaScript', 'Real-time Systems']
    },
    {
      company: 'Brankas',
      role: 'Frontend Web Developer (Vue 3, React)',
      period: 'Nov 2021 - Apr 2023',
      location: 'Remote',
      current: false,
      description: 'Worked on core banking solutions and fintech applications for seamless financial integrations.',
      achievements: [
        'Successfully refactored Core Banking project from Vue 2 to Vue 3',
        'Developed mobile-first responsive web application for bank account binding',
        'Enabled seamless integration with third-party financial services',
        'Collaborated with UI/UX designers to optimize user experience for banking customers'
      ],
      tech: ['Vue 3', 'Vue 2', 'React', 'Mobile-First Design', 'Banking APIs', 'Fintech']
    },
    {
      company: 'Emlo Technologies',
      role: 'Web Developer (Angular, React & Flutter)',
      period: 'Oct 2020 - Nov 2021',
      location: 'Remote',
      current: false,
      description: 'Developed various fintech applications and mentored junior developers in modern web technologies.',
      achievements: [
        'Built Money Changer, Remittance, Accounting, and PoS Retail web applications',
        'Created marketing sites using React for multiple company applications',
        'Developed mobile application for live FX rates using Flutter',
        'Mentored junior developers during OJT by reviewing pull requests',
        'Contributed to frontend integration using Angular 8 TypeScript and backend C#'
      ],
      tech: ['Angular 8', 'React', 'Flutter', 'C#', 'TypeScript']
    },
    {
      company: 'DGV SmartStart',
      role: 'Software Developer (Angular & C#)',
      period: 'Oct 2017 - Oct 2020',
      location: 'Cebu City, Philippines',
      current: false,
      description: 'Developed enterprise solutions including Point-of-sale and ERP systems for pharmacy and cannabis dispensary.',
      achievements: [
        'Built enterprise Point-of-sale and real-time inventory management system',
        'Worked on ERP system from requirements gathering to deployment and maintenance',
        'Developed telehealth web app using Socket.io for messaging and conference calls',
        'Helped develop Backend API using Node.js for cloud-based dental care software',
        'Engaged directly with clients to clarify requirements and implement fixes'
      ],
      tech: ['Angular 8', 'C#', 'Node.js', 'Socket.io', 'Ionic', 'TypeScript']
    }
  ];

  const skillCategories = {
    'Frontend Frameworks': [
      { name: 'Nuxt 3', level: 95, experience: '1+ years' },
      { name: 'Vue.js', level: 90, experience: '4+ years' },
      { name: 'React', level: 85, experience: '3+ years' },
      { name: 'Angular', level: 80, experience: '3+ years' }
    ],
    'Languages & Core': [
      { name: 'JavaScript/TypeScript', level: 95, experience: '6+ years' },
      { name: 'HTML5/CSS3', level: 90, experience: '6+ years' },
      { name: 'Responsive Design', level: 90, experience: '6+ years' }
    ],
    'Backend & Database': [
      { name: 'C#', level: 75, experience: '3 years' },
      { name: 'PHP Laravel', level: 70, experience: '2 years' },
      { name: 'Node.js', level: 65, experience: '1 year' },
      { name: 'MS SQL/MySQL', level: 70, experience: '3+ years' }
    ],
    'Mobile & Tools': [
      { name: 'Flutter', level: 60, experience: '1 year' },
      { name: 'Ionic', level: 70, experience: '2 years' },
      { name: 'Git/CI/CD', level: 85, experience: '6+ years' }
    ]
  };

  const strengths = [
    {
      icon: Code,
      title: 'Technical Leadership',
      description: 'Mentoring developers and conducting thorough code reviews'
    },
    {
      icon: Monitor,
      title: 'Full-Stack Understanding',
      description: 'Backend knowledge enabling seamless integration'
    },
    {
      icon: Globe,
      title: 'Client Communication',
      description: 'Direct client interaction ensuring alignment'
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Quick adaptation to new technologies'
    }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
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
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-background text-foreground' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
              : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Arnold Agura
            </motion.div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <Button
                      variant={activeSection === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className={activeSection === item.id ? "bg-primary" : ""}
                    >
                      {item.label}
                    </Button>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  {/* <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="ml-2"
                  >
                    {theme === 'dark' ? '🌞' : '🌙'}
                  </Button> */}
                  <ModeToggle />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
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
                theme === 'dark' ? 'border-border bg-background' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for Remote Work
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Frontend Developer
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & UI Engineer
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-muted-foreground">
                6+ years crafting exceptional user experiences with modern JavaScript frameworks. 
                Specialized in Nuxt 3, Vue.js, and React with a passion for creating seamless 
                digital experiences.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                
                <Button size="lg" variant="outline" onClick={() => scrollToSection('experience')}>
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Work
                </Button>
                
                <Button size="lg" variant="ghost">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/arnoldagura" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/arnoldagura" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center aspect-square">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Monitor className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Building the Future</h3>
                      <p className="text-muted-foreground">One Component at a Time</p>
                      
                      <Separator className="my-6" />
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">6+</div>
                          <div className="text-muted-foreground">Years Exp</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">50+</div>
                          <div className="text-muted-foreground">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl font-bold mb-4">Passionate About Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating exceptional digital experiences through clean code and modern design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Professional Journey</CardTitle>
                  <CardDescription>Frontend Developer with 6+ Years of Experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    With over 6 years of experience in frontend development, I specialize in creating 
                    exceptional user experiences using modern JavaScript frameworks. My expertise 
                    spans from building scalable client-facing applications to dynamic user 
                    onboarding systems for banking and fintech companies.
                  </p>
                  
                  <p className="text-muted-foreground">
                    I'm passionate about staying current with the latest technologies and best 
                    practices, recently mastering Nuxt 3 and TypeScript while maintaining strong 
                    expertise in React and Vue.js ecosystems.
                  </p>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Cebu City, Central Visayas, Philippines</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Available for remote opportunities</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span>Working with international teams</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <strength.icon className="w-10 h-10 mb-4 text-blue-600" />
                      <h4 className="font-semibold mb-2">{strength.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {strength.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Career</Badge>
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building exceptional products across fintech, banking, and legal tech
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle>{exp.role}</CardTitle>
                          {exp.current && (
                            <Badge variant="default">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-medium text-blue-600">
                          {exp.company}
                        </CardDescription>
                      </div>
                      
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Expertise</Badge>
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set across modern web development stack
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="Frontend Frameworks" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                {Object.keys(skillCategories).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(skillCategories).map(([category, skills]) => (
                <TabsContent key={category} value={category}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        {skills.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="outline">{skill.experience}</Badge>
                            </div>
                            
                            <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/10">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Science: Information Technology</h4>
                    <p className="text-blue-600 font-medium">University of San Jose - Recoletos</p>
                    <p className="text-sm text-muted-foreground">Magallanes St. Cebu City, Philippines</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">Contact</Badge>
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always open to discussing new opportunities 
              and exciting projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to reach out for opportunities or just to say hi!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-600/10">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:arnold.agura@email.com"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        arnold.agura@email.com
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-600/10">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Cebu City, Central Visayas, Philippines</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-600/10">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Availability</p>
                      <p className="font-medium">Open for remote opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/arnoldagura" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://linkedin.com/in/arnoldagura" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
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
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Arnold Agura. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}