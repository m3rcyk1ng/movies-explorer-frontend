import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.styles.css';
import { pageNotFound } from "../../common/constants";

function PageNotFound() {
  const history = useNavigate();

  return (
    <section className="error">
      <h2 className="error__title">{pageNotFound.Amount}</h2>
      <p className="error__text">{pageNotFound.Description}</p>
      <button className="error__button" onClick={() => history(-1)}>{pageNotFound.Back}</button>
    </section>
  );
}

export default PageNotFound;
