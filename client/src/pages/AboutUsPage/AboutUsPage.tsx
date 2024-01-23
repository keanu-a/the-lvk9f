import Footer from "../../components/Footer";

import aboutUsDogHeader from "../../assets/dog-about-us.jpg";

export default function AboutUsPage() {
  return (
    <>
      <main className="flex flex-col gap-8 mb-8">
        <div className="flex items-center relative before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-main-blue">
          <h2 className="absolute p-2 text-4xl md:p-16 md:text-6xl text-main-white">
            About Us
          </h2>

          <img
            src={aboutUsDogHeader}
            alt="Photo by Pauline Loroy on Unsplash at https://unsplash.com/photos/white-and-brown-long-coat-large-dog-U3aF7hgUSrk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash</a>"
            className="w-full h-60 object-cover"
          />
        </div>

        <section className="flex flex-col items-center gap-8 max-w-6xl mx-auto p-4">
          <div className="flex flex-col bg-main-gray p-4 gap-4 items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden max-w-lg sm:max-w-4xl">
            <h2 className="text-lg font-bold sm:text-3xl">Mission Statement</h2>
            <p className="text-sm h-full w-full sm:text-lg">
              The Las Vegas K-9 Foundation (LV K-9 Foundation) is a local Las
              Vegas non-profit organization that provides a venue with
              facilities, equipment and associated services for local canine
              organizations’ sporting events, exhibitions, gatherings, and
              educational activities.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 justify-center items-center bg-main-gray shadow-shift-left-red rounded-lg overflow-hidden">
            <h2 className="text-lg font-bold sm:text-3xl">
              About the LV K-9 Foundation
            </h2>
            <p className="text-sm sm:text-lg">
              The Las Vegas metropolitan area is home to a number of
              canine-oriented organizations, such as the Silver State Kennel
              Club, the Las Vegas Valley Dog Obedience Club and LV DICE. These
              are local organizations whose activities include AKC Conformation,
              Obedience, and Agility training and competitions and other canine
              events and sporting activities. There is a scarcity of available,
              affordable and appropriate venues for these local organizations to
              host their activities and events, making it increasingly difficult
              for them to function and thrive. The LV K-9 Foundation was founded
              by a group of canine enthusiasts from various fields of canine
              activities to address these needs by securing and managing a
              canine-specific facility for these local organizations to hold
              their events and activities.
            </p>
            <p className="text-sm sm:text-lg">
              As a non-profit 501(c)(3), the LV K-9 Foundation will be funded by
              public donations, venue and equipment rentals, primarily to
              canine-specific organizations and individuals, in-venue event
              support services fees and fund-raising activities to support its
              operations and facility acquisition.
            </p>
          </div>

          <div className="flex flex-col bg-main-gray p-4 gap-4 items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden max-w-lg sm:max-w-4xl">
            <h2 className="text-lg font-bold sm:text-3xl">Objectives</h2>
            <p className="text-sm h-full w-full sm:text-lg">
              The primary objective of the LV K-9 Foundation is to provide a
              venue suitable for canine educational, conformation, obedience,
              agility, rally, Meet the Breeds, Canine Good Citizen, Barn Hunt,
              and other canine related events and activities in the Las Vegas
              metropolitan area, which will be named the Las Vegas K-9
              Educational and Events Center. Initially, this venue will be
              property leased by the LV K-9 Foundation until sufficient funds
              have been raised and a suitable property has been located to
              purchase. This facility will be made available to the local
              organizations at reasonable and affordable rates, and the facility
              will also acquire the equipment and furnishings required for these
              events for rental by these organizations for their events and
              activities. Our primary objectives are:
            </p>

            <ul className="text-sm sm:text-lg flex flex-col gap-2 list-disc px-6">
              <li>
                To encourage avenues of canine education for the Las Vegas
                community
              </li>
              <li>
                To provide a safe and secure location for canine related events
              </li>
              <li>
                To encourage the next generation of canine enthusiasts in all
                areas of the sport of dogs
              </li>
              <li>
                To ensure that local canine organizations have the ability to
                host their activities and events in a suitable and affordable
                local venue
              </li>
              <li>
                To allow them to fulfill their objectives, and not just survive
                but grow and thrive.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
