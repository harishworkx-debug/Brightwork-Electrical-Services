import { useParams, Link } from 'react-router-dom';
import {
  Phone, MapPin, ArrowRight, Zap, Clock, Car, CalendarCheck,
  Home, Wrench, Lightbulb, Cable, Plug, Fan, BatteryCharging,
  Shield, Power, Search, ToggleLeft, Building2, Hammer, Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { locationsBySlug } from '@/data/locations';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { site } from '@/data/site';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb,
  Fan, BatteryCharging, Search, Shield, Power,
};

/** Generate city-specific LocalBusiness + FAQPage schema */
function locationSchema(location: typeof locations[0]) {
  const schemas = [];

  // LocalBusiness schema specific to this city
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: `${site.domain}/${location.slug}`,
    image: `${site.domain}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: `${location.city}, ${location.state}`,
    },
    description: location.metaDescription,
  });

  // FAQPage schema for this city's unique FAQs
  if (location.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: location.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  return schemas;
}

export default function LocationPage() {
  const { slug } = useParams();
  const location = slug ? locationsBySlug[slug] : null;

  if (!location) {
    return null;
  }

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8);

  // Resolve featured services to actual service data
  const featuredServiceData = location.featuredServices
    .map((fs) => {
      const service = services.find((s) => s.slug === fs.serviceSlug);
      return service ? { service, reason: fs.reason } : null;
    })
    .filter(Boolean) as { service: typeof services[0]; reason: string }[];

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`${site.domain}/${location.slug}`}
        ogImage={location.heroImage}
        schema={locationSchema(location)}
      />

      <PageHero
        title={location.h1}
        subtitle={location.intro}
        image={location.heroImage}
        alt={location.heroAlt}
        breadcrumb={`Denver, CO > Service Areas > ${location.city}`}
      />

      {/* Quick Facts Bar */}
      <section className="bg-[#0a0e1a] border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Car className="h-5 w-5 text-[#ffd700]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">From Denver</p>
                <p className="text-white font-semibold text-sm">~{location.driveMinutes} min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Building2 className="h-5 w-5 text-[#ffd700]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Housing</p>
                <p className="text-white font-semibold text-sm">{location.housingEras}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Clock className="h-5 w-5 text-[#ffd700]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Availability</p>
                <p className="text-white font-semibold text-sm">Same-Day Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <CalendarCheck className="h-5 w-5 text-[#ffd700]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Community</p>
                <p className="text-white font-semibold text-sm">{location.populationNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Description */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Electrical Services Tailored to {location.city} Homes
          </h2>
          {location.description.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">{p}</p>
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

      {/* Local Project Examples — unique per city */}
      {location.localProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Recent Work</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Projects in {location.city}</h2>
              <p className="text-gray-600 text-lg mt-3">
                Examples of electrical work we've completed for {location.city} homeowners.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {location.localProjects.map((project, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl hover:border-[#ffd700]/40 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a] mb-4">
                    <Hammer className="h-6 w-6 text-[#ffd700]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Services — city-specific with relevance reasons */}
      {featuredServiceData.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Top Services</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Most Requested in {location.city}</h2>
              <p className="text-gray-600 text-lg mt-3">
                These services are particularly relevant to {location.city} homeowners based on the area's housing stock and common electrical needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredServiceData.map(({ service, reason }) => {
                const Icon = iconMap[service.icon] || Zap;
                return (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="group rounded-2xl bg-gray-50 border border-gray-200 p-6 hover:shadow-xl hover:border-[#ffd700]/40 transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a] shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#ffd700] group-hover:to-[#ff9500] transition-all">
                        <Icon className="h-6 w-6 text-[#ffd700] group-hover:text-[#0a0e1a] transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#ff9500] transition-colors">
                          {service.shortTitle}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{reason}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff9500] group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Full Service List</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">All Electrical Services in {location.city}</h2>
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

      {/* City-Specific FAQs */}
      {location.faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Common Questions from {location.city} Homeowners
              </h2>
              <p className="text-gray-600 text-lg mt-3">
                Answers to the questions we hear most from homeowners in {location.city}, CO.
              </p>
            </div>
            <FAQAccordion faqs={location.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title={`Electrician in ${location.city}, CO`}
        subtitle={`Call us at ${site.phone} to schedule electrical service at your ${location.city} home. We're approximately ${location.driveMinutes} minutes from ${location.city} and offer same-day appointments for many service calls.`}
      />

      {/* Other Service Areas with city-specific context */}
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
