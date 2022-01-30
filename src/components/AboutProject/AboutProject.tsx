import React from 'react';
import './AboutProject.styles.css';
import { aboutText } from '../../common/constants';

function AboutProject() {
  return (
    <section className="about__sect">
        <div className="about__container">
      <h2 className="about__title">{aboutText.Title}</h2>
      <div className="about__grid_container">
          <div className="about__container_text">
          <h3 className="about__subtitle">{aboutText.Steps}</h3>
          <p className="about__description">{aboutText.StepsDescription}</p>
          </div>
          <div className="about__container_text">
          <h3 className="about__subtitle">{aboutText.Time}</h3>
          <p className="about__description">{aboutText.TimeDescription}</p>
          </div>
        </div>
      <div className="about__wrapper">
        <div className="about__duration-wrapper about__size-wrapper_backend">
          <div className="about__bar about__duration_backend">{aboutText.Week1}</div>
          <p className="about__gray_subtitle">{aboutText.Back}</p>
        </div>
        <div className="about__duration-wrapper about__size-wrapper_frontend">
            <div className="about__bar about__duration_frontend">{aboutText.Week4}</div>
            <p className="about__gray_subtitle">{aboutText.Front}</p>
        </div>
      </div>
        </div>
    </section>
  );
}

export default AboutProject;
