'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Menu, X, Users, Lock, Clock, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const NalonSecuritySite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
  emailjs.init('A11mUvV07Ty5XImjb');
}, []);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
      title: "Tech-Integrated Security Solutions",
      description: "Building safer communities through innovative technology and human-centered strategies"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop",
      title: "Intelligence & Innovation",
      description: "Fusing AI, IoT, and data analytics with traditional security for smarter protection"
    },
    {
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&h=900&fit=crop",
      title: "Community Empowerment",
      description: "Transforming lives through our Community Anchor Programme while enhancing security"
    }
  ];

  const services = [
    {
      title: 'Community Security Management',
      description: 'Recruit, train, and deploy youths as safety agents via the Community Anchor Programme to enhance local safety and employment',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=900&fit=crop'
    },
    {
      title: 'IP Surveillance Solutions',
      description: 'Remote CCTV monitoring with real-time alerts and analytics for proactive threat detection',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop'
    },
    {
      title: 'Private Investigations',
      description: 'Gather, analyze, and evaluate information for discreet investigations and conflict resolution',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop'
    },
    {
      title: 'Intelligence Analysis Training',
      description: 'Tailored programs for executives on threat assessment and strategic intelligence',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop'
    },
    {
      title: 'VIP & Close Protection',
      description: 'Personalized security for high-profile individuals using tech-enhanced tactics',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1600&h=900&fit=crop'
    },
    {
      title: 'Event & Conference Security',
      description: 'Full planning, crowd control, and surveillance for safe events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop'
    },
    {
      title: 'Security Guard Services',
      description: 'Manned guarding in partnership with the Civilian Joint Task Force for on-site protection',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop'
    },
    {
      title: 'IT Solutions & Cybersecurity',
      description: 'Custom software, website development, social media management, and cybersecurity services',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=900&fit=crop'
    },
    {
      title: 'Research & Innovation',
      description: 'Continuous R&D to develop new security protocols, tools, and strategies for evolving digital risks',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop'
    }
  ];

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mounted, slides.length]);

  useEffect(() => {
    if (!mounted) return;
    const serviceTimer = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(serviceTimer);
  }, [mounted, services.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextServiceSlide = () => setCurrentServiceSlide((prev) => (prev + 1) % services.length);
  const prevServiceSlide = () => setCurrentServiceSlide((prev) => (prev - 1 + services.length) % services.length);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const result = await emailjs.send(
      'service_scadbfv',  // Get from EmailJS dashboard
      'template_uyprv9h', // Get from EmailJS dashboard
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'info@nalonservices.com',
      }
    );
    
    if (result.text === 'OK') {
      alert('Thank you for your inquiry! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
  }
};

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
          <div className="text-xl font-semibold text-gray-700">Loading Nalon Security...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-blue-400" />
              <div>
                <div className="text-2xl font-bold text-white">NALON</div>
                <div className="text-xs text-gray-300">Integrated Services</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                    activeSection === section
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-gray-300 hover:text-white uppercase tracking-wider"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-navy-900/50" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform -translate-x-8 absolute'
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                  >
                    Request a Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-blue-400' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-100 via-gray-100 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Nalon Integrated Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                At Nalon Integrated Services, we are more than a security firm—we're your trusted partner in building safer communities through innovative technology and human-centered strategies. Founded on the United Nations human security framework, we blend cutting-edge IT solutions with expert security services to deliver comprehensive protection tailored to modern challenges. Our mission is to safeguard lives, assets, and peace of mind by integrating advanced tech with community-focused initiatives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                With a proven record in private investigations, conflict resolution, and surveillance, we empower businesses, governments, and individuals to thrive in secure environments. Our research-driven approach ensures we're always ahead of emerging threats, while our commitment to social impact through programs like the Community Anchor Programme, transforms unemployed youths into skilled safety agents, fostering community resilience from the ground up.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Whether you're securing a high-profile event, monitoring remote assets, or seeking bespoke IT security tools, Nalon Integrated Services is your all-in-one solution for intelligent, reliable protection.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision & Mission</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Vision</h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                 To be the foremost tech-based security services provider, leading the industry with innovative, integrated solutions that set new standards for safety and resilience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Mission</h4>
                <p className="text-gray-700 leading-relaxed text-justify">  
                To safeguard lives, assets, and communities by fusing cutting-edge technology with human expertise, fostering empowerment, intelligence, and peace of mind in an ever-evolving threat landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Choose Nalon?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900">Tech-Integrated Excellence</span>
                  <p className="text-gray-700">We fuse AI, IoT, and data analytics with traditional security for smarter, faster responses</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900">Community Impact</span>
                  <p className="text-gray-700">Our Community Anchor Programme creates lasting positive change and employment</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900">Proven Expertise</span>
                  <p className="text-gray-700">Years of handling investigations, trainings, and partnerships ensure reliable results</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900">Client-Centric Approach</span>
                  <p className="text-gray-700">Tailored solutions that are scalable, affordable, and easy to implement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-300 via-gray-300 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg max-w-3xl mx-auto">
              Comprehensive offerings that integrate cutting-edge technology for efficient, scalable protection
            </p>
          </div>

          <div className="relative">
            {/* Service Slideshow */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentServiceSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevServiceSlide}
                className="bg-slate-700 hover:bg-slate-800 border border-slate-600 p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentServiceSlide ? 'w-8 bg-slate-800' : 'w-2 bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextServiceSlide}
                className="bg-slate-700 hover:bg-slate-800 border border-slate-600 p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">
              Ready to secure your assets? Contact us today for a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+234 701 918 6812</p>
                    {/* <p className="text-gray-300">+234 816 987 4588</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">nalonintegratedservices@gmail.com</p>
                    <p className="text-gray-300"></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Address</h4>
                    <p className="text-gray-300">Abuja, Federal Capital Territory</p>
                    <p className="text-gray-300">Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                <p className="text-gray-300">24/7 Emergency Response Available</p>
                <p className="text-gray-300 mt-2">Office Hours: Mon-Fri, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-xl font-bold text-white">NALON</div>
                <div className="text-xs text-gray-400">Integrated Services</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2025 Nalon Integrated Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      
       <a href="https://wa.me/2347019186812"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </a>
    </div>
    
  );
  
};

export default NalonSecuritySite;