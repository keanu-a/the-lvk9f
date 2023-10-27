import Footer from "../../components/Footer";

export default function AboutUsPage() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center">
        <h2 className="mb-12">About Us</h2>

        <div className="flex flex-col gap-12 w-full">
          <section className="h-[18rem] flex w-full">
            <h2 className="w-1/2 text-center bg-main-blue flex justify-center items-center">
              Our Mission
            </h2>

            <p className="w-1/2 text-center flex justify-center items-center p-8">
              Provide a venue for educational experiences for owners and their
              canine companions, advancing amateur dog sports competitions.
            </p>
          </section>

          <section className="h-[18rem] flex w-full">
            <p className="w-1/2 text-center flex justify-center items-center p-8">
              To support the canine community with a venue at a reasonable fee
              for educational and amateur competitive events.
            </p>
            <h2 className="w-1/2 text-center bg-main-blue flex justify-center items-center">
              Our Vision & Goals
            </h2>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
