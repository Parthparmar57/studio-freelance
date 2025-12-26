import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-light-50 text-light-900">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-light-50/95 backdrop-blur-md shadow-lg border-b border-light-200' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <Camera className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                Offtbeat Studio
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === item.href ? 'text-primary-500' : 'text-light-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary-500 text-light-50 px-6 py-2 rounded-full font-semibold hover:bg-primary-400 transition-colors"
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-light-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-light-100 border-t border-light-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === item.href ? 'text-primary-500' : 'text-light-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full bg-primary-500 text-light-50 px-6 py-2 rounded-full font-semibold hover:bg-primary-400 transition-colors text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-light-100 border-t border-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Camera className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-bold">Offtbeat Studio</span>
              </div>
              <p className="text-light-600 text-sm">
                Turning moments into timeless stories through creative photography and cinematic videography.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-light-600">
                <li><Link to="/services/wedding" className="hover:text-primary-500 transition-colors">Wedding Shoots</Link></li>
                <li><Link to="/services/pre-wedding" className="hover:text-primary-500 transition-colors">Pre-Wedding Shoots</Link></li>
                <li><Link to="/services/birthday" className="hover:text-primary-500 transition-colors">Birthday Shoots</Link></li>
                <li><Link to="/services/maternity" className="hover:text-primary-500 transition-colors">Maternity Shoots</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-light-600">
                <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-primary-500 transition-colors">Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-primary-500 transition-colors">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-primary-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-light-600">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span>hello@offtbeatstudio.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary-500 mt-1" />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-light-200 mt-8 pt-8 text-center text-sm text-light-600">
            <p>&copy; 2024 Offtbeat Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
