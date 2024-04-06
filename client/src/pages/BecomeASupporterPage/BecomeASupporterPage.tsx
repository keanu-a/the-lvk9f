import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

export default function BecomeASupporterPage() {
  return (
    <Layout bannerText="Become a Supporter">
      <div className="h-screen flex flex-col items-center">
        <p className="text-xl">
          Exciting updates coming soon! In the meantime, you can show your
          support by making a donation. Every contribution makes a difference!
        </p>

        <Link to="/donate">
          <button className="transition text-xl font-medium donate-btn sm:text-lg">
            Donate Now
          </button>
        </Link>
      </div>
    </Layout>
  );
}
