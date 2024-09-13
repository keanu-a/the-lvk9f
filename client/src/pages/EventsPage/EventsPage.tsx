import Layout from '../../components/Layout';

import yardSaleFlyer from '../../assets/events/yardsale.jpg';

const IMAGE_SIZE = 700;

const EVENTS = [
  {
    eventImage: yardSaleFlyer,
    altText: '1st annual yard sale flyer',
  },
];

export default function EventsPage() {
  return (
    <Layout bannerText="Events">
      <h2 className="p-4 text-main-blue">{EVENTS.length} UPCOMING EVENT</h2>

      {EVENTS.map((event, eventIndex) => (
        <div key={eventIndex}>
          <img src={event.eventImage} alt={event.altText} width={IMAGE_SIZE} />
        </div>
      ))}
    </Layout>
  );
}
