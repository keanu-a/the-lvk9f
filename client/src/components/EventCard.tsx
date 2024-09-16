import { Link } from 'react-router-dom';

import { CaretCircleDoubleRight } from '@phosphor-icons/react';

type EventCardProps = {
  image: string;
  altText: string;
  eventName: string;
  eventDetails: string;
  date: string;
};

const ICON_SIZE = 24;

export default function EventCard({
  image,
  altText,
  eventName,
  eventDetails,
  date,
}: EventCardProps) {
  return (
    <div className="h-96 w-64 text-left bg-main-white rounded-md shadow-md overflow-hidden">
      <div className="h-2/5 w-full mx-auto overflow-hidden">
        <img src={image} alt={altText} />
      </div>
      <div className="h-3/5 px-4 flex flex-col">
        <div className="my-4">
          <p className="text-sm font-bold text-main-blue-darker">{date}</p>
          <h2 className="text-xl">{eventName}</h2>
        </div>

        <p className="text-sm mb-8">{eventDetails}</p>

        <Link
          to="/events"
          className="flex gap-1 items-center transition-all overflow-hidden group hover:text-main-blue-darker"
        >
          <CaretCircleDoubleRight
            size={ICON_SIZE}
            className="-translate-x-6 transition-all group-hover:translate-x-0"
          />
          <p className="text-base transition-all -translate-x-6 group-hover:translate-x-0">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
}
