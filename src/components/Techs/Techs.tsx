import React from 'react';
import './Techs.styles.css';
import { technology, techText } from '../../common/constants';

function Techs() {
  return (
    <section className="tech">
        <div className="tech__container">
      <h2 className="tech__title">{techText.Title}</h2>
      <h3 className="tech__subtitle">{techText.Amount}</h3>
      <p className="tech__paragraph">{techText.Subtitle}</p>
      <ul className="tech__bars">
        <li className="tech__bar">{technology.HTML}</li>
        <li className="tech__bar">{technology.CSS}</li>
        <li className="tech__bar">{technology.JS}</li>
        <li className="tech__bar">{technology.React}</li>
        <li className="tech__bar">{technology.Git}</li>
        <li className="tech__bar">{technology.Express}</li>
        <li className="tech__bar">{technology.Mongo}</li>
      </ul>
        </div>
    </section>
  );
}

export default Techs;
