import Footer from './Footer';
import PageBanner from './PageBanner';

import dogBanner from '../assets/dog-banner.jpg';
import { ReactNode, useEffect } from 'react';

interface LayoutProps {
  bannerText: string;
  children: ReactNode;
}

// This Layout component is for structuring a consistent layout for all pages except the homepage
export default function Layout({ bannerText, children }: LayoutProps) {
  // This is if the user scrolled to the bottom of one page, it resets to the top of the page on page change
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <main className="flex flex-col gap-8">
        <PageBanner
          text={bannerText}
          src={dogBanner}
          alt="Photo by Pauline Loroy on Unsplash at https://unsplash.com/photos/white-and-brown-long-coat-large-dog-U3aF7hgUSrk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        />

        <div className="flex flex-col items-center gap-8">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
