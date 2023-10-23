export default function HeroSection() {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-hero h-[40rem] flex flex-col justify-center tracking-tighter"
    >
      <div className="bg-main-white/50 w-1/2 p-4">
        <h1>The Las Vegas K-9 Foundation</h1>
        <p>Founded 2023</p>
      </div>
    </section>
  );
}
