import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { site } from '@/data/site';
import { localBusinessSchema } from '@/data/schema';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Brightwork Electrical Services | Denver, CO"
        description={`Contact Brightwork Electrical Services for electrical service in Denver, CO. Call ${site.phone} to speak with an electrician or request electrical service.`}
        canonical={`${site.domain}/contact`}
        schema={[localBusinessSchema]}
      />

      <section className="relative overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Electrician working on electrical panel"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-[#0a0e1a]/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-sm text-[#ffd700] font-medium mb-3 tracking-wide">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Need an electrician in Denver, CO? Call us now or reach out below. We're ready to help with any residential electrical need.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <a href={site.phoneHref} className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 hover:bg-gray-100 transition-colors group mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ff9500]">
                  <Phone className="h-5 w-5 text-[#0a0e1a]" fill="currentColor" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase">Call Now</div>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-[#ff9500] transition-colors">{site.phone}</div>
                </div>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 hover:bg-gray-100 transition-colors group mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a]">
                  <Mail className="h-5 w-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase">Email</div>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-[#ff9500] transition-colors">{site.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a]">
                  <MapPin className="h-5 w-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase">Service Area</div>
                  <div className="text-lg font-bold text-gray-900">{site.address.full}</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-[#ff9500]" />
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="text-gray-900 font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl min-h-[500px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390968.8763122683!2d-105.33937202579486!3d40.04318373662343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c0ffce44b077b%3A0xb9e506bda2569876!2sBrightwork%20Electrical%20Services!5e0!3m2!1sen!2sin!4v1790055404720!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brightwork Electrical Services - Denver, CO Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
