import React from 'react';
import '../../styles/profile.css';

const Profile = () => {
  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-meta">

          <img
            className="profile-avatar"
            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
            alt=""
          />

          <div className="profile-info">
            <h1 className="profile-pill profile-business">
              Tasty Bites
            </h1>
            <p className="profile-pill profile-address">
              123 Market Street
            </p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-label">total meals</span>
            <span className="profile-stat-value">120</span>
          </div>

          <div className="profile-stat">
            <span className="profile-stat-label">customer served</span>
            <span className="profile-stat-value">350</span>
          </div>
        </div>
      </section>

      <hr className="profile-sep" />

      <section className="profile-grid">

        <div className="profile-grid-item">
          <video
            className="profile-grid-video"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src=""
            muted
          />
        </div>

        <div className="profile-grid-item">
          <video
            className="profile-grid-video"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src=""
            muted
          />
        </div>

        <div className="profile-grid-item">
          <video
            className="profile-grid-video"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src=""
            muted
          />
        </div>

      </section>
    </main>
  );
};

export default Profile;
