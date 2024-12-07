import React, { useRef } from 'react';
import './styles.css';

function How() {
  const cardContainerRef = useRef(null);

  const scroll = (direction) => {
    if (cardContainerRef.current) {
      const scrollAmount = 350;
      cardContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };
  const scrollToCard = (index) => {
    if (cardContainerRef.current) {
      const cardWidth = 350 + 20; // width + gap of each card
      const offset = index * cardWidth;
      cardContainerRef.current.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="how-container">
      <div className="header-container">
        <div className="header-text">
          <p>HOW IT WORKS</p>
          <h2><span>Lifestyle as medicine:</span> The six pillars</h2>
        </div>
        <div className="header-buttons">
          <button className="scroll-button left" onClick={() => scroll(-1)}>←</button>
          <button className="scroll-button right" onClick={() => scroll(1)}>→</button>
        </div>
      </div>
        <div className="button-container">
        <button onClick={() => scrollToCard(0)}>Nutrition</button>
        <button onClick={() => scrollToCard(1)}>Physical Activity</button>
        <button onClick={() => scrollToCard(2)}>Restorative Sleep</button>
        <button onClick={() => scrollToCard(3)}>Stress Management</button>
        <button onClick={() => scrollToCard(4)}>Social Connection</button>
        <button onClick={() => scrollToCard(5)}>Substance Abuse</button>
      </div>

      <div className="card-scroll-container">
        <div className="card-container" ref={cardContainerRef}>
          <div className="card">
  <div className="card-image-container">
    <img src="/image1s.webp" alt="Nutrition" className="card-image" />
    <div className="card-header">
      <img src="/heart.png" alt="Nutrition Icon" className="card-header-icon" />
      <span className="status">121/80 mmHg</span>
    </div>
  </div>
            <div className="card-content">
              <h3>Nutrition</h3>
              <p>Evidence supports the use of a whole food, plant-predominant diet to prevent, treat, and reverse chronic illness.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src="/image2s.webp" alt="Physical activity" className="card-image" />
              <div className="card-header">
                <img src="/heart2.png" alt="Nutrition Icon" className="card-header-icon" />
                <span className="status">32 minutes</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Physical activity</h3>
              <p>Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src="/image3s.webp" alt="Restorative sleep" className="card-image" />
              <div className="card-header">
              <img src="/moon.png
        " alt="Nutrition Icon" className="card-header-icon" />
                <span className="status">8 hours</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Restorative sleep</h3>
              <p>Consistent, quality sleep is essential for mental and physical health, helping to regulate function and prevent illness.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src="/image4s.webp" alt="Stress management" className="card-image" />
              <div className="card-header">
               <img src="/green.png" alt="Nutrition Icon" className="card-header-icon" />
                <span className="status">60 bpm</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Stress management</h3>
              <p>Effective stress management techniques are crucial for mental well-being and overall health.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src="/image5s.webp" alt="Social connection" className="card-image" />
              <div className="card-header">
               <img src="/heart2.png" alt="Nutrition Icon" className="card-header-icon" />
                <span className="status">Feeling better</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Social connection</h3>
              <p>Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img src="/image6s.webp" alt="Substance abuse" className="card-image" />
              <div className="card-header">
               <img src="/clock.png" alt="Nutrition Icon" className="card-header-icon" />
                <span className="status">62 days</span>
              </div>
            </div>
            <div className="card-content">
              <h3>Substance abuse</h3>
              <p>Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;