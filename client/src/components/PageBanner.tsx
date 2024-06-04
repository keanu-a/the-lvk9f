interface PageBannerProps {
  text: string;
  src: string;
  alt: string;
}

export default function PageBanner({ text, src, alt }: PageBannerProps) {
  return (
    <div className="flex items-center relative before:absolute before:inset-0 before:block before:bg-main-black before:bg-opacity-50">
      <h2 className="absolute p-2 mx text-4xl md:p-16 md:text-6xl text-main-white">
        {text}
      </h2>

      <img src={src} alt={alt} className="w-full h-60 object-cover" />
    </div>
  );
}
