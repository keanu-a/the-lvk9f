export default function HeroSection() {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-hero h-[40rem] min-lg:h-[46rem] flex flex-col justify-center tracking-tighter"
    >
      <div className="bg-main-white/50 max-w-4xl p-4 rounded-r-xl">
        <h1>The Las Vegas K-9 Foundation</h1>
        <p>Founded 2023</p>
      </div>
    </section>
  );
}
