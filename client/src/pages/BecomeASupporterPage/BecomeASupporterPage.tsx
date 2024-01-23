import { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

import dogBanner from "../../assets/dog-banner.jpg";
import PageBanner from "../../components/PageBanner";

export default function BecomeASupporterPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <PageBanner text="Become a Supporter" src={dogBanner} alt="at" />
      <div className="h-screen flex flex-col items-center gap-4 px-4 mt-4">
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

      <Footer />
    </main>
  );
}
