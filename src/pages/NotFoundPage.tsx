import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Home } from 'lucide-react';
import SEO from '@/components/SEO';
import { site } from '@/data/site';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Brightwork Electrical Services"
        description="The page you're looking for doesn't exist. Browse our electrical services in Denver, CO or call us at 303-621-5710."
        canonical={`${site.domain}/404`}
      />
      <section className="bg-[#0a0e1a] min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="text-7xl lg:text-8xl font-bold text-[#ffd700]/20 mb-4">404</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-6 py-3.5 font-bold text-[#0a0e1a] hover:scale-105 transition-transform">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-6 py-3.5 font-bold text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-colors">
              <Phone className="h-5 w-5" fill="currentColor" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
