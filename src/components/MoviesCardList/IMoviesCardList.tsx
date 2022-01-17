import { IMovie } from "../Movies/IMovies";
import {IButtonMore} from "../ButtonMore/IButtonMore";

export interface ICardListProps {
  renderFilms: IMovie[],
  userMovies: IMovie[],
  handleCardDelete: (movie: IMovie) => void,
  handleCardSave?: (movie: IMovie) => void,
  amountShowCards: any;
  tumbler: boolean;
  setAmountShowCards: IButtonMore;
  addShowCards: number;
  isLoadingMovies?: boolean;
}