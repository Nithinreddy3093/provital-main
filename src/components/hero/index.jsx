import React, { useState, useEffect } from 'react';
import './styles.css';

const leftImages = [
  '/image1l.png',
  '/image2l.png',
  '/image3l.png',
  '/image4l.png'
];

const rightImages = [
  '/image1r.png',
  '/image2r.png',
  '/image3r.png',
  '/image4r.png'
];

function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = (images) => {
      return images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            resolve(src);
          };
        });
      });
    };

    const loadAllImages = async () => {
      try {
        const allImagePromises = preloadImages([...leftImages, ...rightImages]);
        await Promise.allSettled(allImagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Image loading error:', error);
      }
    };

    loadAllImages();
  }, []);

  const renderImageColumn = (images, animationClass) => (
    <div className={`image-column ${animationClass}`}>
      {images.concat(images).map((src, index) => (
        <img 
          key={`${src}-${index}`} 
          src={src} 
          alt={`Scroll Image ${index % images.length + 1}`}
          loading="eager"
          width="300"
          height="200"
          style={{
            opacity: imagesLoaded ? 1 : 0.5,
            transition: 'opacity 0.3s ease-in-out'
          }}
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
    viewBox="0 0 1440 50" /* Adjusted viewBox to fit the height of the line */
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
      y="0" /* Position the rectangle at the bottom */
      width="1440"
      height="30" /* Set the thickness of the line */
      fill="url(#sw-gradient-0)"
      
    />
  </svg>
</div>



    </div>
  );
}

export default Hero;