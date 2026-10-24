import { Star, MessageSquareQuote, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { site } from '@/data/site';
import { testimonials } from '@/data/content';
import { localBusinessSchema } from '@/data/schema';

export default function ReviewsPage() {
  const reviewsSchema = {
    ...localBusinessSchema,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(testimonials.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
      },
      reviewBody: t.text,
    })),
  };

  return (
    <>
      <SEO
        title="Customer Reviews | Brightwork Electrical Services"
        description="Read verified customer reviews for Brightwork Electrical Services. Homeowners across Denver, Boulder, and Northern Colorado trust us for quality electrical work."
        canonical={`${site.domain}/reviews`}
        schema={[reviewsSchema]}
      />

      <section className="relative overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Customer reviews for Brightwork Electrical Services"
            className="h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-[#0a0e1a]/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 px-4 py-1.5 mb-6">
            <Star className="h-4 w-4 text-[#ffd700]" fill="currentColor" />
            <span className="text-sm text-[#ffd700] font-medium">Verified Homeowner Feedback</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Customer Reviews & Experiences
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            See what Denver Metro and Northern Colorado homeowners have to say about our electrical repair, panel upgrade, and wiring services.
          </p>
        </div>
      </section>

      {/* Reviews Summary Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-[#ffd700]" fill="currentColor" />
                ))}
              </div>
              <p className="text-3xl font-extrabold text-gray-900">5.0 Out of 5.0</p>
              <p className="text-sm text-gray-500 mt-1">Based on verified customer reviews</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-gray-200 py-4 md:py-0 md:px-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Upfront, Honest Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Licensed & Code-Compliant Work</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Clean & Punctual Service</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href={site.mapsEmbed}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-6 py-3.5 text-sm font-bold text-[#0a0e1a] hover:shadow-xl transition-all hover:scale-105"
              >
                Review Us on Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#ffd700]" fill="currentColor" />
                      ))}
                    </div>
                    <MessageSquareQuote className="h-6 w-6 text-gray-300" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience 5-Star Electrical Service Today"
        subtitle={`Call ${site.phone} to speak directly with an electrician or schedule your service in Denver and Northern Colorado.`}
      />
    </>
  );
}
