import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Clock } from 'lucide-react';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-[#070a14] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffd700] to-[#ff9500]">
                <Zap className="h-6 w-6 text-[#0a0e1a]" fill="#0a0e1a" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">Brightwork</span>
                <span className="text-xs text-[#ffd700] font-medium tracking-wider uppercase">
                  Electrical Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Professional residential electrical services for Denver, CO and the surrounding metro area. Licensed, insured, and committed to safe, quality work.
            </p>
            <div className="space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 text-sm hover:text-[#ffd700] transition-colors">
                <Phone className="h-4 w-4 text-[#ffd700]" fill="currentColor" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm hover:text-[#ffd700] transition-colors">
                <Mail className="h-4 w-4 text-[#ffd700]" />
                {site.email}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-[#ffd700] mt-0.5 shrink-0" />
                <span>{site.address.full}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm hover:text-[#ffd700] transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">More Services</h3>
            <ul className="space-y-2.5">
              {services.slice(7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm hover:text-[#ffd700] transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Service Areas</h3>
            <ul className="space-y-2.5">
              {locations.slice(0, 8).map((l) => (
                <li key={l.slug}>
                  <Link to={`/${l.slug}`} className="text-sm hover:text-[#ffd700] transition-colors">
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-3">Hours</h3>
            <div className="flex items-start gap-2 text-xs">
              <Clock className="h-3 w-3 text-[#ffd700] mt-0.5" />
              <div>
                <p>Mon–Fri: 7:00 AM – 7:00 PM</p>
                <p>Sat: 8:00 AM – 5:00 PM</p>
                <p>Sun: Emergency Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-gray-500 hover:text-[#ffd700] transition-colors">Contact</Link>
            <Link to="/about" className="text-xs text-gray-500 hover:text-[#ffd700] transition-colors">About</Link>
            <Link to="/reviews" className="text-xs text-gray-500 hover:text-[#ffd700] transition-colors">Reviews</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
