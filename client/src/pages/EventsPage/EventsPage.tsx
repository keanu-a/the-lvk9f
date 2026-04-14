import { useState } from 'react';

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
      <div className="flex flex-wrap gap-2 p-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 py-2 rounded-full transition-all hover:bg-main-blue hover:bg-opacity-50 ${
              activeFilter === filter.value
                ? 'bg-main-blue text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500">More events coming soon!</p>
      ) : (
        <div className="flex flex-col gap-4 pb-4">
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
                <div className="flex flex-col md:flex-row gap-4 p-4 bg-main-gray rounded-lg shadow">
                  <div>
                    <h3 className="text-lg font-bold">{event.organizer}</h3>
                    <p className="text-gray-600">
                      {event.disciplines.join(', ')}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDate(event.date)}
                      {event.endDate && ` - ${formatDate(event.endDate)}`}
                    </p>
                    {event.website && (
                      <a
                        href={event.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main-blue hover:underline"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

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
