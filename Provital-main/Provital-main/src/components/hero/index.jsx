import React, { useState, useEffect } from 'react';
import './styles.css';

const leftImages = [
  '/image1l.webp',
  '/image2l.webp',
  '/image3l.webp',
  '/image4l.webp',
];

const rightImages = [
  '/image1r.webp',
  '/image2r.webp',
  '/image3r.webp',
  '/image4r.webp',
];

function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = (images) => {
      return Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Handle load errors
          });
        })
      );
    };

    const loadAllImages = async () => {
      try {
        await Promise.all([
          preloadImages(leftImages),
          preloadImages(rightImages),
        ]);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    loadAllImages();
  }, []);

  const renderImageColumn = (images, animationClass) => (
    <div className={`image-column ${imagesLoaded ? animationClass : ''}`}>
      {images.concat(images).map((src, index) => (
        <img 
          key={`${src}-${index}`} 
          src={src} 
          alt={`Scrolling image ${index % images.length}`}
          loading="eager"
          className={imagesLoaded ? 'loaded' : 'loading'}
        />
      ))}
    </div>
  );

  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="images-container">
          {renderImageColumn(leftImages, 'top-to-bottom')}
          {renderImageColumn(rightImages, 'bottom-to-top')}
        </div>

        <div className="hero-content">
          <h1>
            Book an appointment with <br />
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases</p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="🔍Condition, procedure, specialty..."
          />
          <input
            type="text"
            className="search-input"
            placeholder="📍City, state, or zipcode"
          />
          <input
            type="text"
            className="search-input"
            placeholder="💌Insurance carrier"
          />
          <button className="search-button">🔍Find now</button>
        </div>
      </div>
      <div className="wave-container">
        <svg
          id="line"
          style={{
            width: "100%",
            position: "absolute",
            bottom: "30",
            left: "0",
          }}
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#FBAB7E" offset="0%"></stop>
              <stop stopColor="#F7CE68" offset="50%"></stop>
              <stop stopColor="#c00d0d" offset="100%"></stop>
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="1440"
            height="30"
            fill="url(#sw-gradient-0)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
