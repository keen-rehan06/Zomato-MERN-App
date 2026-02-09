import React from 'react';
import '../../styles/reels.css';

const Home = () => {
  return (
    <main className="reels-page">

      <div className="reel-item">
        <video
          className="reel-video"
          src=""
          controls
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="reel-info">
          <h3>Food Video Title</h3>
          <p>Short description of the food video.</p>
        </div>
      </div>

      <div className="reel-item">
        <video
          className="reel-video"
          src=""
          controls
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="reel-info">
          <h3>Another Food Reel</h3>
          <p>Delicious street food example description.</p>
        </div>
      </div>

      <div className="reel-item">
        <video
          className="reel-video"
          src=""
          controls
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="reel-info">
          <h3>Spicy Special</h3>
          <p>Hot and spicy meal preview reel.</p>
        </div>
      </div>

    </main>
  );
};

export default Home;
