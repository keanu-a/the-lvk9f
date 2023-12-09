import { Link } from "react-router-dom";

// import HeroSection from "./components/HeroSection";
import Footer from "../../components/Footer";

import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";
import dogSlideshow1 from "../../assets/hero1.jpg";
import dogSlideshow2 from "../../assets/hero2.jpg";

import Slideshow from "../../components/Slideshow";

const SLIDESHOW_IMAGE_FILES = [
  {
    image: dogSlideshow1,
    alt: "Man walking his 5 dogs outside",
  },
  {
    image: dogSlideshow2,
    alt: "A shiba running in a desert",
  },
];

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
      <section
        className="flex relative items-center max-h-[25rem] overflow-hidden             
                   before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-main-blue"
      >
        <h1 className="text-main-white p-4 absolute text-2xl w-7/12 sm:text-3xl md:text-4xl lg:text-6xl lg:w-1/2">
          The Las Vegas K-9 Foundation
        </h1>

        <Slideshow
          imageNames={SLIDESHOW_IMAGE_FILES}
          buttonColor={"bg-main-white"}
        />
      </section>

      <section className="min-h-[12rem] w-full p-4 flex items-center justify-center">
        <div className="flex flex-col bg-main-gray p-4 gap-4 items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden max-w-lg">
          <h2 className="text-lg font-bold">Our Mission</h2>
          <p className="text-sm h-full w-full text-center">
            Provide a venue for educational experiences for owners and their
            canine companions, advancing amateur dog sports competitions.
          </p>
        </div>
      </section>

      <section className="h-[25rem] flex flex-col gap-4 justify-center items-center py-6 px-4 bg-main-gray overflow-hidden sm:flex-row">
        <div className="h-1/2 flex p-4 align-middle justify-center overflow-hidden sm:w-1/2 sm:h-3/4">
          {images.map(({ image, alt }, index) => (
            <div
              key={index}
              className="object-cover w-1/2 m-1 shadow-md rounded-lg overflow-hidden"
            >
              <img src={image} alt={alt} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 p-6 justify-center items-center bg-main-white shadow-shift-left-red rounded-lg overflow-hidden">
          <h2 className="text-lg font-bold">Get Involved Today</h2>
          <p className="text-sm text-center">
            We're looking for passionate canine owners that want to join our
            mission and make Las Vegas a new hub for the dog show world.
          </p>
          <Link to="/membership">
            <button className="btn-red text-sm">Learn More</button>
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4 p-6 items-center justify-center bg-main-gray shadow-shift-right-secondary rounded-lg overflow-hidden">
          <h2 className="text-lg font-bold">Our Vision & Goals</h2>

          <p className="text-sm text-center">
            To support the canine community with a venue at a reasonable fee for
            educational and amateur competitive events.
          </p>
        </div>
      </section>

      <section className="h-[25rem] flex items-center justify-center p-8 bg-main-gray">
        <div className="h-full flex flex-col justify-between align-middle text-center gap-4">
          <h2 className="text-lg font-bold">Upcoming Events</h2>
          <p className="text-sm text-center">Coming Soon</p>

          <Link to="/events">
            <button className="btn-red text-sm">See All Events</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
