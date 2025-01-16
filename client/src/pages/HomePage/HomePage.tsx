import { Link } from 'react-router-dom';

// import HeroSection from "./components/HeroSection";
import Footer from '../../components/Footer';
import Slideshow from '../../components/Slideshow';
import EventCard from '../../components/EventCard';

import awards from '../../assets/awards.jpg';
import dogSlideshow1 from '../../assets/hero1.jpg';
import dogSlideshow2 from '../../assets/hero2.jpg';
import dogSlideshow3 from '../../assets/hero3.jpg';
import dogSlideshow4 from '../../assets/hero4.jpg';
import rallyPreview from '../../assets/events/rally-feb-1/rally-preview.png';

const SLIDESHOW_IMAGE_FILES = [
  {
    image: dogSlideshow1,
    alt: 'Dog named Kirby running through tube in dog course',
  },
  {
    image: dogSlideshow2,
    alt: 'Dog named Stewie jumping over pole in dog course',
  },
  {
    image: dogSlideshow3,
    alt: 'Dog named Mango humping over pole in dog course',
  },
  {
    image: dogSlideshow4,
    alt: 'Dog named Terry looking up at his owner',
  },
];

const EVENTS = [
  {
    image: rallyPreview,
    alt: 'Dog rally signage cover picture',
    eventName: 'Rally B-Match',
    eventDetails:
      'Join us for a thrilling event from 11:00AM to 1:00PM for $5 per run or $15 for unlimited runs!',
    date: 'Saturday, Feb. 1, 2025',
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="flex relative items-center aspect-[3/2] md:aspect-[5/2] overflow-hidden
                  before:absolute before:inset-0 before:block before:bg-main-black before:bg-opacity-50"
      >
        <div className="flex flex-col text-main-white p-4 absolute text-center w-full">
          <h1 className="text-2xl sm:text-6xl md:text-[4rem] lg:text-[6rem]">
            The Las Vegas K-9 Foundation
          </h1>
          <div className="bg-main-white w-[16rem] h-[2px] mx-auto mt-2 md:w-[48rem] md:mt-8">
            {' '}
          </div>
          <h3 className="mt-1 text-xs sm:text-base md:text-2xl md:mt-4">
            Building a Stronger Community, One Paw at a Time!
          </h3>
        </div>

        <Slideshow
          imageNames={SLIDESHOW_IMAGE_FILES}
          buttonColor={'bg-main-white'}
        />
      </section>

      <section className="min-h-[12rem] w-full p-4 flex items-center justify-center">
        <div className="flex flex-col bg-main-gray p-4 gap-4 items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden max-w-lg sm:max-w-4xl">
          <h3>Our Mission</h3>
          <p className="text-sm h-full w-full text-center sm:text-lg">
            Provide a venue for educational experiences for owners and their
            canine companions, advancing amateur dog sports competitions.
          </p>
        </div>
      </section>

      <section className="h-[32rem] flex flex-col gap-4 items-center pb-4 bg-main-gray overflow-hidden sm:flex-row sm:pb-0 sm:pr-4">
        <img
          src={awards}
          alt="Dog with a lot of awards"
          className="w-full object-cover h-1/2 sm:h-full sm:w-1/2"
        />

        <div className="flex flex-col gap-4 m-4 py-16 px-6 h-fit w-2/3 justify-center items-center bg-main-white shadow-shift-left-red rounded-lg overflow-hidden sm:m-0">
          <h3>Get Involved Today</h3>

          <p className="text-sm text-center w-full sm:text-lg">
            We're looking for passionate canine owners that want to join our
            mission and make Las Vegas the premier hub for canine events.
          </p>
          <Link to="/about-us">
            <button className="btn-red text-sm sm:text-lg">Learn More</button>
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4 p-6 items-center justify-center bg-main-gray shadow-shift-right-secondary rounded-lg overflow-hidden">
          <h3>Our Vision & Goals</h3>

          <p className="text-sm text-center sm:text-lg">
            To support the canine community with a venue for educational and
            amateur competitive events.
          </p>
        </div>
      </section>

      <section className="h-[36rem] flex items-center justify-center p-8 bg-main-gray">
        <div className="h-full flex flex-col justify-between align-middle text-center gap-4">
          <h3>Upcoming Events</h3>

          {EVENTS.length === 0 ? (
            <p className="text-sm text-center sm:text-lg">Coming Soon</p>
          ) : (
            EVENTS.map((event, eventKey) => (
              <EventCard
                key={eventKey}
                image={event.image}
                altText={event.alt}
                eventName={event.eventName}
                eventDetails={event.eventDetails}
                date={event.date}
              />
            ))
          )}

          <Link to="/events">
            <button className="btn-red text-sm sm:text-lg">
              See All Events
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
