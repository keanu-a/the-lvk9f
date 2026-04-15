import { useState } from 'react';
import { MapPinLine } from '@phosphor-icons/react';

import Layout from '../../components/Layout';
import { events } from '../../data/events';
import { formatDate } from '../../utils/formatDate';

// import yardSaleFlyer2025 from '../../assets/events/yardsales/yardsale-2025.webp';
// import yardSaleFlyer2024 from '../../assets/events/yardsales/yardsale-2024.jpg';
// import rallyFlyer from '../../assets/events/rally-feb-1/rally.jpg';

const IMAGE_SIZE = 700;

// interface Event {
//   eventImage: string;
//   altText: string;
// }

// const PAST_EVENTS = [
//   {
//     eventImage: yardSaleFlyer2024,
//     altText: '1st annual yard sale flyer',
//   },
//   {
//     eventImage: rallyFlyer,
//     altText: 'Rally B-Match flyer',
//   },
//   {
//     eventImage: yardSaleFlyer2025,
//     altText: '2nd annual yard sale fundraiser',
//   },
// ];

type FilterTab = 'all' | 'org' | 'local';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const filteredEvents = events
    .filter((event) => activeFilter === 'all' || event.type === activeFilter)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const filters: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Our Events', value: 'org' },
    { label: 'Local Events', value: 'local' },
  ];

  return (
    <Layout bannerText="Events">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 p-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 py-2 rounded-lg transition-all border-2 border-main-blue hover:bg-main-blue hover:bg-opacity-50 ${
              activeFilter === filter.value
                ? 'bg-main-blue text-main-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="w-screen flex justify-center">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-500">More events coming soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-5xl">
            {filteredEvents.map((event, eventIndex) => (
              <div key={eventIndex}>
                {event.type === 'org' ? (
                  <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-main-gray rounded-lg shadow">
                    <img src={event.image} alt={event.alt} width={IMAGE_SIZE} />
                    <div>
                      <h3 className="text-lg font-bold">{event.eventName}</h3>
                      <p className="text-gray-600">{event.eventDetails}</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 p-4 bg-main-gray rounded-lg shadow+">
                    <div>
                      <p className="text-sm text-main-blue-darker md:text-base">
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </p>
                      <h3 className="text-lg font-bold">{event.organizer}</h3>
                      <p className="flex items-center gap-1">
                        <MapPinLine />
                        {event.location}
                      </p>
                    </div>
                    <p className="text-gray-600">
                      {event.disciplines.join(', ')}
                    </p>
                    {event.website && (
                      <button className="bg-main-blue text-main-white transition-all mt-1 p-2 rounded-lg hover:bg-main-blue/80 w-full md:w-1/3">
                        <a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <h2 className="p-4 text-main-blue">
        {UPCOMING_EVENTS.length} UPCOMING EVENT
      </h2>

      {UPCOMING_EVENTS.length > 0 &&
        UPCOMING_EVENTS.map((event, eventIndex) => (
          <div key={eventIndex}>
            <img
              src={event.eventImage}
              alt={event.altText}
              width={IMAGE_SIZE}
            />
          </div>
        ))}

      <h2 className="p-4 text-main-blue">PAST EVENTS</h2>

      <div className="flex">
        {PAST_EVENTS.map((event, eventIndex) => (
          <div key={eventIndex}>
            <img
              src={event.eventImage}
              alt={event.altText}
              width={IMAGE_SIZE / 2}
            />
          </div>
        ))}
      </div> */}
    </Layout>
  );
}
