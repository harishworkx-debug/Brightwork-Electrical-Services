import { Link } from 'react-router-dom';
import {
  Phone, Zap, Shield, Clock, Star, CheckCircle2, ArrowRight,
  Home, Wrench, Lightbulb, Plug, ToggleLeft, Fan, BatteryCharging,
  Search, Cable, Power, MapPin, ChevronDown, Award, Users, ThumbsUp,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { testimonials, homeFAQs } from '@/data/content';
import { localBusinessSchema, faqSchema } from '@/data/schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb, Fan,
  BatteryCharging, Search, Shield, Power,
};

const heroImage = 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const aboutImage = 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const denverImage = 'https://images.pexels.com/photos/13633732/pexels-photo-13633732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const galleryImages = [
  { url: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Electrician working on circuit breaker panel' },
  { url: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern living room with elegant lighting' },
  { url: 'https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Home EV charger installation' },
  { url: 'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Electrician installing a power outlet' },
  { url: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Living room with ceiling fan installation' },
  { url: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Electrician using multimeter for troubleshooting' },
];

const problemsSolved = [
  { title: 'Breakers That Keep Tripping', description: 'We diagnose overloaded circuits, shorts, and ground faults — then fix the root cause.' },
  { title: 'Dead or Faulty Outlets', description: 'Outlets that don\'t work, feel loose, or won\'t hold a plug are safety hazards we repair fast.' },
  { title: 'Flickering Lights', description: 'Flickering can mean loose connections, bad switches, or panel problems. We find and fix them.' },
  { title: 'Outdated Electrical Panels', description: 'Old fuse boxes and undersized panels can\'t support modern homes. We upgrade them safely.' },
  { title: 'Old or Damaged Wiring', description: 'Knob-and-tube, aluminum, and aging wiring are fire risks. We rewire homes to current code.' },
  { title: 'No Power in Part of Home', description: 'Partial outages usually indicate a wiring or panel issue. We troubleshoot and restore power.' },
];

const whyChooseUs = [
  { icon: Clock, title: 'On-Time Service', description: 'We respect your time. Our electricians show up when scheduled and communicate clearly.' },
  { icon: Shield, title: 'Safe, Code-Compliant Work', description: 'Every project meets NEC and local Denver code. We pull permits and arrange inspections.' },
  { icon: Award, title: 'Skilled Electricians', description: 'Our team has the training and experience to handle any residential electrical project.' },
  { icon: ThumbsUp, title: 'Upfront Pricing', description: 'You get a clear, written quote before work begins. No surprises, no hidden fees.' },
  { icon: Users, title: 'Local Denver Team', description: 'We\'re based in Denver and know the homes, neighborhoods, and electrical systems of the area.' },
  { icon: Zap, title: 'Comprehensive Services', description: 'From small repairs to major installations — one electrician for every electrical need.' },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician Denver, CO | Brightwork Electrical Services"
        description="Trusted electrician in Denver, CO. Residential electrical repair, panel upgrades, wiring, lighting, EV chargers, and more. Licensed, insured, and ready to help. Call 303-879-1513."
        canonical={site.domain}
        schema={[localBusinessSchema, faqSchema(homeFAQs)]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Electrician working on residential electrical panel in Denver" className="h-full w-full object-cover opacity-35" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-[#0a0e1a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 px-4 py-1.5 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-[#ffd700]" fill="currentColor" />
              <span className="text-sm text-[#ffd700] font-medium">Denver's Trusted Residential Electrician</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Electrician in <span className="text-[#ffd700]">Denver, CO</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Brightwork Electrical Services provides professional residential electrical services throughout Denver and the surrounding metro area. From repairs and panel upgrades to lighting, wiring, and EV chargers — we do it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-7 py-4 text-base font-bold text-[#0a0e1a] hover:shadow-xl hover:shadow-[#ffd700]/40 transition-all hover:scale-105">
                <Phone className="h-5 w-5" fill="currentColor" />
                Call {site.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-7 py-4 text-base font-bold text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-colors">
                Request Electrical Service
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10">
              {['Licensed & Insured', 'Upfront Pricing', 'Same-Day Service'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#ffd700]" />
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Bar */}
      <section className="bg-[#111827] border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {services.slice(0, 6).map((s) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="flex flex-col items-center gap-2 rounded-xl p-4 hover:bg-white/5 transition-colors group">
                  <Icon className="h-7 w-7 text-[#ffd700] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-300 text-center font-medium leading-tight">{s.shortTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffd700]/10 rounded-2xl -z-10" />
              <img src={aboutImage} alt="Professional electrician working on electrical panel in Denver home" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-[#0a0e1a] rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold text-[#ffd700]">Denver</div>
                <div className="text-sm text-gray-300 mt-1">Based & Local</div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Brightwork Electrical Services</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Brightwork Electrical Services is a residential electrical contractor serving Denver, Colorado and the surrounding metro area. We handle every aspect of home electrical work — from troubleshooting a faulty outlet to installing a complete electrical panel upgrade.
                </p>
                <p>
                  Our approach is simple: show up on time, communicate clearly, do quality work, and treat your home with respect. We believe that every homeowner deserves an electrician they can trust — one who explains the problem, offers honest recommendations, and delivers work that meets the highest safety standards.
                </p>
                <p>
                  Whether you live in a historic Denver bungalow or a new build in the suburbs, our team has the knowledge and experience to keep your home's electrical system safe, reliable, and ready for modern demands.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-[#ff9500] font-semibold hover:gap-3 transition-all">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Residential Electrical Services in Denver</h2>
            <p className="text-gray-600 text-lg">From small repairs to major installations, we provide every electrical service your Denver home needs.</p>
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
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.intro}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff9500] group-hover:gap-2 transition-all">
                    {s.shortTitle} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Electrical Problems We Solve */}
      <section className="py-20 lg:py-28 bg-[#0a0e1a] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ffd700] uppercase tracking-wider mb-3">We Can Help</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Electrical Problems We Solve</h2>
            <p className="text-gray-400 text-lg">If you're experiencing any of these issues, call us at {site.phone}.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsSolved.map((p) => (
              <div key={p.title} className="rounded-2xl bg-[#111827] border border-gray-800 p-6 hover:border-[#ffd700]/30 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10 mb-4">
                  <Zap className="h-5 w-5 text-[#ffd700]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Brightwork Difference</h2>
            <p className="text-gray-600 text-lg">We're committed to providing Denver homeowners with electrical service that's safe, reliable, and professional.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-50 border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ff9500] mb-4">
                  <item.icon className="h-6 w-6 text-[#0a0e1a]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Service Areas</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Serving Denver & the Metro Area</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Brightwork Electrical Services is based in Denver, CO and serves homeowners throughout the Denver metropolitan area. From Aurora to Boulder, Lakewood to Parker, we're ready to help with your electrical needs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/${l.slug}`}
                    className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#ff9500] transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#ff9500] shrink-0" />
                    {l.city}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={denverImage} alt="Denver, Colorado city skyline with mountains" className="w-full h-[400px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-2xl font-bold text-white">Denver, Colorado</div>
                <div className="text-sm text-[#ffd700]">Our Home & Service Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Our Work</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-gray-600 text-lg">A look at the types of electrical projects we handle for Denver homeowners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-4 left-4 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[#0a0e1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ffd700] uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Denver Homeowners Say</h2>
            <p className="text-gray-400 text-lg">Our customers' feedback speaks to the quality of our work and service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.name} className="rounded-2xl bg-[#111827] border border-gray-800 p-6 hover:border-[#ffd700]/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#ffd700]" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm mb-5 line-clamp-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800 mt-auto">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd700] to-[#ff9500] font-bold text-[#0a0e1a] shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-7 py-3 text-sm font-bold text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-colors">
              Read All 16 Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Answers to common questions about our electrical services in Denver, CO.</p>
          </div>
          <FAQAccordion faqs={homeFAQs} />
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Have a question we didn't answer? We're happy to help.</p>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-xl bg-[#0a0e1a] px-6 py-3.5 text-base font-bold text-white hover:bg-[#111827] transition-colors">
              <Phone className="h-5 w-5 text-[#ffd700]" fill="currentColor" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Contact Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Need an electrician in Denver, CO? Call us now or reach out through our contact page. We're ready to help with any residential electrical need.
              </p>
              <div className="space-y-4">
                <a href={site.phoneHref} className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition-colors group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ff9500]">
                    <Phone className="h-5 w-5 text-[#0a0e1a]" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase">Call Now</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#ff9500] transition-colors">{site.phone}</div>
                  </div>
                </a>
                <Link to="/contact" className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition-colors group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0e1a]">
                    <MapPin className="h-5 w-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase">Service Area</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#ff9500] transition-colors">{site.address.full}</div>
                  </div>
                </Link>
              </div>
              <div className="mt-8 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Business Hours</h3>
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
            <div className="rounded-2xl overflow-hidden shadow-2xl min-h-[450px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390968.8763122683!2d-105.33937202579486!3d40.04318373662343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c0ffce44b077b%3A0xb9e506bda2569876!2sBrightwork%20Electrical%20Services!5e0!3m2!1sen!2sin!4v1790055404720!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brightwork Electrical Services - Denver, CO"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
