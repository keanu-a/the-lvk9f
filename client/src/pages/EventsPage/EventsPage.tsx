import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function EventsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <div className="h-screen flex flex-col items-center">
        <h2>Events</h2>

        <p>Coming Soon</p>
      </div>

      <Footer />
    </main>
  );
}
