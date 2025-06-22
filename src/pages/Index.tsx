
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Bot, Eye, Dna, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hargovind</span>
              <span className="text-cyan-400"> Corporation</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</Link>
              <Link to="/services" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Services</Link>
              <Link to="/case-studies" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Case Studies</Link>
              <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</Link>
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
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
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Building Tomorrow's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Technology, Today
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Hargovind Corporation develops cutting-edge AI applications, robotics systems, XR experiences, and biotech platforms that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
                See Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={`px-8 py-3 text-lg ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Domains */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Technology Domains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "AI Applications", desc: "Advanced machine learning and neural networks" },
              { icon: Bot, title: "Robotics Systems", desc: "Autonomous and intelligent robotic solutions" },
              { icon: Eye, title: "XR Experiences", desc: "Immersive virtual and augmented reality" },
              { icon: Dna, title: "Biotech Platforms", desc: "Cutting-edge biotechnology innovations" }
            ].map((domain, index) => (
              <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 hover:scale-105 cursor-pointer`}>
                <domain.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{domain.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{domain.desc}</p>
                <div className="mt-4">
                  <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">Learn More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Partner with us to leverage cutting-edge technology and drive innovation in your industry.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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

export default Index;
