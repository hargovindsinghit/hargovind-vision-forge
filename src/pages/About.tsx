
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Moon, Sun, Menu, X } from 'lucide-react';

const About = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen font-didot ${isDark ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hargovind</span>
              <span className="text-cyan-400"> Corporation</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</Link>
              <Link to="/about" className="text-cyan-400">About</Link>
              <Link to="/services" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Services</Link>
              <Link to="/case-studies" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Case Studies</Link>
              <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-light mb-6 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>
            About <span className="text-cyan-400">Hargovind Corporation</span>
          </h1>
          <p className={`text-xl md:text-2xl font-light ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            We are pioneers in next-generation technology, dedicated to creating innovative solutions that transform industries and improve lives.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Target className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className={`text-2xl font-light mb-4 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>Our Mission</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-light leading-relaxed`}>
                To develop and deploy cutting-edge technology solutions that solve complex challenges across multiple industries, empowering businesses and individuals to achieve more.
              </p>
            </div>
            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Eye className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className={`text-2xl font-light mb-4 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>Our Vision</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-light leading-relaxed`}>
                To be the global leader in technological innovation, creating a future where AI, robotics, XR, and biotechnology seamlessly integrate to enhance human potential.
              </p>
            </div>
            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Award className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className={`text-2xl font-light mb-4 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>Our Values</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} font-light leading-relaxed`}>
                Innovation, integrity, collaboration, and excellence drive everything we do. We believe in ethical technology development and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-16 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-light text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", expertise: "AI & Machine Learning" },
              { name: "Marcus Rodriguez", role: "CTO", expertise: "Robotics & Systems" },
              { name: "Dr. Priya Patel", role: "Head of Biotech", expertise: "Biotechnology & Research" }
            ].map((member, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} text-center`}>
                <div className={`w-24 h-24 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} mx-auto mb-4`}></div>
                <h3 className={`text-xl font-light mb-2 ${isDark ? 'text-white' : 'text-gray-900'} tracking-wide`}>{member.name}</h3>
                <p className="text-cyan-400 mb-2 font-light">{member.role}</p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-light`}>{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className={isDark ? 'text-white' : 'text-gray-900'}>Hargovind</span>
                <span className="text-cyan-400"> Corporation</span>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Building tomorrow's technology, today.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About Us</Link></li>
                <li><Link to="/services" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Services</Link></li>
                <li><Link to="/case-studies" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h3>
              <ul className="space-y-2">
                <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>info@hargovinc.com</li>
                <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>LinkedIn</a>
                <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Twitter</a>
              </div>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              © 2024 Hargovind Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
