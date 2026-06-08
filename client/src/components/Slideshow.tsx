import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Image {
  image: string;
  alt: string;
}

interface SlideshowProps {
  imageNames: Image[];
  duration?: number;
  children?: React.ReactNode;
}

export default function Slideshow({
  imageNames = [],
  duration = 8,
  children,
}: SlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: duration * 1000, stopOnInteraction: false }),
  ]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {imageNames.map(({ image, alt }, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover block"
                loading={index === 0 ? 'eager' : 'lazy'}
                {...(index === 0 && { fetchpriority: 'high' })}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        {children}
      </div>

      <div className="absolute bottom-4 right-0 transform -translate-x-1/2 flex space-x-4 z-30">
        <button
          onClick={goToPrev}
          className="bg-main-white/20 p-2 rounded-full hover:bg-main-white/50 transition-colors"
        >
          <CaretLeft size={12} color="white" />
        </button>
        <button
          onClick={goToNext}
          className="bg-main-white/20 p-2 rounded-full hover:bg-main-white/50 transition-colors"
        >
          <CaretRight size={12} color="white" />
        </button>
      </div>
    </div>
  );
}
