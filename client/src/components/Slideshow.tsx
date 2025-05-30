import { useState, useEffect } from 'react';

interface Image {
  image: string;
  alt: string;
}

interface SlideshowProps {
  imageNames: Image[];
  duration?: number;
  buttonColor?: string | null;
}

// Default landscape type & 5 second changes
export default function Slideshow({
  imageNames = [],
  duration = 8,
  buttonColor = null,
}: SlideshowProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Changes the slide after every 'duration' seconds, default 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment slideIndex, and loop back to 0 when it reaches the end
      setSlideIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
    }, duration * 1000);

    return () => clearTimeout(timer);
  });

  // Boolean function that checks if the slideIndex matches the input index
  const isCurrentSlide = (index: number) => {
    return index === slideIndex;
  };

  // Sets the slide to whichever index input
  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="flex justify-center w-full">
      {/* Slideshow images */}
      <ul className="list-none p-0 w-full">
        {imageNames.map(({ image, alt }, index) => (
          <li key={index} className={`${!isCurrentSlide(index) && 'hidden'}`}>
            <img src={image} alt={alt} className="w-full object-fill" />
          </li>
        ))}
      </ul>

      {/* <ul className="flex list-none">
        {imageNames.map(({ image, alt }, index) => (
          <li
            key={index}
            className={`w-screen transition-transform ease-out -translate-x-[${
              (index - slideIndex) * 100
            }%]`}
          >
            <img src={image} alt={alt} className="w-full object-fill" />
          </li>
        ))}
      </ul> */}

      {/* Slideshow buttons */}
      <ul className="gap-4 flex absolute bottom-0 p-4">
        {imageNames.map((_, index) => (
          <li key={index}>
            <button
              className={`w-6 h-2 rounded-full ${
                isCurrentSlide(index)
                  ? 'opacity-1'
                  : 'opacity-50 hover:bg-main-red'
              } ${buttonColor}`}
              onClick={() => goToSlide(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
