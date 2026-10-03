import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, MapPin,
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb,
  Fan, BatteryCharging, Search, Shield, Power,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { servicesBySlug } from '@/data/services';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { serviceSchema, faqSchema, localBusinessSchema } from '@/data/schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb,
  Fan, BatteryCharging, Search, Shield, Power,
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? servicesBySlug[slug] : null;

  if (!service) {
    return null;
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`${site.domain}/${service.slug}`}
        ogImage={service.heroImage}
        schema={[localBusinessSchema, serviceSchema(service.slug), faqSchema(service.faqs)].filter(Boolean)}
      />

      <PageHero
        title={service.h1}
        subtitle={service.intro}
        image={service.heroImage}
        alt={service.heroAlt}
        breadcrumb={`Denver, CO > Services > ${service.shortTitle}`}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {service.overview.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg mb-4">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Benefits</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Our {service.shortTitle} Service</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ff9500]">
                  <CheckCircle2 className="h-5 w-5 text-[#0a0e1a]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-[#0a0e1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ffd700] uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-[#111827] border border-gray-800 p-6">
                <div className="text-4xl font-bold text-[#ffd700]/30 mb-2">{i + 1}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Service Details</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{service.shortTitle} in Denver, CO</h2>
          </div>
          <div className="space-y-12">
            {service.details.map((d) => (
              <div key={d.heading}>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{d.heading}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Project Images</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${service.shortTitle} in Denver?`}
        subtitle={`Call us at ${site.phone} to schedule your ${service.shortTitle.toLowerCase()} service. We're ready to help.`}
      />

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{service.shortTitle} FAQs</h2>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Contextual Related Services — prevents keyword cannibalization */}
      {service.relatedServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Related Services</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">You Might Also Need</h2>
            </div>
            <div className="space-y-3">
              {service.relatedServices.map((rs) => {
                const relatedService = services.find((s) => s.slug === rs.slug);
                if (!relatedService) return null;
                const Icon = iconMap[relatedService.icon] || Zap;
                return (
                  <Link
                    key={rs.slug}
                    to={`/${rs.slug}`}
                    className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 hover:border-[#ffd700]/40 hover:shadow-lg transition-all group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a0e1a] shrink-0 mt-0.5 group-hover:bg-gradient-to-br group-hover:from-[#ffd700] group-hover:to-[#ff9500] transition-all">
                      <Icon className="h-5 w-5 text-[#ffd700] group-hover:text-[#0a0e1a] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 group-hover:text-[#ff9500] transition-colors">
                        {relatedService.shortTitle}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{rs.context}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#ff9500] transition-colors shrink-0 mt-1" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Other Electrical Services in Denver</h2>
            <p className="text-gray-600 mt-2">Explore our full range of residential electrical services.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-[#ffd700]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a0e1a] shrink-0">
                    <Icon className="h-5 w-5 text-[#ffd700]" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-[#ff9500] transition-colors">{s.shortTitle}</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-gray-400 group-hover:text-[#ff9500] transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
