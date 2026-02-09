import React from 'react';
import '../../styles/auth-shared.css';

const ChooseRegister = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        
        <header>
          <h1 id="choose-register-title" className="auth-title">Register</h1>
          <p className="auth-subtitle">Pick how you want to join the platform.</p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="/user/register" className="auth-submit" style={{ textDecoration: 'none' }}>
            Register as normal user
          </a>

          <a
            href="/food-partner/register"
            className="auth-submit"
            style={{
              textDecoration: 'none',
              background: 'var(--color-surface-alt)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
          >
            Register as food partner
          </a>
        </div>

        <div className="auth-alt-action" style={{ marginTop: '4px' }}>
          Already have an account? <a href="/user/login">Sign in</a>
        </div>

      </div>
    </div>
  );
};

export default ChooseRegister;
