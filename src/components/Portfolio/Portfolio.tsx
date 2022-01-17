import React from 'react';
import './Portfolio.styles.css';
import { portfolio } from '../../common/constants';


function Portfolio() {
  return (
   <section className="portfolio">
       <h4 className="portfolio__title">{portfolio.Title}</h4>
       <ul className="portfolio__links">
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://github.com/m3rcyk1ng/how-to-learn" target="_blank">
                   <p className="portfolio__name">{portfolio.Static}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://github.com/m3rcyk1ng/russian-travel" target="_blank">
                   <p className="portfolio__name">{portfolio.Adaptive}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://github.com/m3rcyk1ng/react-mesto-auth" target="_blank">
                   <p className="portfolio__name">{portfolio.SPA}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
       </ul>
   </section>
  );
}

export default Portfolio;
