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
    <div 
      className={`min-h-screen relative ${isDark ? 'dark' : ''} transition-colors duration-300`}
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better readability */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/85' : 'bg-white/90'} backdrop-blur-sm`}></div>
      
      {/* Header */}
      <header className={`fixed w-full z-50 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hargovind</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Corporation</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Home</Link>
              <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>About</Link>
              <Link to="/services" className={`${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Services</Link>
              <Link to="/case-studies" className={`${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Case Studies</Link>
              <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Contact</Link>
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'hover:bg-cyan-500/20' : 'hover:bg-blue-100'} transition-colors`}>
                {isDark ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} /> : <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className={`text-6xl md:text-8xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}>
              Building Tomorrow's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                Technology, Today
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-10 ${isDark ? 'text-gray-200' : 'text-gray-700'} max-w-4xl mx-auto leading-relaxed`}>
              Hargovind Corporation develops cutting-edge AI applications, robotics systems, XR experiences, and biotech platforms that shape the future of human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                See Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={`px-10 py-4 text-lg ${isDark ? 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm' : 'border-blue-400 text-blue-600 hover:bg-blue-50'} transition-all duration-300 hover:scale-105`}>
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Domains */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Technology Domains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "AI Applications", desc: "Advanced machine learning and neural networks", gradient: "from-cyan-500 to-blue-600" },
              { icon: Bot, title: "Robotics Systems", desc: "Autonomous and intelligent robotic solutions", gradient: "from-blue-500 to-purple-600" },
              { icon: Eye, title: "XR Experiences", desc: "Immersive virtual and augmented reality", gradient: "from-purple-500 to-pink-600" },
              { icon: Dna, title: "Biotech Platforms", desc: "Cutting-edge biotechnology innovations", gradient: "from-pink-500 to-red-600" }
            ].map((domain, index) => (
              <div key={index} className={`group p-8 rounded-2xl ${isDark ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-cyan-500/20' : 'bg-white/40 hover:bg-white/60 border border-blue-200'} backdrop-blur-md transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl ${isDark ? 'hover:shadow-cyan-500/20' : 'hover:shadow-blue-500/20'}`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${domain.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{domain.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed mb-6`}>{domain.desc}</p>
                <div className="mt-auto">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${domain.gradient} hover:from-cyan-300 hover:to-blue-400 cursor-pointer font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300 inline-block`}>
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-6 relative ${isDark ? 'bg-gray-800/30' : 'bg-white/30'} backdrop-blur-md`}>
        <div className="container mx-auto text-center relative z-10">
          <h2 className={`text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-gray-200' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
            Partner with us to leverage cutting-edge technology and drive innovation in your industry. The future starts today.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-4 text-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
              Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 relative ${isDark ? 'bg-gray-900/80 border-t border-cyan-500/20' : 'bg-white/80 border-t border-blue-200'} backdrop-blur-md`}>
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
                <li><Link to="/about" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>About Us</Link></li>
                <li><Link to="/services" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Services</Link></li>
                <li><Link to="/case-studies" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Case Studies</Link></li>
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
                <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>LinkedIn</a>
                <a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Twitter</a>
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
