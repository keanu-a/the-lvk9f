import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import displayToast from "../../utils/displayToast";

export default function DonatePage() {
  // This is to display the "501(c)(3)" pop-up
  useEffect(() => {
    displayToast();
  }, []);

  return (
    <>
      <ToastContainer />

      <main className="max-w-4xl mx-auto flex flex-col gap-4 items-center p-2">
        <h2>Donate to The Las Vegas K-9 Foundation</h2>

        <p className="text-xs sm:text-lg">
          The donation link down below will lead you to a secure third party
          service, Stripe. Powered by Stripe: Your payment is securely processed
          via Stripe, a trusted payment service provider. Stripe accepts credit
          cards, digital wallets, and various payment methods, ensuring a secure
          and seamless donation experience.
        </p>

        <p className="btn-red">Coming Soon</p>

        {/* <Link
        to="https://donate.stripe.com/test_aEU7umcMfgZPenC288"
        className="btn-red text-lg"
        >
        Donate Now
      </Link> */}
      </main>
    </>
  );
}
