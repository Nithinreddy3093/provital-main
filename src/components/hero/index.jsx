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
            placeholder="Condition, procedure, specialty..."
          />
          <input
            type="text"
            className="search-input"
            placeholder="City, state, or zipcode"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Insurance carrier"
          />
          <button className="search-button">Find now</button>
        </div>
      </div>

      <div className="wave-container">
        <svg
          id="wave"
          style={{
            transform: "rotate(0deg)",
            transition: "0.3s",
            width: "100%",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{
              transform: "translate(0, 0px)",
              opacity: 1,
            }}
            fill="url(#sw-gradient-0)"
            d="M0,0L26.7,8.3C53.3,17,107,33,160,35C213.3,37,267,23,320,23.3C373.3,23,427,37,480,43.3C533.3,50,587,50,640,50C693.3,50,747,50,800,41.7C853.3,33,907,17,960,21.7C1013.3,27,1067,53,1120,65C1173.3,77,1227,73,1280,63.3C1333.3,53,1387,37,1413.3,29L1440,21L1440,100L1413.3,100C1387,100,1333.3,100,1280,100C1227,100,1173.3,100,1120,100C1067,100,1013.3,100,960,100C907,100,853.3,100,800,100C747,100,693.3,100,640,100C587,100,533.3,100,480,100C427,100,373.3,100,320,100C267,100,213.3,100,160,100C107,100,53.3,100,26.7,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;