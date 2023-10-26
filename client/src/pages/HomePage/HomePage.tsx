import { Link } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import HomeForm from "./components/HomeForm";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="h-[18rem] flex flex-col justify-center gap-8">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center">
          Provide a venue for educational experiences for owners and their
          canine companions, advancing amateur dog sports competitions.
        </p>
      </section>

      <section className="flex justify-center items-center h-[40rem] bg-main-gray">
        <div className="w-1/2">Pictures</div>

        <div className="flex flex-col justify-center gap-8 w-1/2 items-center text-center">
          <h2>Get Involved Today</h2>
          <p>We're looking for passionate canine owners</p>
          <Link to="/membership">
            <button className="bg-main-red p-3 rounded-lg text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="h-[18rem] flex justify-around w-full">
        <div className="w-1/2 bg-main-blue items-center flex justify-center">
          <h2 className="text-center">Our Vision & Goals</h2>
        </div>

        <div className="w-1/2 flex items-center">
          <p className="text-center">
            To support the canine community with a venue at a reasonable fee for
            educational and amateur competitive events.
          </p>
        </div>
      </section>

      <section className="h-[40rem] bg-main-gray flex flex-col justify-around items-center">
        <h2 className="text-center">Upcoming Events</h2>

        <ul className="flex justify-around">
          <li>Event</li>
          <li>Event</li>
        </ul>

        <Link to="/events">
          <button className="bg-main-red p-3 rounded-lg text-lg">
            See More Events
          </button>
        </Link>
      </section>

      <section className="h-[18rem] bg-main-blue flex flex-col justify-around">
        <h2 className="text-center">Contact Us</h2>
        <HomeForm />
      </section>

      <Footer />
    </>
  );
}
