import Layout from '../../components/Layout';
import HoverCard from '../../components/HoverCard';

import sskc from '../../assets/sskc.webp';
import lvvdoc from '../../assets/lvvdoc.png';
import lvdice from '../../assets/lvdice.png';

const ORGANIZATIONS = [
  {
    image: sskc,
    text: 'Silver State Kennel Club',
    link: 'https://www.silverstatekennelclub.com/',
  },
  {
    image: lvvdoc,
    text: 'Las Vegas Valley Dog Obedience Club',
    link: 'https://vvdoc.org/',
  },
  {
    image: lvdice,
    text: 'Gamblers Agility Club of Greater Las Vegas',
    link: 'http://www.lvdice.org/',
  },
];

const OBJECTIVES = [
  {
    images: '',
    text: 'To encourage avenues of canine education for the Las Vegas community',
  },
  {
    images: '',
    text: 'To provide a safe and secure location for canine related events',
  },
  {
    images: '',
    text: 'To encourage the next generation of canine enthusiasts in all areas of the sport of dogs',
  },
  {
    images: '',
    text: 'To ensure that local canine organizations have the ability to host their activities and events in a suitable and affordable local venue',
  },
  {
    images: '',
    text: 'To allow them to fulfill their objectives, and not just survive but grow and thrive.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Layout bannerText="About Us">
        <section className="bg-main-gray w-full">
          <div className="flex flex-col p-4 gap-4 justify-center max-w-7xl mx-auto sm:p-12">
            <h3 className="font-bold text-center">Mission Statement</h3>
            <p className="text-sm sm:text-lg">
              The Las Vegas K-9 Foundation (LV K-9 Foundation) is a local Las
              Vegas non-profit organization that provides a venue with
              facilities, equipment and associated services for local canine
              organizations’ sporting events, exhibitions, gatherings, and
              educational activities.
            </p>
          </div>
        </section>

        <section className="flex flex-col max-w-7xl gap-4 p-4">
          <h3 className="font-bold">About the LV K-9 Foundation</h3>

          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <p className="text-sm mb-4 sm:mb-0 sm:text-lg">
              The Las Vegas metropolitan area is home to a number of
              canine-oriented organizations, such as the Silver State Kennel
              Club, the Las Vegas Valley Dog Obedience Club and Gamblers Agility
              Club of Greater Las Vegas.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              {ORGANIZATIONS.map(({ image, text, link }, idx) => (
                <HoverCard key={idx} image={image} text={text} link={link} />
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-lg">
            These are local organizations whose activities include AKC
            Conformation, Obedience, and Agility training and competitions and
            other canine events and sporting activities. There is a scarcity of
            available, affordable and appropriate venues for these local
            organizations to host their activities and events, making it
            increasingly difficult for them to function and thrive. The LV K-9
            Foundation was founded by a group of canine enthusiasts from various
            fields of canine activities to address these needs by securing and
            managing a canine-specific facility for these local organizations to
            hold their events and activities.
          </p>
          <p className="text-sm sm:text-lg">
            As a non-profit 501(c)(3), the LV K-9 Foundation will be funded by
            public donations, venue and equipment rentals, primarily to
            canine-specific organizations and individuals, in-venue event
            support services fees and fund-raising activities to support its
            operations and facility acquisition.
          </p>
        </section>

        <div className="flex flex-col bg-main-gray p-4 gap-4 items-center justify-center shadow-shift-right-main rounded-lg overflow-hidden max-w-lg sm:max-w-4xl">
          <h3 className="font-bold">Objectives</h3>
          <p className="text-sm sm:text-lg">
            The primary objective of the LV K-9 Foundation is to provide a venue
            suitable for canine educational, conformation, obedience, agility,
            rally, Meet the Breeds, Canine Good Citizen, Barn Hunt, and other
            canine related events and activities in the Las Vegas metropolitan
            area, which will be named the Las Vegas K-9 Educational and Events
            Center. Initially, this venue will be property leased by the LV K-9
            Foundation until sufficient funds have been raised and a suitable
            property has been located to purchase. This facility will be made
            available to the local organizations at reasonable and affordable
            rates, and the facility will also acquire the equipment and
            furnishings required for these events for rental by these
            organizations for their events and activities. Our primary
            objectives are:
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
              To ensure that local canine organizations have the ability to host
              their activities and events in a suitable and affordable local
              venue
            </li>
            <li>
              To allow them to fulfill their objectives, and not just survive
              but grow and thrive.
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
