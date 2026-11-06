/**
 * Replace placeholder media entries with real files in /public and their paths.
 * Add event dates in YYYY-MM-DD format. Events in the past are hidden automatically.
 */
export const band = {
  name: 'The Mellonials',
  location: 'Wrocław, Poland',
  bookingUrl: 'https://www.instagram.com/orchard_88/',
  instagramUrl: 'https://www.instagram.com/orchard_88/',
  description:
    'A live rock band from Wrocław playing covers and original music.',
};

export const events = [
  // { date: 'YYYY-MM-DD', time: 'Time TBA', venue: 'Venue TBA', city: 'Wrocław' },
    { date: '2026-11-17', time: 'Time TBA', venue: 'Stary Klasztor', city: 'Wrocław' },
];

export const photos = [
   // { src: '/photos/live-show.jpg', alt: 'The band playing live at [venue]' },
     { src: '/photos/1.jpg', alt: 'The band' },
     { src: '/photos/2.jpg', alt: 'The vocalist'},
     { src: '/photos/3.jpg', alt: 'The guitarist' },
];

export const reels = [
  // { title: 'Reel title', url: 'https://www.instagram.com/reel/…/' },
     { title: 'Live in Alive', url: 'https://www.instagram.com/reel/DXe8EUDCkPQ' },
     { title: 'Live play', url: 'https://www.instagram.com/reel/DXe6t5RipAj' },
     { title: 'Band is performing', url: 'https://www.instagram.com/reel/DQCYP3OCl3M' },
];
