import { Link } from "react-router-dom";

// import HeroSection from "./components/HeroSection";
import Footer from "../../components/Footer";

import dog1 from "../../assets/dog1.jpg";
import dog2 from "../../assets/dog2.jpg";
import dogSlideshow1 from "../../assets/hero1.jpg";
import dogSlideshow2 from "../../assets/hero2.jpg";

import Slideshow from "../../components/Slideshow";
import ColorContainer from "../../components/ColorContainer";

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
        className="flex relative items-center sm:max-h-96 lg:max-h-[30rem] overflow-hidden             
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

      <section className="min-h-[12rem] w-full items-center p-4 bg-main-yellow">
        <div className="flex flex-col items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden sm:flex-row sm:h-40">
          <h2 className="text-lg h-full w-full p-4 text-center bg-main-gray">
            Our Mission
          </h2>
          <p className="text-sm h-full w-full p-4 text-center bg-main-white">
            Provide a venue for educational experiences for owners and their
            canine companions, advancing amateur dog sports competitions.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center items-center h-[40rem] py-6 px-4 bg-main-gray overflow-hidden sm:flex-row">
        <div className="h-1/2 flex p-4 align-middle justify-center overflow-hidden sm:w-1/2 sm:h-3/4">
          {images.map(({ image, alt }, index) => (
            <div key={index} className="object-cover w-1/2 m-1 shadow-md">
              <img src={image} alt={alt} />
            </div>
          ))}
        </div>

        <div className="h-1/2 sm:h-3/4 sm:w-1/2">
          <ColorContainer
            bgColor="bg-main-white"
            shift="left"
            width="half"
            shadowColor="secondary"
          >
            <h2 className="text-center text-3xl md:text-4xl">
              Get Involved Today
            </h2>
            <p className="text-center p-4 text-lg md:text-xl">
              We're looking for passionate canine owners
            </p>
            <Link to="/membership">
              <button className="transition bg-main-red p-3 rounded-lg text-lg shadow-md hover:text-main-white hover:bg-secondary-red">
                Learn More
              </button>
            </Link>
          </ColorContainer>
        </div>
      </section>

      <section className="justify-center flex-col flex text-center w-full p-8 sm:flex-row">
        <ColorContainer bgColor="bg-main-gray" shift="right" shadowColor="red">
          <h2 className="text-center text-3xl md:text-4xl">
            Our Vision & Goals
          </h2>
        </ColorContainer>

        <div className="sm:w-1/2 p-4 flex items-center">
          <p className="text-center">
            To support the canine community with a venue at a reasonable fee for
            educational and amateur competitive events.
          </p>
        </div>
      </section>

      {/* 
      <section className="h-[40rem] bg-main-gray flex flex-col justify-around items-center">
        <h2 className="text-center">Upcoming Events</h2>

        <p>No Events Yet</p>

        <Link to="/events">
          <button className="transition bg-main-red p-3 rounded-lg text-lg shadow-md hover:text-main-white hover:bg-secondary-red">
            See All Events
          </button>
        </Link>
      </section>
 */}

      <Footer />
    </>
  );
}
