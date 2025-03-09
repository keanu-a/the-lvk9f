import Layout from '../../components/Layout';

import yardSaleFlyer from '../../assets/events/yardsale-oct-24/yardsale.jpg';
import rallyFlyer from '../../assets/events/rally-feb-1/rally.jpg';

const IMAGE_SIZE = 700;

interface Event {
  eventImage: string;
  altText: string;
}

const UPCOMING_EVENTS: Event[] = [];

const PAST_EVENTS = [
  {
    eventImage: yardSaleFlyer,
    altText: '1st annual yard sale flyer',
  },
  {
    eventImage: rallyFlyer,
    altText: 'Rally B-Match flyer',
  },
];

export default function EventsPage() {
  return (
    <Layout bannerText="Events">
      <h2 className="p-4 text-main-blue">
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
      </div>
    </Layout>
  );
}
