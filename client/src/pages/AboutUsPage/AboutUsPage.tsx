import Layout from '../../components/Layout';
import HoverCard from '../../components/HoverCard';

import {
  UsersFour,
  ShieldCheck,
  Medal,
  HandCoins,
  Dog,
} from '@phosphor-icons/react';

import sskc from '../../assets/sskc.webp';
import lvvdoc from '../../assets/lvvdoc.png';
import lvdice from '../../assets/lvdice.png';
import aboutBottom from '../../assets/about-bottom.jpg';

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
    Icon: UsersFour,
    text: 'To encourage avenues of canine education for the Las Vegas community',
  },
  {
    Icon: ShieldCheck,
    text: 'To provide a safe and secure location for canine related events',
  },
  {
    Icon: Medal,
    text: 'To encourage the next generation of canine enthusiasts in all areas of the sport of dogs',
  },
  {
    Icon: HandCoins,
    text: 'To ensure that local canine organizations have the ability to host their activities and events in a suitable and affordable local venue',
  },
  {
    Icon: Dog,
    text: 'To allow them to fulfill their objectives, and not just survive but grow and thrive.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Layout bannerText="About Us">
        <section className="bg-main-red w-full p-4 sm:py-12">
          <div className="flex flex-col gap-4 justify-center max-w-7xl mx-auto">
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

        <section className="bg-main-gray w-full py-8 sm:px-4">
          <div className="flex flex-col max-w-7xl gap-4 mx-auto px-4 md:px-0">
            <h3 className="font-bold text-center mb-2">
              About the LV K-9 Foundation
            </h3>

            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <p className="text-sm mb-4 sm:mb-0 sm:text-lg lg:w-1/2">
                The Las Vegas metropolitan area is home to a number of
                canine-oriented organizations, such as the Silver State Kennel
                Club, the Las Vegas Valley Dog Obedience Club and Gamblers
                Agility Club of Greater Las Vegas.
              </p>

              <div className="flex flex-col justify-between items-center gap-2 mb-4 sm:flex-row md:w-1/2 ">
                {ORGANIZATIONS.map(({ image, text, link }, idx) => (
                  <HoverCard key={idx} image={image} text={text} link={link} />
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-lg">
              These are local organizations whose activities include AKC
              Conformation, Obedience, and Agility training and competitions and
              other canine events and sporting activities. There is a scarcity
              of available, affordable and appropriate venues for these local
              organizations to host their activities and events, making it
              increasingly difficult for them to function and thrive. The LV K-9
              Foundation was founded by a group of canine enthusiasts from
              various fields of canine activities to address these needs by
              securing and managing a canine-specific facility for these local
              organizations to hold their events and activities.
            </p>
            <p className="text-sm sm:text-lg">
              As a non-profit 501(c)(3), the LV K-9 Foundation will be funded by
              public donations, venue and equipment rentals, primarily to
              canine-specific organizations and individuals, in-venue event
              support services fees and fund-raising activities to support its
              operations and facility acquisition.
            </p>
          </div>
        </section>

        <section className="bg-main-white py-8 w-full">
          <div className="max-w-7xl flex flex-col mx-auto px-4 md:px-4">
            <h3 className="font-bold text-center">Objectives</h3>
            <p className="text-sm mt-4 sm:text-lg">
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
              activities.
            </p>

            <div className="flex flex-col mt-4 md:flex-row md:gap-8">
              <div className="mb-4 md:w-1/2">
                <h4 className="mb-4 md:text-lg">Our primary objectives are:</h4>
                <ul className="flex flex-col gap-6">
                  {OBJECTIVES.map(({ Icon, text }, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Icon
                        className={`w-16 h-16 p-4 rounded-full bg-main-gray ${
                          index % 3 === 0 && 'shadow-shift-right-main'
                        } ${index % 3 === 2 && 'shadow-shift-right-red'} ${
                          index % 3 === 1 && 'shadow-shift-right-yellow'
                        }`}
                      />
                      <p className="text-sm sm:text-base w-full">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-full overflow-hidden my-auto rounded-lg shadow-shift-left-main md:w-1/2">
                <img src={aboutBottom} className="w-full object-cover h-80" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
