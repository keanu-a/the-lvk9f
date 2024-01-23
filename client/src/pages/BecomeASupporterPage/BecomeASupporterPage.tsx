import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function BecomeASupporterPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <div className="h-screen flex flex-col items-center gap-4 px-4">
        <h2>Become a Supporter</h2>

        <p>
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
