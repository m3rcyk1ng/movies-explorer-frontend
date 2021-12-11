import React from 'react';
import './Portfolio.styles.css';
import { portfolio } from '../../common/constants';


function Portfolio() {
  return (
   <section className="portfolio">
       <h4 className="portfolio__title">{portfolio.Title}</h4>
       <ul className="portfolio__links">
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://google.com">
                   <p className="portfolio__name">{portfolio.Static}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://google.com">
                   <p className="portfolio__name">{portfolio.Adaptive}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
           <li className="portfolio__link_container">
               <a className="portfolio__link" href="https://google.com">
                   <p className="portfolio__name">{portfolio.SPA}</p>
                   <div className="portfolio__icon" />
               </a>
           </li>
       </ul>
   </section>
  );
}

export default Portfolio;
