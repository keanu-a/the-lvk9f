import Layout from '../../components/Layout';

import gallery1 from '../../assets/gallery/gallery1.jpg';
import gallery2 from '../../assets/gallery/gallery2.jpg';
import gallery3 from '../../assets/gallery/gallery3.jpeg';
import gallery4 from '../../assets/gallery/gallery4.jpg';
import gallery5 from '../../assets/gallery/gallery5.jpg';
import gallery6 from '../../assets/gallery/gallery6.jpg';

const GALLERY_IMAGES = [
  { image: gallery1, alt: 'Dog named Mango' },
  { image: gallery2, alt: 'Pocket PACH' },
  { image: gallery3, alt: 'Dog named Stanley at NAC 2015 Challengers' },
  { image: gallery4, alt: 'Dog named Stewie' },
  { image: gallery5, alt: 'Stella BOW Toy Dog' },
  { image: gallery6, alt: 'Dog jumping over a pole' },
];

export default function GalleryPage() {
  return (
    <Layout bannerText="Gallery">
      <div className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {GALLERY_IMAGES.map(({ image, alt }, imageIdx) => (
          <img
            src={image}
            key={imageIdx}
            alt={alt}
            className={`rounded-md shadow-lg w-full ${
              imageIdx % 2 === 1 && 'sm:row-span-2'
            }`}
          />
        ))}
      </div>
    </Layout>
  );
}
