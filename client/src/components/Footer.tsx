import { Link } from 'react-router-dom';
import logo from '../assets/final-multi.jpg';
import { Envelope, Phone } from '@phosphor-icons/react';

interface navText {
  to: string;
  text: string;
}

const footerLinks = [
  {
    title: 'Organization',
    links: [
      {
        to: '/about-us',
        text: 'About Us',
      },
      {
        to: '/events',
        text: 'Events',
      },
      {
        to: '/gallery',
        text: 'Gallery',
      },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      {
        to: '/become-a-supporter',
        text: 'Become a Supporter',
      },
      {
        to: '/donate',
        text: 'Donate',
      },
    ],
  },
];

const companyLinks: navText[] = [
  {
    to: '/about-us',
    text: 'About Us',
  },
  {
    to: '/events',
    text: 'Events',
  },
  {
    to: '/gallery',
    text: 'Gallery',
  },
];

const getInvolvedLinks: navText[] = [
  {
    to: '/become-a-supporter',
    text: 'Become a Supporter',
  },
  {
    to: '/donate',
    text: 'Donate',
  },
];

const contactInformation: string[] = [
  '702-608-7178',
  'info@lasvegask9foundation.org',
];

export default function Footer() {
  return (
    <footer className="w-full mt-8 mb-2 px-2">
      <div className="p-4 w-full flex flex-col bg-main-blue rounded-lg">
        <div className="mx-auto text-main-white sm:w-3/5">
          <div className="flex flex-col gap-8 lg:flex-row justify-between">
            <div className="lg:w-1/2 flex flex-col gap-2">
              <Link to="/">
                <img
                  src={logo}
                  alt="The Las Vegas K-9 Foundation logo"
                  className="rounded-full w-2/5 sm:w-32"
                />
              </Link>

              <p className="font-bold">
                Building a stronger community, one paw at a time!
              </p>

              <p>
                The Las Vegas K-9 Foundation is a registered 501(c)3 non-profit
                organization.
              </p>

              <div>
                <p className="flex items-center gap-1">
                  <Phone />
                  <span>: 702-608-7178</span>
                </p>
                <p className="flex items-center gap-1">
                  <Envelope />
                  <span>: info@lasvegask9foundation.org</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:text-left md:mt-8 sm:grid-cols-2">
              {footerLinks.map(({ title, links }, index) => (
                <div key={index}>
                  <h2 className="font-bold text-lg">{title}</h2>
                  <ul className="flex flex-col gap-2 mt-4">
                    {links.map(({ to, text }, index) => (
                      <li key={index}>
                        <Link
                          to={to}
                          className="text-base hover:text-main-yellow transition"
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs mt-16 sm:text-sm">
            Copyright &copy; 2026 The Las Vegas K-9 Foundation. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
