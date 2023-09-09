/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Add scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
        <div className="backto-top">
        <div className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
      </div>
    );
};

export default ScrollTop;