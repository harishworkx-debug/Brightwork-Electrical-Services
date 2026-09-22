import { useParams, Link } from 'react-router-dom';
import {
  Phone, MapPin, ArrowRight, Zap,
  Home, Wrench, Lightbulb, Cable, Plug, Fan, BatteryCharging,
  Shield, Power, Search, ToggleLeft,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { locationsBySlug } from '@/data/locations';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { localBusinessSchema } from '@/data/schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb,
  Fan, BatteryCharging, Search, Shield, Power,
};

const cityImage = 'https://images.pexels.com/photos/13633732/pexels-photo-13633732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function LocationPage() {
  const { slug } = useParams();
  const location = slug ? locationsBySlug[slug] : null;

  if (!location) {
    return null;
  }

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8);

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`${site.domain}/${location.slug}`}
        ogImage={cityImage}
        schema={[localBusinessSchema]}
      />

      <PageHero
        title={location.h1}
        subtitle={location.intro}
        image={cityImage}
        alt={`Electrician serving ${location.fullName}`}
        breadcrumb={`Denver, CO > Service Areas > ${location.city}`}
      />

      {/* Description */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {location.description.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-lg mb-4">{p}</p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Neighborhoods We Serve in {location.city}</h3>
              <div className="flex flex-wrap gap-2">
                {location.neighborhoods.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1 rounded-lg bg-white border border-gray-200 px-3 py-1.5 text-xs text-gray-700">
                    <MapPin className="h-3 w-3 text-[#ff9500]" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">ZIP Codes We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {location.zipCodes.map((z) => (
                  <span key={z} className="rounded-lg bg-white border border-gray-200 px-3 py-1.5 text-xs text-gray-700 font-mono">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available in This Area */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Electrical Services in {location.city}</h2>
            <p className="text-gray-600 text-lg mt-3">We provide the full range of residential electrical services to homeowners in {location.city}, CO.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="group rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl hover:border-[#ffd700]/40 transition-all hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#ffd700] group-hover:to-[#ff9500] transition-all">
                    <Icon className="h-6 w-6 text-[#ffd700] group-hover:text-[#0a0e1a] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ff9500] transition-colors">{s.shortTitle}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">Available in {location.city}, CO</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff9500] group-hover:gap-2 transition-all">
                    {s.shortTitle} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Electrician in ${location.city}, CO`}
        subtitle={`Call us at ${site.phone} to schedule electrical service at your ${location.city} home. We serve all neighborhoods in ${location.city} and the surrounding area.`}
      />

      {/* Other Service Areas */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Other Service Areas Near {location.city}</h2>
            <p className="text-gray-600 mt-2">We serve homeowners throughout the Denver metro area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                to={`/${l.slug}`}
                className="flex items-center gap-2 rounded-xl border border-gray-200 p-3 hover:border-[#ffd700]/40 hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-[#ff9500] shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff9500] transition-colors">{l.city}, {l.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
