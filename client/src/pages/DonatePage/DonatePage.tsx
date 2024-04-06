export default function DonatePage() {
  return (
    <>
      <main className="max-w-4xl mx-auto flex flex-col gap-4 items-center p-2">
        <h2>Donate to The Las Vegas K-9 Foundation</h2>

        <p className="text-xs sm:text-lg">
          The donation link down below will lead you to a secure third party
          service, Stripe. Powered by Stripe: Your payment is securely processed
          via Stripe, a trusted payment service provider. Stripe accepts credit
          cards, digital wallets, and various payment methods, ensuring a secure
          and seamless donation experience.
        </p>

        <a
          href="https://donate.stripe.com/4gw8z26Vhe6s3Hq8ww"
          target="_blank"
          className="btn-red text-lg"
        >
          Donate Now
        </a>
      </main>
    </>
  );
}
