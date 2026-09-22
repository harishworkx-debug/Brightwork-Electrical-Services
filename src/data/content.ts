export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Lee Melvin',
    location: 'Denver, CO',
    text: 'Wiring for a 50A L2 charger for my EV. Neal is easy to work with and I am very happy with the result. Will contact Brightwork again the next time I need any electrical work.',
    rating: 5,
  },
  {
    name: 'M G',
    location: 'Denver, CO',
    text: 'Neal is a great electrician and a good man. He does excellent work and is very reasonably priced. Neal wired my entire basement finish, to include adding a subpanel. He is very responsive and trustworthy. Give him a call; you won\'t be disappointed!',
    rating: 5,
  },
  {
    name: 'Stefanie Clarke',
    location: 'Denver, CO',
    text: 'If you\'re looking for an electrician who is responsive, detail-oriented, thorough, and a pleasure to work with, look no further than Neal at Brightwork Electrical. He\'s always reasonably priced and so efficient, we couldn\'t be happier with the work he\'s done for us. He has done a number of projects, and most recently installed an EV charger in our garage. He\'s punctual, neat, and gets the job done right. Couldn\'t recommend him more highly!',
    rating: 5,
  },
  {
    name: 'Sherry',
    location: 'Denver, CO',
    text: 'Neal was fantastic! He communicated very well on his timeline and pricing. I have an older home that had very few outlets. Neal put in new outlets both inside and outside. He was very professional and great to work with! He did about 6 hours of electrical work without ever shutting cutting off the power - which was useful as I was working from home. Great company and I will be using them again!',
    rating: 5,
  },
  {
    name: 'Teri McCafferty',
    location: 'Denver, CO',
    text: 'I called Brightwork Electrical Services on the recommendation of a friend for some electrical work at my residence. Neal was on time, friendly, and reasonably priced. He completed the job and left everything clean and in order. I absolutely recommend Brightwork Electrical Services and will not hesitate to call them in the future.',
    rating: 5,
  },
];

export interface HomeFAQ {
  q: string;
  a: string;
}

export const homeFAQs: HomeFAQ[] = [
  {
    q: 'What electrical services do you offer in Denver, CO?',
    a: 'Brightwork Electrical Services offers a complete range of residential electrical services in Denver, including electrical repair, panel upgrades, residential wiring, outlet and switch repair, lighting installation, ceiling fan installation, EV charger installation, electrical inspections, surge protection, generator electrical service, and troubleshooting.',
  },
  {
    q: 'How quickly can you come to my home in Denver?',
    a: 'We offer same-day and next-day appointments for most service calls. For electrical emergencies — burning smells, sparking, power outages — we prioritize getting an electrician to your home as quickly as possible. Call 303-621-5710 to schedule.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes, we provide free, upfront quotes for all electrical work. You\'ll know the cost before we start any project. There are no hidden fees or surprise charges.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Brightwork Electrical Services is a licensed and insured electrical contractor serving Denver, CO and the surrounding metro area. We carry the insurance and bonding necessary to protect your home and our team.',
  },
  {
    q: 'Do you pull permits for electrical work?',
    a: 'Yes. For projects that require permits under Denver building code, we handle the permit application and coordinate all required inspections. This ensures all work is verified by the local jurisdiction and meets code.',
  },
  {
    q: 'What areas do you serve around Denver?',
    a: 'We serve Denver and the entire metro area, including Aurora, Lakewood, Littleton, Englewood, Centennial, Thornton, Westminster, Arvada, Highlands Ranch, Parker, Castle Rock, Broomfield, Golden, and Boulder.',
  },
  {
    q: 'Do you install EV chargers?',
    a: 'Yes. We install Level 2 home EV charging stations for all electric vehicle brands, including Tesla, Chevrolet, Ford, Rivian, Hyundai, Kia, and BMW. We handle the electrical assessment, dedicated circuit installation, and charger mounting.',
  },
  {
    q: 'How do I know if I need an electrical panel upgrade?',
    a: 'Common signs include breakers that trip frequently, a panel that feels warm, scorch marks, or if you\'re adding major electrical loads like an EV charger or addition. Many Denver homes with 100-amp service benefit from upgrading to 200 amps. We can assess your panel and recommend the right approach.',
  },
];
