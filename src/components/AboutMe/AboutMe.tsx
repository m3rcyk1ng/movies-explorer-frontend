import React from 'react';
import './AboutMe.styles.css';
import { aboutMe } from '../../common/constants';
import photo from '../../assets/images/photo.png';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">{aboutMe.Title}</h2>
      <article className="student__article">
        <div className="student__container">
          <p className="student__name">{aboutMe.Name}</p>
          <p className="student__subtitle">{aboutMe.Subtitle}</p>
          <p className="student__description">{aboutMe.Description}</p>
          <div className="student__social_links">
            <a className="student__social_link" href="https://gordon.com.ua" target="_blank">{aboutMe.Site}</a>
            <a className="student__social_link" href="https://github.com/m3rcyk1ng" target="_blank">{aboutMe.Git}</a>
          </div>
        </div>
        <img className="student__photo" src={photo} alt="Студент" />
      </article>
    </section>
  );
}

export default AboutMe;
