import React from 'react';
import './ButtonMore.styles.css';
import { buttonMore } from "../../common/constants";
import { IButtonMore } from "./IButtonMore";

function ButtonMore({ setAmountShowCards, amountShowCards, addShowCards }: IButtonMore) {
  function handleShowMore() {
    setAmountShowCards(amountShowCards + addShowCards);
  }

  return (
    <section className="button-more">
      <button className="button-more__button" type="button" onClick={handleShowMore}>
        {buttonMore.More}
      </button>
    </section>
  );
}

export default ButtonMore;
