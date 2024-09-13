import { Link } from 'react-router-dom';

type EventCardProps = {
  image: string;
  altText: string;
  eventName: string;
  date: string;
};

export default function EventCard({
  image,
  altText,
  eventName,
  date,
}: EventCardProps) {
  return (
    <div className="h-80 w-64 bg-main-white rounded-md shadow-md">
      <div className="overflow-hidden rounded-t-md h-2/3 w-full mx-auto">
        <img src={image} alt={altText} />
      </div>
      <div className="h-1/3">
        <h2 className="text-xl">{eventName}</h2>
        <p className="text-base mb-4">{date}</p>
        <Link
          to="/events"
          className="flex justify-center transition-all hover:text-main-blue"
        >
          <p className="text-base">Learn More</p>
        </Link>
      </div>
    </div>
  );
}
