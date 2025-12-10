'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Menu, X, Users, Lock, Clock } from 'lucide-react';

const NalonSecuritySite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mounted, setMounted] = useState(false);

  // Add this useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
      title: "Elite Security Solutions",
      description: "Protecting what matters most with unwavering vigilance and professionalism"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop",
      title: "24/7 Security Operations",
      description: "Round-the-clock protection for your assets, personnel, and premises"
    },
    {
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&h=900&fit=crop",
      title: "Trusted by Leading Organizations",
      description: "Nigeria's premier private security provider with proven excellence"
    }
  ];

  const teamMembers = [
    { name: 'Adekunle Okonkwo', position: 'Chief Security Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Ngozi Mbanu', position: 'Operations Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { name: 'Ibrahim Yusuf', position: 'Training Coordinator', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
    { name: 'Amaka Nwosu', position: 'Client Relations Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
    { name: 'Chukwudi Eze', position: 'Senior Security Analyst', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { name: 'Fatima Hassan', position: 'Risk Assessment Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'Oluwaseun Adebayo', position: 'Field Operations Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { name: 'Zainab Lawal', position: 'Technology Systems Officer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
    { name: 'Emeka Okafor', position: 'Patrol Unit Supervisor', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
    { name: 'Blessing Okoro', position: 'HR & Compliance Manager', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop' },
    { name: 'Ahmed Bello', position: 'Intelligence Officer', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' },
    { name: 'Chioma Ajayi', position: 'Event Security Coordinator', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
    { name: 'Tunde Bakare', position: 'Tactical Response Leader', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop' },
    { name: 'Kemi Adeyemi', position: 'Corporate Accounts Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Samuel Ojo', position: 'Residential Security Lead', image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop' }
  ];

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const teamTimer = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(teamTimer);
  }, [mounted]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextTeamSlide = () => setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
  const prevTeamSlide = () => setCurrentTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Don't render until mounted on client
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
              {['home', 'about', 'contact'].map((section) => (
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
              {['home', 'about', 'contact'].map((section) => (
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nalon Integrated Services is Nigeria's premier private security provider, dedicated to
                delivering comprehensive security solutions with unmatched professionalism and reliability.
                We understand that security is not just about protection—it's about peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience serving corporate clients, residential communities, and high-profile
                individuals across Nigeria, we have built a reputation for excellence, integrity, and
                unwavering commitment to our clients' safety.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900">Highly Trained Personnel</span>
                    <p className="text-gray-700">Our security officers undergo rigorous training and continuous professional development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900">24/7 Operations</span>
                    <p className="text-gray-700">Round-the-clock monitoring and rapid response capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900">Advanced Technology</span>
                    <p className="text-gray-700">State-of-the-art security systems and monitoring equipment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Security',
                description: 'Comprehensive security solutions for businesses, offices, and commercial facilities',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
              },
              {
                title: 'Residential Protection',
                description: 'Elite security services for estates, gated communities, and private residences',
                image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop'
              },
              {
                title: 'Event Security',
                description: 'Professional crowd management and security for corporate and private events',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-300 via-gray-300 to-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">
              Experienced professionals committed to your safety and security
            </p>
          </div>

          <div className="relative pb-32">
            {/* Team Member Display */}
            <div className="relative flex justify-center items-center" style={{ minHeight: '600px' }}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                    index === currentTeamSlide
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-400 w-full max-w-md">
                    <div className="h-80 overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 text-center bg-gradient-to-b from-white to-slate-100">
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-slate-700 text-xl font-medium mb-4">
                        {member.position}
                      </p>
                      <div className="flex justify-center items-center text-slate-600 text-sm">
                        <Shield className="h-5 w-5 mr-2 text-slate-700" />
                        <span>Nalon Integrated Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <button
                onClick={prevTeamSlide}
                className="bg-slate-700 hover:bg-slate-800 border border-slate-600 p-4 rounded-full transition-colors shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <div className="flex items-center space-x-3">
                <span className="text-slate-900 font-semibold text-lg">
                  {currentTeamSlide + 1} / {teamMembers.length}
                </span>
              </div>

              <button
                onClick={nextTeamSlide}
                className="bg-slate-700 hover:bg-slate-800 border border-slate-600 p-4 rounded-full transition-colors shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-6 flex-wrap max-w-2xl mx-auto">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTeamSlide ? 'w-8 bg-slate-800' : 'w-2 bg-slate-500'
                  }`}
                />
              ))}
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
                    <p className="text-gray-300">+234 (0) XXX XXX XXXX</p>
                    <p className="text-gray-300">+234 (0) XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@nalonservices.com</p>
                    <p className="text-gray-300">operations@nalonservices.com</p>
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
              © 2024 Nalon Integrated Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NalonSecuritySite;