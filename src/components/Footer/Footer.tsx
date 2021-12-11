import React from 'react';
import './Footer.styles.css';
import { footer } from '../../common/constants';

function Footer() {
  return (
      <section className="footer">
        <div className="footer__container">
          <p className="footer__title">{footer.Title}</p>
          <div className="footer__wrap">
            <p className="footer__copyright">{footer.Copyright}</p>
            <nav className="footer__nav">
              <ul className="footer__links-list">
                <li className="footer__link-item">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="footer__link" rel="noreferrer">{footer.Yandex}</a>
                </li>
                <li className="footer__link-item">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="footer__link" rel="noreferrer">{footer.Git}</a>
                </li>
                <li className="footer__link-item">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="footer__link" rel="noreferrer">{footer.Telegram}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
  );
}

export default Footer;
