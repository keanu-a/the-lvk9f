// import yardSaleFlyer2025 from '../assets/events/yardsales/yardsale-2025.webp';
// import yardSaleFlyer2024 from '../assets/events/yardsales/yardsale-2024.jpg';
// import rallyFlyer from '../assets/events/rally-feb-1/rally.jpg';

export type OrgEvent = {
  type: 'org';
  image: string;
  alt: string;
  eventName: string;
  eventDetails: string;
  date: Date;
  endDate?: Date;
  location: string;
};

export type LocalEvent = {
  type: 'local';
  organizer: string;
  disciplines: string[];
  date: Date;
  endDate?: Date;
  location: string;
  website?: string;
};

export type Event = OrgEvent | LocalEvent;

export const events: Event[] = [
  {
    type: 'local',
    organizer: 'Smarty Paws Barn Hunt',
    disciplines: ['Fun Test'],
    date: new Date('2026-05-02'),
    endDate: new Date('2026-05-03'),
    location: 'Las Vegas, NV',
    website: 'https://www.barnhunt.com/register/event.php?key=9307',
  },
  {
    type: 'local',
    organizer: 'Sin City Super Sniffers | NASDA',
    disciplines: [
      'Urban Challenge',
      'Trailing & Locating',
      'Urban Locating',
      'Shed Dog',
    ],
    date: new Date('2026-04-17'),
    endDate: new Date('2026-04-19'),
    location: 'Las Vegas, NV',
    website: 'https://nasda.dog/',
  },
  {
    type: 'local',
    organizer: 'Silver State Kennel Club',
    disciplines: ['Fast Cat'],
    date: new Date('2026-04-25'),
    endDate: new Date('2026-04-26'),
    location: 'Pahrump, NV',
    website: 'http://www.silverstatekennelclub.com',
  },
  {
    type: 'local',
    organizer: 'Boston Terrier Club of America',
    disciplines: ['Agility'],
    date: new Date('2026-04-25'),
    endDate: new Date('2026-04-26'),
    location: 'Boulder City, NV',
    website: 'http://www.bostonterrierclubofamerica.org/',
  },
  {
    type: 'local',
    organizer: 'Gamblers Agility Club of Greater Las Vegas',
    disciplines: ['Agility'],
    date: new Date('2026-10-16'),
    endDate: new Date('2026-10-19'),
    location: 'Boulder City, NV',
    website: 'http://www.lvdice.org/',
  },
  {
    type: 'local',
    organizer: 'Pahrump Valley Obedience Club',
    disciplines: ['Obedience', 'Rally'],
    date: new Date('2026-10-23'),
    endDate: new Date('2026-10-25'),
    location: 'Pahrump, NV',
    website: 'http://www.pvobedienceclub.com',
  },
  {
    type: 'local',
    organizer: 'Silver State Kennel Club',
    disciplines: ['Scent Work Trials'],
    date: new Date('2026-10-24'),
    endDate: new Date('2026-10-25'),
    location: 'TBD',
    website: 'http://www.silverstatekennelclub.com',
  },
  {
    type: 'local',
    organizer: 'Smarty Paws | NADAC',
    disciplines: ['Agility'],
    date: new Date('2026-11-13'),
    endDate: new Date('2026-11-15'),
    location: 'Boulder City, NV',
    website: 'https://www.nadac.com/',
  },
  {
    type: 'local',
    organizer: 'Gamblers Agility Club of Greater Las Vegas',
    disciplines: ['Agility'],
    date: new Date('2026-12-4'),
    endDate: new Date('2026-12-6'),
    location: 'Boulder City, NV',
    website: 'http://www.lvdice.org/',
  },
  {
    type: 'local',
    organizer: 'Black Mountain Kennel Club',
    disciplines: ['Conformation'],
    date: new Date('2026-12-11'),
    endDate: new Date('2026-12-13'),
    location: 'TBD',
    website: 'https://www.jbradshaw.com',
  },
];

// export const pastEvents: Event[] = [
//   {
//     image: yardSaleFlyer2024,
//     alt: '1st annual yard sale flyer',
//     eventName: '1st Annual Yard Sale',
//     date: new Date('2025-10-19'),
//     type: 'org',
//     location: 'Las Vegas, NV',
//   },
//   {
//     image: rallyFlyer,
//     alt: 'Rally B-Match flyer',
//     eventName: 'Rally B-Match',
//     date: new Date('2025-02-01'),
//     type: 'org',
//     location: 'Las Vegas, NV',
//   },
//   {
//     image: yardSaleFlyer2025,
//     alt: '2nd annual yard sale fundraiser',
//     eventName: '2nd Annual Yard Sale',
//     date: new Date('2025-10-18'),
//     type: 'org',
//     location: 'Las Vegas, NV',
//   },
// ];
