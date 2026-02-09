import React from 'react'

function reelsfeed() {
  return (
    <div className="reels-page">
  <div className="reels-feed" role="list">

    <section className="reel" role="listitem">
      <video
        className="reel-video"
        src="video.mp4"
        muted
        playsinline
        loop
        preload="metadata">
      </video>

      <div className="reel-overlay">
        <div className="reel-overlay-gradient" aria-hidden="true"></div>

        <div className="reel-actions">

          <div className="reel-action-group">
            <button className="reel-action" aria-label="Like">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
              </svg>
            </button>
            <div className="reel-action__count">0</div>
          </div>

          <div className="reel-action-group">
            <button className="reel-action" aria-label="Bookmark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"></path>
              </svg>
            </button>
            <div className="reel-action__count">0</div>
          </div>

          <div className="reel-action-group">
            <button className="reel-action" aria-label="Comments">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
              </svg>
            </button>
            <div className="reel-action__count">0</div>
          </div>

        </div>

        <div className="reel-content">
          <p className="reel-description">Sample reel description goes here...</p>
          <a className="reel-btn" href="/food-partner/123" aria-label="Visit store">Visit store</a>
        </div>
      </div>
    </section>

  </div>
</div>

  )
}

export default reelsfeed