import HeroSection from "./components/HeroSection";
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

      <section className="flex justify-around h-[36rem] bg-main-gray">
        <div>Pictures</div>

        <div className="flex flex-col justify-center gap-8">
          <h2>Get Involved Today</h2>
          <p>We're looking for passionate canine owners</p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="h-[18rem] flex justify-around w-full">
        <h2 className="bg-main-blue w-1/2 text-center">Our Vision & Goals</h2>

        <div className="w-1/2 text-center">
          To support the canine community with a venue at a reasonable fee for
          educational and amateur competitive events.
        </div>
      </section>

      <section className="h-[36rem] bg-main-gray">
        <h2>Upcoming Events</h2>

        <ul className="flex justify-around">
          <li>Event</li>
          <li>Event</li>
        </ul>
      </section>

      <section className="h-[18rem] bg-main-blue">
        <h2>Contact Us</h2>

        <form>
          <p>Email</p>
        </form>
      </section>

      <Footer />
    </>
  );
}
