import React from 'react';
import './Promo.styles.css';
import { headerText } from '../../common/constants';
import image from '../../assets/images/headerFigure.svg';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <h1 className="promo__title">{headerText.text}</h1>
        <img className="promo__image" src={image} alt="Фигура красивая" />
      </div>
    </div>
  );
}

export default Promo;
