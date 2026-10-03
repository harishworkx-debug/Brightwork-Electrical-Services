import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-[#0a0e1a]'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffd700] to-[#ff9500] transition-transform group-hover:scale-110">
                <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-[#0a0e1a]" fill="#0a0e1a" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base lg:text-lg font-bold text-white tracking-tight">
                  Brightwork
                </span>
                <span className="text-[10px] lg:text-xs text-[#ffd700] font-medium tracking-wider uppercase">
                  Electrical Services
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-[600px] bg-[#111827] border border-gray-700/50 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        className="px-3 py-2 text-sm text-gray-300 hover:text-[#ffd700] hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setAreasDropdown(true)}
                onMouseLeave={() => setAreasDropdown(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Service Areas
                  <ChevronDown className="h-4 w-4" />
                </button>
                {areasDropdown && (
                  <div className="absolute top-full left-0 w-[480px] bg-[#111827] border border-gray-700/50 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-1 max-h-[400px] overflow-y-auto">
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/${l.slug}`}
                        className="px-3 py-2 text-sm text-gray-300 hover:text-[#ffd700] hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {l.city}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/reviews"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={site.phoneHref}
                className="hidden sm:flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-4 lg:px-5 py-2.5 text-sm font-bold text-[#0a0e1a] hover:shadow-lg hover:shadow-[#ffd700]/30 transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4" fill="currentColor" />
                <span className="hidden lg:inline">Call Now</span>
                <span className="lg:hidden">Call</span>
              </a>

              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0e1a] border-t border-gray-800 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <Link to="/" className="block px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium">Home</Link>

              <div className="px-3 py-2 text-xs uppercase text-[#ffd700] font-semibold tracking-wider">Services</div>
              <div className="ml-2 space-y-0.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>

              <div className="px-3 py-2 pt-4 text-xs uppercase text-[#ffd700] font-semibold tracking-wider">Service Areas</div>
              <div className="ml-2 space-y-0.5 max-h-60 overflow-y-auto">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/${l.slug}`}
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {l.city}
                  </Link>
                ))}
              </div>

              <Link to="/about" className="block px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium mt-3">About</Link>
              <Link to="/reviews" className="block px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium">Reviews</Link>
              <Link to="/contact" className="block px-3 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium">Contact</Link>

              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-5 py-3 text-sm font-bold text-[#0a0e1a] mt-3"
              >
                <Phone className="h-4 w-4" fill="currentColor" />
                Call {site.phone}
              </a>
            </div>
          </div>
        )}
      </header>
      <div className="h-16 lg:h-20" />
    </>
  );
}
