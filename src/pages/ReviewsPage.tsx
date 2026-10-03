import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/content';
import { site } from '@/data/site';

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Customer Reviews | Brightwork Electrical Services Denver"
        description="Read what our customers in Denver, CO have to say about our residential electrical services. Reliable, professional, and experienced electricians."
        canonical={`${site.domain}/reviews`}
      />

      <PageHero
        title="Customer Reviews"
        subtitle="See what your neighbors in Denver have to say about our electrical services."
        image="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Modern living room with elegant lighting"
        breadcrumb="Denver, CO > Customer Reviews"
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Our Reputation</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Trusted by Homeowners Across Denver</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#ffd700]" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg font-medium text-gray-700">4.8 Average Rating • 16 Reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-5 w-5 ${idx < testimonial.rating ? 'text-[#ffd700]' : 'text-gray-200'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1 whitespace-pre-wrap">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience Our Service?"
        subtitle={`Call us at ${site.phone} to schedule your electrical service in Denver.`}
      />
    </>
  );
}
