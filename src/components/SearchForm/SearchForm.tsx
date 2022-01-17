import React, {useEffect, useState} from 'react';
import './SearchForm.css';
import { searchForm } from "../../common/constants";
import {useFormWithValidation} from "../../utils/FormValidator/FormValidator";

function SearchForm({ tumbler, setTumbler, handleFilter, arrayForSearch, moviesInputValue }: any) {
  const { values, handleChange, setValues } = useFormWithValidation();

  function changeTumbler() {
    setTumbler(!tumbler);
  }

  function handleSearchMovie(evt: any) {
    evt.preventDefault();
    handleFilter(arrayForSearch, values.searchInput);
  }

  useEffect(() => {
    setValues({...values, 'searchInput': moviesInputValue})
  }, [moviesInputValue])

  return (
    <section className="search">
      <form className="search-form" method="GET" onSubmit={handleSearchMovie}>
        <input
          className="search-form__input"
          name="searchInput"
          placeholder="Фильм"
          type="search"
          value={values.searchInput}
          onChange={handleChange}
        />
        <button className="search-form__submit-button" type="submit">
          {searchForm.Search}
        </button>
      </form>
      <div className="search-form__container">
        <div className="search-form__switch">
          <input
            type="checkbox"
            id="switch"
            className="search-form__switch-input"
            checked={tumbler}
            onChange={changeTumbler}
          />
          <label htmlFor="switch" className="search-form__switch-button" />
          <label htmlFor="switch" className="search-form__switch-circle" />
        </div>
        <p className="search-form__text">{searchForm.ShortFilms}</p>
      </div>
    </section>
  );
}

export default SearchForm;