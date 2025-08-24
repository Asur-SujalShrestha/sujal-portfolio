import React, { useState, useEffect } from 'react';
import "../src/App.css";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Database, Server, Globe, Award, Briefcase, GraduationCap, User, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-400">Sujal Shrestha</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Sujal Shrestha
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300">Full Stack Java Developer</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Enthusiastic graduate with solid foundation in Object-Oriented Programming and 
                  full-stack development. Passionate about solving real-world problems with efficient, clean code.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
                <a href='./public/Sujal_Shrestha.pdf' className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/sujal-shrestha-b79a90281/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Asur-SujalShrestha" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:shresthasuja519@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <img 
                      src="./public/Sujal_portfolio.jpg"
                      alt="Sujal Shrestha"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <ChevronDown 
              size={32} 
              className="text-gray-400 animate-bounce cursor-pointer mx-auto"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in Java Spring Boot and modern frontend technologies. 
                My journey in software development is driven by a love for creating efficient, scalable solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in building web applications during my internship at Sona Consolidate Pvt. Ltd., 
                I've developed strong skills in both backend and frontend development, ensuring seamless integration and optimal user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
                  <div className="text-gray-400">AWS Certifications</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <span>Putalisadak, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <span>+977 9827732079</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20} />
                <span>shresthasuja519@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-400" size={20} />
                <span>Bachelor in Computing Honours (2022-2025)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Full Stack Intern</h3>
                  <p className="text-lg text-gray-300">Sona Consolidate Pvt. Ltd.</p>
                </div>
                <span className="text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">July 2024 - Oct 2024</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Integrated REST APIs and displayed dynamic data using React and Angular</li>
                <li>• Supported end-to-end page construction and ensured frontend-backend integration</li>
                <li>• Assisted in development and optimization of travel and ticket booking web application</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-400">Bachelor in Computing Honours</h3>
                  <p className="text-lg text-gray-300">Islington College</p>
                </div>
                <span className="text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">Nov 2022 - June 2025</span>
              </div>
              <p className="text-gray-300">
                Comprehensive study in Object-Oriented Programming, full-stack development, and software engineering principles.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-400">+2 Level in Science</h3>
                  <p className="text-lg text-gray-300">Capital College (CCRC)</p>
                </div>
                <span className="text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">2020 - 2022</span>
              </div>
              <p className="text-gray-300">
                Strong foundation in mathematics and science, preparing for computer science studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Server size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Online Learning & Collaboration Platform</h3>
                <p className="text-gray-400 mb-4">
                  Full-stack platform similar to Microsoft Teams with user authentication, classroom management, 
                  and real-time chat using Spring Boot and React.js.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Spring Boot</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">React.js</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">WebSockets</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">PostgreSQL</span>
                </div>
                <a target='_blank' href='https://github.com/Asur-SujalShrestha/Online-Learning-and-Collaboration-Platform.git' className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                <Globe size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Online Medical Appointment System</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive medical appointment booking system with patient management, 
                  doctor scheduling, and secure authentication using Spring Boot and React.js.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">Spring MicroServices</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">React.js</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">JWT</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-sm">WebSockets</span>
                </div>
                <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Food Ordering E-commerce System</h3>
                <p className="text-gray-400 mb-4">
                  Dynamic food ordering platform with shopping cart, payment integration, 
                  and order management using Spring Boot and React.js.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-sm">Spring Boot</span>
                  <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-sm">React.js</span>
                  <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-sm">Khalti API</span>
                  <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-sm">PostgreSQL</span>
                </div>
                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <Database size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Laptop E-commerce Website</h3>
                <p className="text-gray-400 mb-4">
                  Full-featured laptop selling platform with product catalog, user authentication, 
                  and order tracking using Java JEE and MySQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">Java JEE</span>
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">JSP</span>
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">MySQL</span>
                  <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">Servlets</span>
                </div>
                <a href='https://github.com/Asur-SujalShrestha/Dynamic-e-commerce-Website.git' target='_blank' className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                <Briefcase size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Banking Application</h3>
                <p className="text-gray-400 mb-4">
                  Desktop banking application with user registration, debit/credit transactions, 
                  and transaction history using Java Swing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded text-sm">Java Swing</span>
                  <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded text-sm">OOP</span>
                  <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded text-sm">ArrayList</span>
                </div>
                <a href='https://github.com/Asur-SujalShrestha/Bank-Application.git' target='_blank' className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
                <Globe size={48} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sona Travels Booking System</h3>
                <p className="text-gray-400 mb-4">
                  Travel and ticket booking web application with responsive design, 
                  API integration, and smooth user experience using Angular and React.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-600/20 text-teal-400 px-2 py-1 rounded text-sm">Angular</span>
                  <span className="bg-teal-600/20 text-teal-400 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-teal-600/20 text-teal-400 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-teal-600/20 text-teal-400 px-2 py-1 rounded text-sm">REST API</span>
                </div>
                <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                <Code className="text-blue-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="space-y-2 text-gray-300">
                  <div>React.js</div>
                  <div>Angular</div>
                  <div>JavaScript</div>
                  <div>HTML5/CSS3</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                <Server className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Java</div>
                  <div>Spring Boot</div>
                  <div>Java JEE</div>
                  <div>Python</div>
                  <div>Node.js</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                <Database className="text-purple-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Database</h3>
                <div className="space-y-2 text-gray-300">
                  <div>MySQL</div>
                  <div>PostgreSQL</div>
                  <div>Oracle</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
                <Globe className="text-orange-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Git/GitHub</div>
                  <div>REST APIs</div>
                  <div>WebSockets</div>
                  <div>JWT</div>
                  <div>AWS</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            <div className="bg-gray-900/50 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-900/70 transition-colors">
              <Award className="text-blue-400 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Chat App with Spring Boot</h3>
                <p className="text-gray-400">Advanced certification in building real-time applications using Spring Boot and WebSockets</p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-900/70 transition-colors">
              <Award className="text-orange-400 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-xl font-bold mb-2">AWS Cloud Foundation</h3>
                <p className="text-gray-400">Fundamental knowledge of AWS cloud services and architecture</p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-900/70 transition-colors">
              <Award className="text-green-400 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-xl font-bold mb-2">AWS Cloud Data Engineering</h3>
                <p className="text-gray-400">Specialized certification in data engineering and analytics on AWS platform</p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-900/70 transition-colors">
              <Award className="text-purple-400 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-xl font-bold mb-2">AWS Cloud Machine Learning</h3>
                <p className="text-gray-400">Advanced certification in machine learning services and implementation on AWS</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
              <Mail className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">shresthasuja519@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
              <Phone className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+977 9827732079</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
              <MapPin className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">Putalisadak, Kathmandu</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8">
              Ready to start your next project? Send me a message and let's create something amazing together!
            </p>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2024 Sujal Shrestha. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/sujal-shrestha-b79a90281/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Asur-SujalShrestha" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:shresthasuja519@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;