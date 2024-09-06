import { useState, useRef, useEffect } from 'react';

const useCarousel = (scrollAmount) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScrollReset = () => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      };

      container.addEventListener('scroll', handleScrollReset);
      return () => container.removeEventListener('scroll', handleScrollReset);
    }
  }, [scrollPosition]);

  return { containerRef, handleScroll };
};

export default useCarousel;
