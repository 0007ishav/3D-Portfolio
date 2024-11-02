import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg transition-opacity duration-300 opacity-75 hover:opacity-100 animate-move-up"
        aria-label="Scroll to top"
      >
        ↑ 
      </button>
    )
  );
};

export default ScrollToTop;
