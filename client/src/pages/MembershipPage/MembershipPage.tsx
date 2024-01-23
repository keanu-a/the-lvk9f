import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function MembershipPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <div className="h-screen flex flex-col items-center">
        <h2>Become a Supporter</h2>

        <p>Coming Soon</p>
      </div>

      <Footer />
    </main>
  );
}
