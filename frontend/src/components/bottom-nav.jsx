import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/bottom-nav.css'


const BottomNav = () => {

    return(
        <nav className="bottom-nav" role="navigation" aria-label="Bottom">
  <div className="bottom-nav__inner">

    <a href="/" className="bottom-nav__item is-active">
      <span className="bottom-nav__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 10.5 12 3l9 7.5"></path>
          <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"></path>
        </svg>
      </span>
      <span className="bottom-nav__label">Home</span>
    </a>

    <a href="/saved" className="bottom-nav__item">
      <span className="bottom-nav__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"></path>
        </svg>
      </span>
      <span className="bottom-nav__label">Saved</span>
    </a>

  </div>
</nav>

    )
}

export default BottomNav;