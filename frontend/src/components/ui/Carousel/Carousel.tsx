import { ReactNode, useEffect, useRef, useState } from 'react';
import './Carousel.scss';
import prevIcon from '@assets/svgs/carousel_prev.svg';
import nextIcon from '@assets/svgs/carousel-next.svg';

type Props = {
  children: ReactNode;
};

const Carousel = ({ children }: Props) => {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        const margin = 12 * 2; // Assuming 12px margin on both sides

        setShowPrevButton(scrollLeft > 0);
        setShowNextButton(scrollLeft < scrollWidth - clientWidth - margin);
      }
    };

    carouselRef.current?.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      carouselRef.current?.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToNextCard = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      const cardWidth =
        card.offsetWidth +
        parseFloat(window.getComputedStyle(card).marginRight); // Include margin
      const scrollWidth = carouselRef.current.scrollWidth;
      const scrollLeft = carouselRef.current.scrollLeft;
      const scrollableWidth = scrollWidth - carouselRef.current.clientWidth; // Calculate the width of the scrollable area
      let scrollDistance = scrollLeft + cardWidth;
      scrollDistance = Math.min(scrollDistance, scrollableWidth); // Ensure scrollDistance doesn't exceed the scrollable width
      carouselRef.current.scrollTo({
        left: scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const scrollToPrevCard = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      const cardWidth =
        card.offsetWidth +
        parseFloat(window.getComputedStyle(card).marginRight); // Include margin
      const scrollLeft = carouselRef.current.scrollLeft;
      const scrollDistance = Math.max(scrollLeft - cardWidth, 0); // Ensure scrollDistance doesn't go below 0
      carouselRef.current.scrollTo({
        left: scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='carousel'>
      <ul className='carousel__inner' ref={carouselRef}>
        {children}
      </ul>
      <div className='carousel__nav'>
        <button
          className='carousel__button'
          style={{
            opacity: showPrevButton ? 1 : 0,
          }}
          onClick={scrollToPrevCard}>
          <img src={prevIcon} alt='carousel-prev' />
        </button>
        <button
          style={{
            opacity: showNextButton ? 1 : 0,
          }}
          className='carousel__button'
          onClick={scrollToNextCard}>
          <img src={nextIcon} alt='carousel-next' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
