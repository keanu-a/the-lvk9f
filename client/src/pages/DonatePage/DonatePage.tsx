import PageBanner from '../../components/PageBanner';

import dogBanner from '../../assets/dog-banner.jpg';
import Footer from '../../components/Footer';

export default function DonatePage() {
  return (
    <>
      {/* <main className="max-w-4xl mx-auto flex flex-col gap-4 items-center p-2"> */}
      <main className="flex flex-col gap-8 h-[80vh]">
        <PageBanner
          text="Donate"
          src={dogBanner}
          alt="Photo by Pauline Loroy on Unsplash at https://unsplash.com/photos/white-and-brown-long-coat-large-dog-U3aF7hgUSrk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center p-2">
          <p className="text-xs sm:text-lg">
            The donation link down below will lead you to a secure third party
            service, Stripe. Powered by Stripe: Your payment is securely
            processed via Stripe, a trusted payment service provider. Stripe
            accepts credit cards, digital wallets, and various payment methods,
            ensuring a secure and seamless donation experience.
          </p>

          <a
            href="https://donate.stripe.com/4gw8z26Vhe6s3Hq8ww"
            target="_blank"
            className="btn-red text-lg"
          >
            Donate Now
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
