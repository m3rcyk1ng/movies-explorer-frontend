import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.styles.css';

function PageNotFound() {
    const history = useNavigate();

    return (
    <section className="error">
      <h2 className="error__title">404</h2>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" onClick={() => history(-1)}>Назад</button>
    </section>
  );
}

export default PageNotFound;
