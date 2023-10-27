import { Link } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import Footer from "../../components/Footer";

import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";

import phone from "../../assets/icons8-phone-50.png";
import email from "../../assets/icons8-email-50.png";

const images = [
  {
    image: dog1,
    alt: "Dog holding a leash",
  },
  {
    image: dog2,
    alt: "Dog being pet",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="h-[18rem] flex flex-col justify-center gap-8">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center p-4">
          Provide a venue for educational experiences for owners and their
          canine companions, advancing amateur dog sports competitions.
        </p>
      </section>

      <section className="flex justify-center items-center h-[40rem] bg-main-gray overflow-hidden">
        <div className="w-1/2 flex p-4 align-middle justify-center">
          {images.map(({ image, alt }) => (
            <div className="object-cover w-1/2 m-1 shadow-md">
              <img src={image} alt={alt} />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-8 w-1/2 items-center text-center">
          <h2>Get Involved Today</h2>
          <p>We're looking for passionate canine owners</p>
          <Link to="/membership">
            <button className="transition bg-main-red p-3 rounded-lg text-lg shadow-md hover:text-main-white hover:bg-secondary-red">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="h-[18rem] flex justify-around w-full">
        <div className="w-1/2 bg-main-blue items-center flex justify-center">
          <h2 className="text-center">Our Vision & Goals</h2>
        </div>

        <div className="w-1/2 p-4 flex items-center">
          <p className="text-center">
            To support the canine community with a venue at a reasonable fee for
            educational and amateur competitive events.
          </p>
        </div>
      </section>

      <section className="h-[40rem] bg-main-gray flex flex-col justify-around items-center">
        <h2 className="text-center">Upcoming Events</h2>

        {/* <ul className="flex justify-around">
          <li>Event</li>
          <li>Event</li>
        </ul> */}

        <p>No Events Yet</p>

        <Link to="/events">
          <button className="transition bg-main-red p-3 rounded-lg text-lg shadow-md hover:text-main-white hover:bg-secondary-red">
            See All Events
          </button>
        </Link>
      </section>

      <section className="h-[18rem] bg-main-blue flex flex-col gap-8 justify-center">
        <h2 className="text-center">Contact Us</h2>

        <div className="mx-auto flex gap-8">
          <div className="flex gap-4 items-center">
            <img src={phone} />
            <p>702-123-4567</p>
          </div>

          <div className="flex gap-4 items-center">
            <img src={email} />
            <p>testemail@gmail.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
