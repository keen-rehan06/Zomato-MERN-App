import React from 'react';
import '../../styles/reels.css';

const Saved = () => {
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
          <h3>Saved Food Reel</h3>
          <p>This is a saved food video description.</p>
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
          <h3>Street Food Special</h3>
          <p>Your favourite saved street food reel.</p>
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
          <h3>Dessert Delight</h3>
          <p>Sweet dish saved reel example.</p>
        </div>
      </div>

    </main>
  );
};

export default Saved;
