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
  {
    name: 'Mia Rodriguez',
    location: 'Denver, CO',
    text: 'Neal at Brightwork Electrical did amazing work at our home. We Initially hired him because our attic needed power wired so that we could plug in our radon fan. He was communicative, prompt, and offered fair and competitive pricing. Quickly thereafter, we hired him for an additional job to add wiring to all our bedrooms to install lights and ceiling fans, as well as move a dining room light fixture that was placed in a weird location when the home was built.\n\nHe did a thorough job, not quitting until each job was done right. We will definitely hire him again for any future electrical work we need and highly recommend him to anyone looking for a reliable electrician!',
    rating: 5,
  },
  {
    name: 'Patrick Salisbury',
    location: 'Denver, CO',
    text: 'Neal did a variety of electrical work for us including installing a subpanel and running new circuits. This was quite a large task due to the routing of the wires through difficult places. He did an outstanding job and when it took longer than initially expected due to unanticipated challenges, he showed up the next day and finished everything for the original estimate.\n\nHe also was very helpful in helping us to understand what we needed and what we did not need. Other electricians tried to sell additional work that was unnecessary and pointlessly expensive. Neal helped us understand exactly what we needed to get done and did it at a very reasonable price and at a very high-quality.\n\nWe are very happy with Neals work, and recommend him highly.',
    rating: 5,
  },
  {
    name: 'neha awasthi',
    location: 'Denver, CO',
    text: 'Neal is very professional. He installed ceiling fans in 2 rooms , wall scones outside garage,  He has done an amazing job at good value, the fans are working great. Definitely recommend Brightwork Electrical Services.',
    rating: 5,
  },
  {
    name: 'Weiss Dunn',
    location: 'Denver, CO',
    text: 'Once again, it was a pleasure working with Neal. Top notch expertise, wonderful communication, and he’s an all around good man. Go with Brightworks and whatever you need to have fixed or improved with electrical work will be fine better than you expected.',
    rating: 5,
  },
  {
    name: 'Megan Fisher',
    location: 'Denver, CO',
    text: 'Neal installed multiple new light fixtures, dimmers, and ceiling fan for us. He was communicative and knowledgeable. Would recommend. Lights are working great!',
    rating: 5,
  },
  {
    name: 'Chris B',
    location: 'Denver, CO',
    text: 'Neal was great! He was polite and thorough in completing the work and I will definitely call if I have any additional electrical issues.',
    rating: 5,
  },
  {
    name: 'Jennifer Zapp',
    location: 'Denver, CO',
    text: 'I am hesitant to provide a negative review as I am genuinely concerned that something my have happened to Neal, however I was completely ghosted. If something happened, I would be happy to take this review down if the circumstance, of no contact, was out of his control. If not, then I would hesitate not to share my experience. We really needed him to show up yesterday.\n\nI engaged with Neal on Thumbtack on May 26th and things were fine. On June 6th, I inquired if he could come out on the 10th. We touched base on the 7th, 8th and 9th confirming he would be here. On the 9th I had asked for him to give me a call so that we could be sure to have everything he needed prepped. There was no response but I figured he would just show up and handle things for the following day. The 10th rolled around and he didn’t show up at 9. I reached out to him close to 11 am and tried calling him. I left a message to find out if he was ok and if he was coming. Today is the 11th and still no word.',
    rating: 1,
  },
  {
    name: 'Kristin Miller',
    location: 'Denver, CO',
    text: 'Neal was communicative, helpful, on time, and efficient. I will absolutely use his services again In the future.',
    rating: 5,
  },
  {
    name: 'John Wilber',
    location: 'Denver, CO',
    text: 'Friendly, professional, and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Isha Hamal',
    location: 'Denver, CO',
    text: 'Great service. Responsiveness, Punctuality, Professionalism in Fan installation and other installations.',
    rating: 5,
  },
  {
    name: 'Tom Roling',
    location: 'Denver, CO',
    text: 'Great service. Punctuality, Quality, Professionalism in Electrical outlet & switch repair, Electrical power restoration.',
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
    a: 'We offer same-day and next-day appointments for most service calls. For electrical emergencies — burning smells, sparking, power outages — we prioritize getting an electrician to your home as quickly as possible. Call 303-879-1513 to schedule.',
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
